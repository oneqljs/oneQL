import * as Router from 'koa-router'
const router = new Router()

// import xUtil from 'xUtil'
// fake code
// const xUtil = {
//   log: {
//       custom: (arg: any): void => {}
//   }
// }

// router.get('/graphql', (ctx, next) => {
//     ctx.body = {
//         success: 'go',
//         ddd: 'aaa'
//     }
// })

router.get('/city', async(ctx) => {

    console.log('city -----')

    ctx.body = {
        success: 'city get',
        city: 'aaa bbb'
    }
})

export default router
