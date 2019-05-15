// 存放一些node固有的方法,以及其衍生方法
import { existsSync } from 'fs'
import { join } from 'path'

const yargs = require('yargs');
const argv = yargs.argv;
const nodeEnv = argv.NODE_ENV;

export const currying = function(...args) {
  let fun = args.pop()
  return function(...args_send) {
    let _args = args.concat(Array.prototype.slice.call(args_send))
    return fun.apply(null, _args)
  }
}


// TODO 区分生产模式还是开发模式， js or ts
const exists = function(root, fileName, name) {
  let suffix = nodeEnv === 'development' ? '.ts' : '.js'
  let dir_path = join(root, `/${fileName}/${name}${suffix}`)
  let dir_src_path = join(root, `/src/${fileName}/${name}${suffix}`)
  let dirExist = existsSync(dir_path)
  let dir_src_exist = existsSync(dir_src_path)
  if (dirExist) {
    return dir_path
  } else if (dir_src_exist) {
    return dir_src_path
  } else {
    return false
  }
}

const existsMiddle = function(root, name) {
  return exists(root, 'middleware', name)
}

export const findMiddleAndRequire = function(root, name, isused) {
  let _existsMiddle = existsMiddle(root, name)
  if (!_existsMiddle) {
    throw new Error(`
      middleware ${name} is not exist but used in app.config.js, use option.disable = false to forbidden this middleware
    `)
  } else if (typeof _existsMiddle === 'string') {
    if (isused === undefined || isused) {
      return require(_existsMiddle.replace(/\.(ts|js)/, ''))
    } else {
      return false
    }
  } else {
    throw new Error(`
      a unexpected error occurred, unkown type _existsMiddle was found
    `)
  }
}
