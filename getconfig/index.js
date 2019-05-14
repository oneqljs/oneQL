// 如果项目根目录存在app.config 取项目的； 不存在取默认配置；
// 根目录app.config 优先级 > oneql默认配置
const path = require('path')
const cwd = process.cwd()
const defaultConfigPath = '../app.config'
const cwdPath = path.resolve(cwd, './app.config')
const defaultPath = path.resolve(__dirname, defaultConfigPath)

let cwdAppConfig, defAppConfig

try {
  defAppConfig = require(defaultPath)
} catch (e) {
  defAppConfig = {}
}

// 项目根路径appConfig
try {
  cwdAppConfig = require(cwdPath)
} catch (e) {
  cwdAppConfig = {}
}

const tempConfig = {
  ...defAppConfig,
  ...cwdAppConfig
}

exports.default = tempConfig
