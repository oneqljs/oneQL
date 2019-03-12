/**
 * 登录验证
 */
import { skip } from 'graphql-resolvers'
import SOA from './soa'

interface UtilAuthResult {
  UserID: string
}

/**
 * 验证登录信息接口
 * @param ctx graphQL的上下文
 * @return userInfo 用户登录信息
 */
async function getUid(ctx) {
  const { token, head } = ctx
  try {
    const result = await SOA('10093', 'ValidateAndGetNewToken', { Token: token, head })
    let { UserID } : UtilAuthResult = result 
    if (result.ReturnCode === 0) {
      const userInfo = {
        uid: UserID,
      }
      return userInfo
    } else {
      throw new Error('未登录')
    }
  } catch (err) {
    throw new Error(err)
  }
}

const auth = async (_parent, _args, ctx) => {
  try {
    const user = await getUid(ctx)
    ctx.user = user
    console.log('auth result', user)
  } catch (err) {
    console.log('auth error', err)
    throw new Error(`auth error ${err}`)
  }

  return skip
}

export default auth
