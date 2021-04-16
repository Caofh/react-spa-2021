const reg_emailAddress = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/ // 邮箱正则
const reg_space = /\s+/g // 匹配所有空格
const reg_phoneNumber = /^1\d{10}$/ // 电话号码
const reg_url = /^http(s)?:\/\/.*$/ // 链接的正则，如：(http(s)://www.baidu.com)
const reg_number = /^[+-]?\d+(\.\d+|\.)?$/ //数字正则（带有小数点）
const reg_number_nopoint = /^[0-9]*$/ //数字正则（不带小数点）
const reg_word_cn = /^[\u4e00-\u9fa5]*$/ // 匹配中文汉字
const reg_word_eg = /^\w*$/ // 匹配英文字符及0-9，等价于“[A-Za-z0-9_]”
const reg_word_cn_eg = /^[\u4e00-\u9fa5|[A-Za-z]*$/ // 匹配中英文

// 添加收货地址使用-----
const reg_name = /^[A-Za-z0-9|\u4e00-\u9fa5]*$/ // 匹配中英文不含空格(收货人)
const reg_address_info = /[\u4e00-\u9fa5]+/ // 匹配至少含有一个中文(地址详情)
// -----

const reg_logistic = /^[A-Za-z0-9]+$/ // 纯数字+字母校验（物流单号）
const reg_special_word_en = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im // 英文特殊字符
const reg_special_word_cn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im // 中文特殊字符

const reg_ID_card = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/ // 身份证

const reg_tag = /<[^<>]+>/g; // html标签正则
const reg_tag_a = /(?<=(<a.*?>)).*(?=<\/a>)/g; // 匹配出a标签的纯内容
const reg_tag_img = /<img.*?src="(.*?)".*?\/?>/ig; // 匹配出img标签
const reg_zip_code = /[1-9]\d{5}(?!\d)/ // 邮编正则
const reg_zip_code_v2 = /^[1-9]\d{5}/ // 新邮编正则

const reg_telephone_v1 = /^[0-9]{0,4}$/ // 座机-区号-4位
const reg_telephone_v2 = /^[0-9]{7,11}$/ // 座机-号码-7-11位
const reg_telephone_v3 = /^[0-9]{0,6}$/ // 座机-分机号-最多6位


export {
  reg_emailAddress,
  reg_space,
  reg_phoneNumber,
  reg_url,
  reg_number,
  reg_number_nopoint,
  reg_word_cn,
  reg_word_eg,
  reg_word_cn_eg,
  reg_name,
  reg_address_info,
  reg_ID_card,
  reg_logistic,
  reg_special_word_en,
  reg_special_word_cn,
  reg_tag,
  reg_tag_a,
  reg_tag_img,
  reg_zip_code,
  reg_zip_code_v2,
  reg_telephone_v1,
  reg_telephone_v2,
  reg_telephone_v3,
}
