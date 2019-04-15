Log
----
<p>oneQL 提供的是本地日志功能，会写到服务器文件夹里。</p>
<p>建议打通公司内部日志系统， 例如es日志系统，方便日志分析，问题定位等。</p>


日志分类
-----
```js
interface Logger {
    warn: Function,
    error: Function,
    info: Function,
    debug: Function
}

```

#### 使用方法
```js
import { Log } from 'oneQL/util'

Log.info(objValue)

// objValue字段
interface objValue {
    serviceName: String,
    serviceCode: String,
    message: String,
    custom: any
}
```

#### 打通内部项目
<p>app.config.js 文件里 配置 logConnect方法， 参数obj为日志详细数据</p>

```js
// 打通内部日志系统, app.config.js
logConnect: (objValue) => {
    /**
    * fake code
    * clog.info(objValue.key, objValue.customString)  // object String
    */
}
```