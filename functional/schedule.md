定时任务
-----
todo context
<p>有些情况可能有一些定时任务的需求， 例如定时触发一下缓存生成，定时积分结算，生成报表 等等。</p>
<p>oneQL 基于node-schedule的基础上，封装了定时任务的配置</p>

<p>推荐用配置</p>

```js
import {runSchedule} from './util/schedule'

let jobs = [
    {
        interval: 1000,
        task: (ctx) => {
            let now = new Date().getTime()
            console.log('task ', now)
        }
    },
    {
        cron: '0-59 * * * * *',
        task: (ctx) => {
            let now = new Date().getTime()
            console.log('task cron ', now)
        }
    }
]

runSchedule(jobs)
```

```sh
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```