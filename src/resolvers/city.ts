// import SOA from '../util/soa'
import cityMockData from '../api/mockdata/city'

interface CityRequest {
  key?: String
  ext?: String
}

const cityResolvers = {
  Query: {
    city: async (root, arg, context) => {
      const { key, ext }: CityRequest = arg.request || {}
      console.log('key ', key, ' ext ', ext)

      console.log('root: ', root, ' arg: ', arg, ' context: ', context)
      let response
      try {
        var param = {
          key,
          ext
        }
        console.log('param - ', param)
        // response = await SOA('13555', 'airportFuzzySearch', param)

        response = cityMockData

      } catch (error) {
        response = {
          error
        }
      }
      if (response.dataInfo) {
      }

      return response
    }
  }
}

export default cityResolvers
