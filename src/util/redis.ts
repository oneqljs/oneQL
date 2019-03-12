// 配置
import * as config from '../../app.config'
// 事例
// import * as xUtil from 'xputil' 
// fake code
let xUtil = {
    Redis: (_arg) => void {

    }
}
let redisConnectFlag
let redisName = config.redisName
let redis

// 如果带了redisName
if (redisName) {
  redis = xUtil.Redis({
    name: redisName
  })

  // 连接redis， 成功后设置标记位
  redis.connect(err => {
    if (!err) {
      redisConnectFlag = true
    }
  })
}

// 改成同步get获取， 简化外部调用逻辑
let getRedisPromise = key => {
  return new Promise((resolve, reject) => {
    redis.get(key, (err, value) => {
      if (err) {
        reject(err)
      } else {
        resolve(value)
      }
    })
  })
}

// 对外暴露的redis方法

/** @param key    string
 *  @param value  string
 *  @param cb  ?  fun
 *  @param expireTime ?  number
 **/
export let redisSet = (key, value, cb, _expireTime) => {
  if (redisConnectFlag) {
    redis.set(key, value, cb)
  }
}

/** @param key    string
 **/
export let redisGet = async key => {
  if (redisConnectFlag) {
    return await getRedisPromise(key)
  } else {
    return ''
  }
}



// 建议实现 feature
// const redisConnect = await redis.connect()
// const redisSet = await redis.set(key, value)
// const redisGet = await redis.get(key)

