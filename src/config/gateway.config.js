/* eslint-disable */

const protocol = window.location.protocol // 当前协议
const host = protocol + '//' + window.location.host // 当前host

// 开发环境地址(npm run serve)
const devHost = {
  // 测试环境；接口地址域名相关
  baseApi: protocol + '//tpdoc.cn',
  pluginsHost: '', // 第三方资源地址
}

// 测试环境地址(npm run test)
const testHost = {

}

// 预发布环境地址(npm run pre)
const preHost = {

}

// 线上环境地址(npm run build)
const proHost = {

}

// 区分环境选择静态资源地址
const env = process.env.REACT_APP_ENV
console.log('当前构建环境：', env)

let exportConfig = devHost
// if (env === 'production') {
//   exportConfig = proHost
// } else if (env === 'pre') {
//   exportConfig = preHost
// } else if (env === 'test') {
//   exportConfig = testHost
// } else {
//   exportConfig = devHost
// }


export default exportConfig


