export namespace Soc {
    export type LogLevels = 'info' | 'warn' | 'debug' | 'fatal' | 'error'
    export type Config = {
        version: string
        api: string
        development: boolean,
        log: {
            remoteUrl: string,
            level: LogLevels
        }
    }
    export type Environment = {
        url: {
            current: string,
            referrer: string
        }
        timeOffset: number
        userAgent: string
        cookieEnabled: boolean
        dnt: string | null
        resolution: {
            height: number
            width: number
        }
        languages: Array<string>
        origin: string
        browserID: string
    }
    export type Logger = {
        info: any
        debug: any
        warn: any
        fatal: any
        error: any
    }
}
