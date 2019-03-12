// schema
import hello from './hello'
import city from './city'
import seatSimple from './seatSimple'

const baseResolvers = {
  Query: {
    // 配合baseType，每个oneQL都带有的schema，可以测试连通性
    ONEQL: () => {
      return true
    }
  }
}

const resolvers = [baseResolvers, hello, city, seatSimple]
export default resolvers
