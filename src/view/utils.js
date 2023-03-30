/** style对象转换成字符串 */
export const styleObjToStr = style => {
  let str = ''
  Object.keys(style).forEach(key => {
    str += `${key}:${style[key]};`
  })
  return str
}