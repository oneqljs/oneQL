const schedule = require('node-schedule');

// 解析interval
const analyInterval = (param) => {
    const isNum = typeof param === 'number'
    let num = isNum ? param : 0
    
    // 如果是毫秒，不用转换了
    if (isNum) return num

    // 如果是字符串
    const unit = param.substr(-1, 1)
    const value = parseInt(param)

    switch(unit) {
        case 's':
            num = value * 1000
            break;
        case 'm':
            num = value * 1000 * 60
            break;
        case 'h':
            num = value * 1000 * 60 * 60
            break;
    }

    return num
}

/**
 * @param jobs 
 * jobs [{
 *      cron: '42 * * * * *',
 *      interval: '1m', // 1 分钟间隔, 单位支持  s, m, h ; 不支持组合使用 例如 1m10s,  请换算 70s
 *      task: () => {
 *          // do sth
 *      }
 * }]
 */
export const runSchedule = (jobs) => {
    try {
        if (jobs && jobs instanceof Array) {
            jobs.forEach((item) => {
                let { cron, interval, task } = item
              
                // interval 优先级比cron高
                if (interval) {
                    let ms = analyInterval(interval)

                    ms > 0 && setInterval(task, ms)
                } else if (cron) {
                    schedule.scheduleJob(cron, task)
                }
            })
        }
    } catch(e) {
        // todo set log
        console.log('runSchedule e', e)
    }
}

