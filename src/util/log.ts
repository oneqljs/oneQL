// import xUtil from 'xUtil'
// fake code
const xUtil = {
    log: {
        custom: (arg: any): void => {
            console.log('arg -- ', arg)
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