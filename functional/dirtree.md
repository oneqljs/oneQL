目录结构
------
<p>oneQL 代码都放在src目录下, 入口是index.ts。然后api, types,resolvers,router 子文件夹下都有一个 index.ts, 是每个模块聚合子模块的出口。 <br />
types 是每一个接口 定义一个type文件，每个type对应resolvers下一个resolver子文件，处理具体shema的数据逻辑。<br />
utils文件夹主要是一些工具模块，这里具体根据业务场景 和公司内部开发生态系统，由开发人员自行决定保留那些工具模块。(一些如redis， config功能，可能需要和内部系统打通)<br /></p>

```sh
src
├── api
│   ├── city.ts
│   ├── index.ts
│   └── mockdata
│       └── city.ts
├── app.config.js
├── index.ts
├── middleware
│   ├── startTime.ts
│   └── suffix.ts
├── resolvers
│   ├── city.ts
│   ├── hello.ts
│   ├── index.ts
│   └── seatSimple.ts
└── types
    ├── city.ts
    ├── hello.ts
    ├── index.ts
    └── seatSimple.ts
```