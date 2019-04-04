
// types
import cityTypes from './city'
import helloTypes from './hello'
import seatSimpleTypes from './seatSimple'

const baseSchema = `
  type Query {
    ONEQL: Boolean
  }

  type Mutation {
    ONEQL: Boolean
  }

  type Subscription {
    ONEQL: Boolean
  }
`

export default [baseSchema, cityTypes, helloTypes, seatSimpleTypes]
