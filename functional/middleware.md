中间件
------

<p>oneQL 基于koa，所以中间件和koa的洋葱圈 是一致的。</p>

<img src="../doc/koa-m1.png" style="display: inline-block;width: 350px;" /> <img src="../doc/koa-m2.png" style="display: inline-block;width: 350px;"/>

编写oneQL中间件
-------
<p>项目根目录下的middle文件夹下建一个middleware文件</p>

```sh
middleware/
├── startTime.ts
└── suffix.ts
```

<p>例如统计graphql服务响应时长</p>

```js
// startTime.ts
module.exports = async (ctx, next) => {
    let startTime = Date.now()
    console.log('startTime ', startTime , ctx.req.url)
    await next()

    let endTime = Date.now()
    console.log('endTime ', endTime , ' spend time ', (endTime - startTime) , ctx.req.url)
}
```

配置
----
- 因为oneQL内部默认也有使用中间件， 所以分开了内部中间件 时序前 和内部中间件时序后 2个时序配置控制。
- 每个中间件配置是一个数组，数组顺序为中间件执行时序。
- options 为中间件自定义参数。

```sh
  middleWare: [{
    name: 'startTime',
    options: { // 可选
      disable: false // 是否开启中间件，默认 false
    }
  }]
```


事例
----

```sh
// app.config.js
middleWare: [{
    name: 'startTime',
    options: { // 可选
        disable: false // 是否开启中间件，默认 false
    }
}],
middleWareAfter: [{ // oneQL内置中间件之后执行
    name: 'suffix'
}]

```

```js
// middle/startTime.ts
module.exports = async (ctx, next) => {
    let startTime = Date.now()
    console.log('startTime ', startTime , ctx.req.url)
    await next()

    let endTime = Date.now()
    console.log('endTime ', endTime , ' spend time ', (endTime - startTime) , ctx.req.url)
}

// middle/suffix.ts
module.exports = async (ctx, next) => {
    ctx.suffix = 'suffix middle'
    console.log('after suffix middle ----')
    await next()
    console.log('after suffix middle ---- after next()')
}

```

#### 控制台输出结果
```sh
startTime  1554727961097 /graphql
after suffix middle ----
context city --- suffix middle
city param -  { key: 'D', ext: [ { key: '2', value: '1' } ] }
after suffix middle ---- after next()
endTime  1554727961127  spend time  30 /graphql
```



