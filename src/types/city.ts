const cityTypes = `
  extend type Query {
    city(request: CityRequestInput): City
  }
  type User {
    id: String
    gg: String
  }
  type Person {
    name: String
    age: Int
  }
  type City {
    datainfo: [AirportFuzzyInfoType]
  }
  type AirportFuzzyInfoType {
    type: Int
    CountryId: Int
    country: String
    province: String
    sight: String
    cityinfo: [CityFuzzyInfoType]
  }
  type CityFuzzyInfoType {
    id: String
    code: String
    name: String
    ename: String
    timezone: String
    airportinfo: [AirportInformationType]
  }
  type AirportInformationType {
    code: String
    name: String
    ename: String
    dis: Int
    cityname: String
    citycode: String
    nearinfo: [AirportInformationType]
  }
  input ExtensionType {
    key: String
    value: String
  }
  input CityRequestInput {
    key: String
    ext: [ExtensionType]
    Test: Int
    map: String
  }
`

export default cityTypes
