import { gql } from 'apollo-server-koa'

// types
import cityTypes from './city'
import helloTypes from './hello'
import seatSimpleTypes from './seatSimple'

const baseSchema = gql`
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
