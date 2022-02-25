import { config } from '@/config';
import { getIWDPPages, patchIOSTarget } from '@/utils/iwdp';
import { createTargetByIWDPPage } from '@/utils/debug-target';
import { getDBOperator } from '@/db';
import { DebugTarget } from '@/@types/debug-target';
import { DevicePlatform } from '@/@types/enum';
import { updateIWDPAppClient, subscribeByIWDP } from './pub-sub-manager';

export class DebugTargetManager {
  public static debugTargets: DebugTarget[] = [];

  /**
   * 查询所有连接的调试对象
   */
  public static getDebugTargets = async (hash: string): Promise<DebugTarget[]> => {
    const { iWDPPort } = global.debugAppArgv;
    const { DB } = getDBOperator();
    const db = new DB(config.redis.debugTargetTable);
    let getDebugTargetPromise;
    if (config.isCluster) {
      getDebugTargetPromise = hash ? db.find('hash', hash) : Promise.resolve([]);
    } else {
      getDebugTargetPromise = db.getAll();
    }

    const [targets, iOSPages] = await Promise.all([getDebugTargetPromise, getIWDPPages(iWDPPort)]);
    targets.forEach((target, i) => {
      if (target.platform === DevicePlatform.IOS) {
        targets[i] = patchIOSTarget(target, iOSPages);
        updateIWDPAppClient(targets[i]);
      }
    });
    // 追加 IWDP 获取到的 h5 页面
    const iOSPagesWithFlag = iOSPages as Array<IWDPPage & { shouldRemove?: boolean }>;
    const h5Pages = iOSPagesWithFlag.filter((iOSPage) => !iOSPage.shouldRemove);
    const h5DebugTargets = h5Pages.map(createTargetByIWDPPage);
    subscribeByIWDP(h5DebugTargets);
    DebugTargetManager.debugTargets = targets.concat(h5DebugTargets);
    return DebugTargetManager.debugTargets;
  };

  /**
   * 根据 clientId 查询调试对象
   */
  public static async findDebugTarget(clientId: string, hash: string) {
    const debugTargets = await DebugTargetManager.getDebugTargets(hash);
    return debugTargets.find((target) => target.clientId === clientId);
  }
}
