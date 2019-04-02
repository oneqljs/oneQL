import * as Koa from 'koa'
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-bodyparser'
import * as cookie from 'koa-cookie'
import { ApolloServer } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools' // SchemaDirectiveVisitor
import router from './router'
import typeDefs from './types'
import resolvers from './resolvers'
// import { xconfigInit } from './util/xconfig'

// 获取动态config，控制生产开关，配置 etc
// xconfigInit()

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    // mocks
    resolvers,
  }),
  // playground: false
  context: async ({ ctx }: Koa.Context) => {
    const { cookie, request } = ctx
    const { body }: { body: { head } } = request || {}
    const { head = {} } = body || {}
    const { cticket, auth }: {
      cticket?: String
      auth?: String
    } = cookie || {}
    return {
      token: cticket || auth || '',
      head,
      db: 'dbdbb',
      ctx
    }
  }
})

const app = new Koa()

app
  .use(cors({ credentials: true }))
  .use(cookie.default())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

server.applyMiddleware({ app })

const port = 3600
const host = 'localhost'

app.listen(port, host, () =>
  console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
)
