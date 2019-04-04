// todo add xconfig log
// fake code
// import xconfig from 'xconfig'
// const xconfig = {
//   init: () => {
//     return new Promise((resolve, reject) => {

//     })
//   },
//   getConfig: (arg) => {

//   }
// }

// 保存xconfig的值
let  XCONFIG_OBJ = Object()

export const getXconfig = (key: String) => {
    if(key) {
      return XCONFIG_OBJ[key.toString()]
    } else {
      return XCONFIG_OBJ
    }
}

// 获取xconfig配置
// export const xconfigInit = () => {
//   try {
//     xconfig
//       .init()
//       .then(function() {
//         const configData = xconfig.getConfig('properties')
//         XCONFIG_OBJ = configData

//         // init后默认绑定change事件， 必须在init后
//         // xconfigChange()
//       })
//       .catch(e => {

//       })
//   } catch (e) {
//     try {
//       if (e.message.indexOf('多次初始化') > 0) {
//         const configData = xconfig.getConfig('properties')
//         XCONFIG_OBJ = configData
//       }
//     } catch (ex) {

//     }
//   }

// }

// xconfig change 事件
// const xconfigChange = () => {
//   // 注册xconfig配置变更事件, 第一次执行xconfig
//   xconfig.getConfig('res.properties').on('change', function(changed) {
//     // console.log('changed.configData:', changed.configData)
//     let configDataChange = changed && changed.configData
//     XCONFIG_OBJ = configDataChange 

//     // global.configData = configDataChange
//     // setThreshold(configDataChange);
//   })
// }


