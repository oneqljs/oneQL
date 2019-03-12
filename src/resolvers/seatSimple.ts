import { combineResolvers } from 'graphql-resolvers'
import auth from '../util/auth'
import SOA from '../util/soa'

const resolvers = {
  Query: {
    seatSimple: combineResolvers(auth, async (_parent, _args, { user }) => {
      const { uid }: { uid: String } = user || {}
      const param = {
        // detrInfo: null,
        featureFlag: 0,
        landFlag: 'All',
        // localeID: null,
        orderID: '',
        searchType: 'All',
        source: 'Wireless',
        sourceAppID: '', // constant
        subSource: 'Mobile',
        // terminalType: null,
        traceLevel: 0,
        uid
      }
      console.log('param', param)
      try {
        const result = await SOA('11955', 'seatSimple', param)
        return result
      } catch (error) {
        throw new Error(error)
      }
    })
  }
}

export default resolvers
