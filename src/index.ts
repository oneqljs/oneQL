import * as Koa from 'koa'
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-bodyparser'
import * as cookie from 'koa-cookie'
import { ApolloServer } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools' // SchemaDirectiveVisitor
import router from './router'
// import typeDefs from './types'
// import resolvers from './resolvers'
// import { xconfigInit } from './util/xconfig'

// 获取动态config，控制生产开关，配置 etc
// xconfigInit()

import * as path from 'path'

const cwd = process.cwd()

// 如果项目根目录存在app.config 取项目的； 不存在取默认配置； 
// 根目录app.config 优先级 > oneql默认配置


export const appConfig = require(cwd + '/app.config')

interface OneQL {
  props: oneqlProps
}

interface oneqlProps {
  schema: any
}

class OneQL {
  constructor(props) {
    this.props = props

    this.init()
  }

  init() {
    let { schema, ...other } = this.props

    const server = new ApolloServer({
      schema: makeExecutableSchema(schema),
      ...other
      // // playground: false
      // context: async ({ ctx }: Koa.Context) => {
      //   const { cookie, request } = ctx
      //   const { body }: { body: { head } } = request || {}
      //   const { head = {} } = body || {}
      //   const { cticket, auth }: {
      //     cticket?: String
      //     auth?: String
      //   } = cookie || {}
      //   return {
      //     token: cticket || auth || '',
      //     head,
      //     db: 'dbdbb',
      //     ctx
      //   }
      // }
    })
  
    const app = new Koa()

    // before oneql default middleware, custom middleware
    let middleWare = appConfig.middleWare || []

    middleWare.forEach( item => {
      let { name, options = {} } = item
      let pa = path.join(cwd, '/middleware/' + name)

      // 是否关闭中间件， 默认开启
      if (!options.disable) {
        // todo 文件是否存在
        let middleModel = require(pa)

        if(middleModel)
        // 执行对应的中间件
        app.use(middleModel)
      }
    })

    app
      .use(cors({ credentials: true }))
      .use(cookie.default())
      .use(bodyParser())
      .use(router.routes())
      .use(router.allowedMethods())
 

    // after oneql default middleware, custom middleware

    let middleWareAfter = appConfig.middleWareAfter || []

    middleWareAfter.forEach( item => {
      let { name, options = {} } = item
      let pa = path.join(cwd, '/middleware/' + name)

      // 是否关闭中间件， 默认开启
      if (!options.disable) {
        // todo 文件是否存在
        let middleModel = require(pa)

        if(middleModel)
        // 执行对应的中间件
        app.use(middleModel)
      }
    })

    server.applyMiddleware({ app })

    // todo 404

  
    app.use(async (_ctx, next) => {
      console.log('after oneql middleware')

      await next()
    })


    const port = 3600
    const host = 'localhost'
  
    app.listen(port, host, () =>
      console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
    )
  
  }
}




export default OneQL
