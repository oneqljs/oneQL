router
------

<p>可能项目除了graphql请求还有一些其他拦截路由的需求，例如登录， 例如健康检查 etc</p>
<p>oneQL里沿用koa-router， 使用方式根目录下建一个router/文件夹</p>

#### 事例
```sh
// src/router/index.ts
import router from 'oneql/router'

router.get('/user', (ctx) => {
    console.log('user -----')

    ctx.body = {
        success: 'user info'
    }
})

export default router
```

<p>访问: (http://localhost:3600/user)</p>
```sh
{
    "success": "user info"
}
```

todo path-to-regexp