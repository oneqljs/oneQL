
import { gql } from 'apollo-server-koa'

const helloTypes = gql`
  extend type Query {
    hello(id: String, gg: String): String
  }
`

export default helloTypes
