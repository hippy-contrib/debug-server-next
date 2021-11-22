import Router from 'koa-router';
import request from 'request-promise';
import { v4 as uuidv4 } from 'uuid';
import { AppClientType, DevicePlatform, ClientRole } from '@/@types/enum';
import { StartServerArgv } from '@/@types/app';
import { DebugTarget } from '@/@types/tunnel';
import { model } from '@/db';
import { config } from '@/config';
import { Logger } from '@/utils/log';
import { makeUrl } from '@/utils/url';

const log = new Logger('chrome-inspect-router');

type RouterArgv = Pick<StartServerArgv, 'host' | 'port' | 'iwdpPort' | 'env'>;
let cachedRouterArgv = {} as unknown as RouterArgv;

export const getChromeInspectRouter = (routerArgv: RouterArgv) => {
  cachedRouterArgv = routerArgv;
  const chromeInspectRouter = new Router();

  chromeInspectRouter.get('/json/version', (ctx) => {
    ctx.body = { Browser: 'Hippy/v1.0.0', 'Protocol-Version': '1.1' };
  });

  chromeInspectRouter.get('/json', async (ctx) => {
    const rst = await DebugTargetManager.getDebugTargets();
    ctx.body = rst;
  });

  chromeInspectRouter.get('/json/list', async (ctx) => {
    const rst = await DebugTargetManager.getDebugTargets();
    ctx.body = rst;
  });

  return chromeInspectRouter;
};

export class DebugTargetManager {
  public static debugTargets: DebugTarget[] = [];

  public static getDebugTargets = async (): Promise<DebugTarget[]> => {
    const { iwdpPort } = cachedRouterArgv;

    const [targets, iosPages] = await Promise.all([getTargetsByDB(), getIWDPPages({ iwdpPort })]);

    const iosTargets = [];
    targets.forEach((target) => {
      const pages = iosPages.filter(
        (iosPage) =>
          (target.appClientTypeList[0] === AppClientType.WS && target.title === iosPage.title) ||
          (target.appClientTypeList[0] === AppClientType.Tunnel && target.deviceName === iosPage.device.deviceName),
      );
      if (pages.length) {
        (target as any).shouldRemove = true;
        iosTargets.push(
          ...pages.map((iosPage) => {
            const matchRst = iosPage.title.match(/^HippyContext:\s(.*)$/);
            const bundleName = matchRst ? matchRst[1] : '';
            const targetId = iosPage.webSocketDebuggerUrl;
            const clientId = uuidv4();
            const wsUrl = makeUrl(`${config.domain}${config.wsPath}`, {
              platform: DevicePlatform.IOS,
              clientId,
              targetId,
              role: ClientRole.Devtools,
            });
            const devtoolsFrontendUrl = makeUrl(`http://${config.domain}/front_end/inspector.html`, {
              remoteFrontend: true,
              experiments: true,
              ws: wsUrl,
              env: config.env,
            });
            return {
              ...target,
              device: iosPage.device,
              id: iosPage.webSocketDebuggerUrl,
              title: iosPage.title,
              bundleName,
              devtoolsFrontendUrl,
              devtoolsFrontendUrlCompat: devtoolsFrontendUrl,
              webSocketDebuggerUrl: `ws://${wsUrl}`,
            };
          }),
        );
      }
    });
    DebugTargetManager.debugTargets = targets.filter((target) => !(target as any).shouldRemove).concat(iosTargets);
    return DebugTargetManager.debugTargets;
  };

  public static async findTarget(id: string) {
    const debugTargets = await DebugTargetManager.getDebugTargets();
    return debugTargets.find((target) => target.id === id);
  }
}

const getIWDPPages = async ({ iwdpPort }): Promise<IWDPPage[]> => {
  try {
    const deviceList = await request({
      url: '/json',
      baseUrl: `http://127.0.0.1:${iwdpPort}`,
      json: true,
    });
    const debugTargets: IWDPPage[] =
      (await Promise.all(
        deviceList.map(async (device) => {
          const port = device.url.match(/:(\d+)/)[1];
          try {
            const targets = await request({
              url: '/json',
              baseUrl: `http://127.0.0.1:${port}`,
              json: true,
            });
            targets.map((target) => (target.device = device));
            return targets;
          } catch (e) {
            log.error(e);
            return [];
          }
        }),
      )) || [];
    return debugTargets.flat();
  } catch (e) {
    log.error(e);
    return [];
  }
};

const getTargetsByDB = async (): Promise<Array<DebugTarget>> => await model.getAll(config.redis.key);
