import * as Koa from 'koa'
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-bodyparser'
import * as cookie from 'koa-cookie'
import { ApolloServer } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools' // SchemaDirectiveVisitor
import { findMiddleAndRequire } from './util/methods'
const cwd = process.cwd()
const yargs = require('yargs')
const argv = yargs.argv
const nodeEnv = argv.NODE_ENV

// import router from './router'

// import typeDefs from './types'
// import resolvers from './resolvers'
// import { xconfigInit } from './util/xconfig'

// 获取动态config，控制生产开关，配置 etc
// xconfigInit()

let graphqlPath

import * as path from 'path'

let router, routerPath
// 区分是开发模式， 还是发布模式
let runPath = nodeEnv === 'development' ? 'src' : 'dist'

// 尝试加载项目下的router文件夹
try {
  routerPath = path.join(cwd, runPath, '/router')
  router = require(routerPath)
} catch(e) {

  console.log('routerPath error ', e)

  try {
    routerPath = path.join(cwd, runPath, 'src/router')
    router = require(routerPath)
  } catch(_e) {
    console.log('routerPath error _e ', e)
  }

}

router = router && router.default 

const appConfigPath = nodeEnv === 'development' ? '' : 'dist/'

// 如果项目根目录存在app.config 取项目的； 不存在取默认配置； 
// 根目录app.config 优先级 > oneql默认配置
const defaultConfigPath = '../app.config'
const cwdPath = path.resolve(cwd, appConfigPath + 'app.config')
const defaultPath = path.resolve(__dirname,  defaultConfigPath)

console.log('cwdPath ', cwdPath ,  ' defaultPath ', defaultPath)

let cwdAppConfig, defAppConfig

try {
  defAppConfig = require(defaultPath)
} catch(e) {
  defAppConfig = {}
}

// 项目根路径appConfig
try {
  cwdAppConfig = require(cwdPath)
} catch(e) {
  cwdAppConfig = {}
}

const tempConfig = {
  ...defAppConfig,
  ...cwdAppConfig
}

export const appConfig = tempConfig


interface OneQL {
  props: oneqlProps
}

interface oneqlProps {
  schema: any
}

// graphqlPath
graphqlPath = appConfig.vd + appConfig.graphqlPath

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
      let middleModel = findMiddleAndRequire(cwd, name, options.disable)
      if (middleModel) app.use(middleModel)
      console.log('middleModel', middleModel)
      // let pa = path.join(cwd, '/middleware/' + name)

      // // 是否关闭中间件， 默认开启
      // if (!options.disable) {
      //   // todo 文件是否存在
      //   let middleModel = require(pa)

      //   if(middleModel)
      //   // 执行对应的中间件
      //   app.use(middleModel)
      // }
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
      let middleModel = findMiddleAndRequire(cwd, name, options.disable)
      if (middleModel) app.use(middleModel)
      // let pa = path.join(cwd, '/middleware/' + name)

      // // 是否关闭中间件， 默认开启
      // if (!options.disable) {
      //   // todo 文件是否存在
      //   let middleModel = require(pa)

      //   if(middleModel)
      //   // 执行对应的中间件
      //   app.use(middleModel)
      // }
    })

    server.applyMiddleware({ app, path: graphqlPath })

    // todo 404
    // app.use(async (_ctx, next) => {
    //   await next()
    // })

    const port = appConfig.port || 3600
    const host = appConfig.host || 'localhost'
  
    app.listen(port, host, () =>
      console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
    )
  
  }
}




export default OneQL
