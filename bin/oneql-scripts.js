#!/usr/bin/env node
const process = require('process')
const spawn = require('cross-spawn')
const fs = require('fs')
const path = require('path')
const args = process.argv.slice(2)
const cwd = process.cwd()

const scriptIndex = args.findIndex(
  x => x === 'build' || x === 'eject' || x === 'start' || x === 'test' || x === 'pub'
)

const script = scriptIndex === -1 ? args[0] : args[scriptIndex]
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : []
{
  // ### 定义指令方案，策略模式
  function CommanderDoing(commander) {
    if (typeof this[commander] === 'function') {
      this[commander]()
    } else {
      throw new Error(`Command ${commander} not defined @ oneql`)
    }
  }
  // 运行代码
  CommanderDoing.prototype.start = function() {
    const tsc_path = path.resolve(cwd, './dist/index.js')
    const tsc_src_path = path.resolve(cwd, './dist/src/index.js')
    const tscIsExist = fs.existsSync(tsc_path)
    const tscSrcIsExist = fs.existsSync(tsc_src_path)
    let result = null
    if (tscIsExist) {
      process.chdir('./')
      result = spawn.sync('node', [tsc_path], { stdio: 'inherit' })
    } else if (tscSrcIsExist) {
      process.chdir('./')
      result = spawn.sync('node', [tsc_src_path], { stdio: 'inherit' })
    } else {
      throw new Error(`It's not package yet, please use 'dist' as packageName`)
    }
  }
}

const action = new CommanderDoing(script)
