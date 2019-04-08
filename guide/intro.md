oneQL
-----
Use koa + apollo-server-koa <br/>

[![npm][npm]][npm-url]
[![node][node]][node-url]

oneQL是一个为BFF（Backend For Frontend 服务于前端的后端）而生的渐进式框架。 <br/>
建筑在koa, apollo-server-koa之上的企业级graphql解决方案。<br />
小至目录结构, 代码规范, 大至框架配套, 日常维护, 项目扩展 思考整个开发流程。<br />
我们希望基于oneQL之上衍生出更多贴切团队开发场景的上层框架, 真正提高开发效率。 

#### 设计原则

oneQL 推崇约定大于配置，配置即是代码。<br/>
团队开发过程中，约定俗成 会让大家在配合过程中减少不必要的沟通。 <br />
良好的代码规范，简单清晰的目录结构能让开发者或新参与者感到开发是一种愉悦的体验。<br /> 

#### 项目打通

由于oneQL提供的是一个解决方案，每个公司都可能有一些内部系统可以和oneQL打通的地方。<br/>
例如配置系统，日志记录系统，redis系统 <br/>
\* 鉴于每个公司基础建设不一样，所以oneQL里有部分伪代码，需要具体项目，具体场景把这部分和对应的基础系统打通，真正连接起来。

#### 代码规范

oneQL默认支持了 typescript, commit代码前会有eslint和tslint校验。
可自行添加自定义的规则(Todo 规则配置方法)。<br />
commit代码前，会经过prettier 格式化，尽最大可能统一团队代码风格。


[npm]: https://img.shields.io/npm/v/oneql.svg
[npm-url]: https://npmjs.com/package/oneql

[node]: https://img.shields.io/node/v/oneql.svg
[node-url]: https://nodejs.org
