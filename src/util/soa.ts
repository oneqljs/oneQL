/**
 * soa接口请求方法(+日志)
 */

// import xUtil from 'xUtil'
// fake code
const xUtil = {
  SoaAgent: async(serviceCode, serviceName, params) => {
      return {
        a: 1,
        serviceCode,
        serviceName,
        params,
        ReturnCode: 1,
        UserID: '234a',
      }
  }
}

import Log from './log'

// TODO: common error handler
export default async function SOA(serviceCode, serviceName, params, user?) {
  const logger = Log()
  try {
    const result = await xUtil.SoaAgent(serviceCode, serviceName, params)
    logger.info(result, params, user)
    return result
  } catch (error) {
    logger.error(error, params, user)
    throw new Error(error)
  }
}
