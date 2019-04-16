// import SOA from '../util/soa'
import cityMockData from '../api/mockdata/city'

interface CityRequest {
  key?: string
  ext?: string
}

const cityResolvers = {
  Query: {
    city: async (root, arg, context) => {
      const { key, ext }: CityRequest = arg.request || {}

      let response
      try {
        // fake code
        // const param = {
        //   key,
        //   ext
        // }
        // response = await SOA('13555', 'airportFuzzySearch', param)

        response = cityMockData
      } catch (error) {
        response = {
          error
        }
      }
      // if (response.dataInfo) {
      // }

      return response
    }
  }
}

export default cityResolvers
