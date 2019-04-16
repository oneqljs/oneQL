// import xUtil from 'xUtil'
import { appConfig } from '../index'
// fake code 打通内部日志系统
const xUtil = {
    log: {
        custom: (obj: any): void => {
            console.log('obj -- ', obj)

            // 请调用 打通内部日志系统方法 ？
            if (appConfig.logConnect)
              appConfig.logConnect(obj)

        }
    }
}

interface Logger {
    warn: Function,
    error: Function,
    info: Function,
    debug: Function
}

interface objValue {
    serviceName: String,
    serviceCode: String,
    message: String,
    custom: any
}

const logType = ['warn', 'error', 'info', 'debug']

const Log = () => {
    const logger = {} as Logger
    logType.forEach(type => {
      logger[type] = (obj: objValue, ctx) => {
        // const { user } = ctx || {} as UserContext
        const { referrer } = ctx
        const { uid = '' } = ctx.user || {}

        // 写文件信息 (存放在站点上)
        // todo

        
        xUtil.log.custom({
          type,
          serviceName: obj.serviceName,
          serviceCode: obj.serviceCode, // 对应接口id或接口名
          message: obj.message,
          addInfo: {
            ...obj.custom,
            // tags TODO: ClientId Guid
            uid,
            referrer
          }
        })
      }
    })
    return logger
}

export default  Log