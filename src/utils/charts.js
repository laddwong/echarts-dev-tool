const ECHARTS_ATTR_NAME = '_echarts_instance_';

/** 获取echarts DOM */
export const getEchartsDomList = () => {
  const domList = document.querySelectorAll(`[${ECHARTS_ATTR_NAME}]`)
  return [].map.call(domList, i => i)
}
/**
 * @typedef ChartInstanceInfo
 * @property {string} name
 * @property {import('echarts').EChartsType} instance
 */
/** 获取页面中的echarts实例列表
 * @returns {Array<ChartInstanceInfo>}
 */
export const getEchartsInstances = () => {
  // eslint-disable-next-line no-undef
  return getEchartsDomList().map(dom => ({ name: dom.id || 'No Name', instance: echarts.getInstanceByDom(dom)}))
}
/** get config from echarts instance */
export const getConfigFromInstance = (chart) => {
  return chart.getOption()
}