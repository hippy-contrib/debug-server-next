import path from 'path';
import { StaticFileStorage } from '@/@types/enum';

export const config: Config = {
  ...getPublicDomain(),
  wsPath: '/debugger-proxy',
  cachePath: path.join(__dirname, 'cache'),
  hmrStaticPath: path.join(process.env.HMRStaticPath || __dirname, 'hmr'),
  logPath: path.join(__dirname, 'log'),
  hmrPortPath: path.join(__dirname, 'cache/hmr-port.txt'),
  iWDPStartPort: global.debugAppArgv?.iWDPStartPort || 9200,
  iWDPEndPort: global.debugAppArgv?.iWDPEndPort || 9300,
  redis: {
    // ⚠️ redis-server 6 以下，username 需要置空
    url: `redis://:${process.env.REDIS_PWD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`,
    debugTargetTable: 'tdf:debugtargets',
    bundleTable: 'tdf:bundles',
    logTablePrefix: 'tdf:logs:',
  },
  isCluster: process.env.IS_CLUSTER === 'true',
  cos: {
    SecretId: process.env.SecretId,
    SecretKey: process.env.SecretKey,
    Bucket: process.env.Bucket,
    Region: process.env.Region,
    StorageClass: process.env.StorageClass,
  },
  staticFileStorage: (process.env.StaticFileStorage as StaticFileStorage) || StaticFileStorage.Local,
  aegisId: 'yxqehauSsvzBZxdRmz',
  showPerformance: false,
};

interface Config {
  domain: string;
  wsDomain: string;
  wsProtocol: string;
  wsPath: string;
  cachePath: string;
  hmrStaticPath: string;
  logPath: string;
  hmrPortPath: string;
  iWDPStartPort: number;
  iWDPEndPort: number;
  redis: {
    url: string;
    debugTargetTable: string;
    bundleTable: string;
    logTablePrefix: string;
  };
  isCluster: boolean;
  cos: {
    SecretId: string;
    SecretKey: string;
    Bucket: string;
    Region: string;
    StorageClass: string;
  };
  staticFileStorage: StaticFileStorage;
  aegisId: string;
  showPerformance: boolean;
}

function getPublicDomain() {
  const hostFromArgv =
    !global.debugAppArgv?.host || global.debugAppArgv?.host === '0.0.0.0' ? 'localhost' : global.debugAppArgv?.host;
  const portFromArgv = global.debugAppArgv?.port || 38989;
  const domain = process.env.DOMAIN || `http://${hostFromArgv}:${portFromArgv}`;
  const wsDomain = domain.replace('https://', 'wss://').replace('http://', 'ws://');
  const wsProtocol = domain.startsWith('https://') ? 'wss' : 'ws';
  return { domain, wsDomain, wsProtocol };
}
