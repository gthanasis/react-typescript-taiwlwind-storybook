import { Soc } from './types'

declare var GIT_COMMIT_HASH: string;
declare var API_ENDPOINT: string;
declare var DEVELOPMENT: boolean;
declare var LOG_LEVEL: Soc.LogLevels;
declare var LOG_REMOTE_URL: string;

const c: Soc.Config = {
    version: GIT_COMMIT_HASH,
    api: API_ENDPOINT,
    development: DEVELOPMENT,
    log: {
        remoteUrl: LOG_REMOTE_URL,
        level: LOG_LEVEL,
    }
}

if (c.development) console.table(c)

export default c
