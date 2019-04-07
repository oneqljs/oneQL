module.exports = {
  redisName: '',
  xconfig: ['properties'],
  env: 'fws', // support dev, fat, uat, pro
  // 'SOA.Timeout': 100 // [optional] soa全局的timeout，可以被单独调用的timeout覆盖
  port: 3600, // 默认启动端口
  vd: '', // 服务器拦截的虚拟路径
  graphqlPath: '', // graphql 拦截的路径
  middleWare: {}
}
