配置
-----

<p>app.config.js里建议只存放的是应用相关的配置项</p>
<p>config文件夹下建议存放和业务相关的配置项</p>
<p>配置项会自动合拼， 优先级: app.config.js < config.default.js < config.${env}.js</p>


### 多环境配置

<p>oneQL会根据环境变量加载不同的config配置文件, config.default.js 是每个环境都加载的文件; 如果存在自定义环境变量可自行添加对应的config.${env}.js 文件。</p>

```sh
config
├── config.default.js
├── config.dev.js
├── config.fat.js
└── config.prod.js
```

### app.config.js
<p>配置说明，must是必须，其他可选</p>

```sh
{
    port: 3600,      // 启动端口 , must
    env: 'fat',      // dev, fat, pro  , must
    vd: '',          // 服务器拦截的虚拟路径
    graphqlPath: '', // graphql 拦截的路径
    redisName: 'xxx',
    xconfig: ['properties'],
    // 'SOA.Timeout': 100 // soa全局的timeout，可被单独调用的timeout覆盖
}
```

### config
<p>项目、业务相关配置</p>

```sh
{
    xLog: 'oneQL_project',
    middleWare: {

    },
    clusterOpen: false,   // 是否开启多线程
    forkNum: 2,     // fork数量, 如果大于服务器cpu.max数量，按max数量启动
}
```