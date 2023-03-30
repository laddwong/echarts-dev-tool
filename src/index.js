// import { createStartBtn } from "./view/startBtn";
// import { createControllPanel, createSelectList } from "./view/controllPanel";
// import { getEchartsInstances } from "./utils/charts";
// import ControllerPanel from './view/controllerPanel/controllerPanel.svelte'
import Ecdt from './view/ecdt/Ecdt.svelte'

/** init fn
 * @todo 获取echarts配置项和相关注释
 * @todo 配置项类型转成相应的表单项
 * @todo 导出当前配置
 * @todo 导出当前配置时忽略默认部分（减少配置对象的长度）
*/
const init = () => {
  // let chartInstances;
  // let isShowPanel = false;
  // const startBtn = createStartBtn();
  // const panelEl = createControllPanel();
  // startBtn.onclick = function () {
  //   if(!init.isInited) {
  //     init.isInited = true
  //     chartInstances = getEchartsInstances()
  //     createSelectList(chartInstances)
  //   }
  //   isShowPanel = !isShowPanel
  //   panelEl.style.display = isShowPanel ? 'block' : 'none'
  // }
  // document.body.append(startBtn, panelEl)
  new Ecdt({
    target: document.body
  })
}
init();