import { v4 as uuidv4 } from 'uuid';
import { DeviceInfo } from '@/@types/device';
import { ChromePageType, DevicePlatform, ClientRole, AppClientType } from '@/@types/enum';
import { makeUrl, WsUrlParams } from '@/utils/url';
import { config } from '@/config';
import { DebugTarget } from '@/@types/debug-target';

export const createTargetByTunnel = (device: DeviceInfo): DebugTarget => {
  const devtoolsId = uuidv4();
  // 通过 tunnel 创建的 target，暂时使用 devicename 作为调试对象id，后续终端重构后使用 targetCreated 事件抛出的 id
  const clientId = device.devicename;
  const wsUrl = makeUrl(`${config.domain}${config.wsPath}`, {
    platform: device.platform,
    clientId,
    devtoolsId,
    role: ClientRole.Devtools,
  });
  const devtoolsFrontendUrl = makeUrl(`http://${config.domain}/front_end/inspector.html`, {
    remoteFrontend: true,
    experiments: true,
    ws: wsUrl,
    env: global.appArgv.env,
  });
  const title = device.platform === DevicePlatform.IOS ? clientId : 'Hippy debug tools for V8';

  return {
    clientId,
    devtoolsFrontendUrl,
    devtoolsFrontendUrlCompat: devtoolsFrontendUrl,
    thumbnailUrl: '',
    title,
    url: '',
    description: '',
    webSocketDebuggerUrl: `ws://${wsUrl}`,
    platform: device.platform,
    type: ChromePageType.Page,
    appClientTypeList: [AppClientType.Tunnel],
    deviceId: device.deviceid,
    deviceName: device.devicename,
    deviceOSVersion: device.osVersion,
  };
};

export const createTargetByWs = (wsUrlParams: WsUrlParams): DebugTarget => {
  const { clientId, platform, contextName, deviceName } = wsUrlParams;
  const devtoolsId = uuidv4();
  const wsUrl = makeUrl(`${config.domain}${config.wsPath}`, {
    platform,
    clientId,
    devtoolsId,
    role: ClientRole.Devtools,
  });
  const devtoolsFrontendUrl = makeUrl(`http://${config.domain}/front_end/inspector.html`, {
    remoteFrontend: true,
    experiments: true,
    ws: wsUrl,
    env: global.appArgv.env,
  });
  return {
    clientId,
    devtoolsFrontendUrl,
    devtoolsFrontendUrlCompat: devtoolsFrontendUrl,
    thumbnailUrl: '',
    title: contextName,
    url: '',
    description: '',
    webSocketDebuggerUrl: `ws://${wsUrl}`,
    platform,
    type: ChromePageType.Page,
    deviceName,
    appClientTypeList: [AppClientType.WS],
  };
};
