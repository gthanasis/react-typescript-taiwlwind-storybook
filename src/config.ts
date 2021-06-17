import { Soc } from './types'

declare let API_ENDPOINT: string
declare let DEVELOPMENT: boolean
declare let LOG_LEVEL: Soc.LogLevels
declare let LOG_REMOTE_URL: string

const c: Soc.Config = {
    api: API_ENDPOINT,
    development: DEVELOPMENT,
    log: {
        remoteUrl: LOG_REMOTE_URL,
        level: LOG_LEVEL
    }
}

if (c.development) console.table(c)

export default c
