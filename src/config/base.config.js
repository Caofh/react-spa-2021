/*
  基础信息配置文件
 */

import gateWay from './gateway.config'

// 全局错误提示
const errMsg = '网络错误，请稍后重试~'
const successMsg = '操作成功'

const sourceJs = {
  moment: { // 文档：http://momentjs.cn/
    name: 'moment',
    global: 'moment', // 第三方插件的全局变量名，用于避免重复加载
    ver: '0.0.1',
    isLoad: true,
    cache: false,
    // src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js'
    src: `${gateWay.pluginsHost}/plugins/moment/2.24.0/moment.min.js`
  },
}




export {
  errMsg,
  successMsg,
  sourceJs,
}
