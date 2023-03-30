<script>
  import { getConfigFromInstance } from "../../utils/charts";
  import Style from './configView.less'
  import JSONEditor from '@json-editor/json-editor';
  import { onMount } from "svelte";
  import { baseConfig } from "../../config/JSONEditorConfig";

  export let isShow = false;
  /** @type {import("echarts").EChartsType | null} */
  let chartInstance = null;
  let chartConfig = null;
  /** @type {'text' | 'form'} */

  export function showConfig(chart) {
    if(!chart) return;
    chartInstance = chart
    chartConfig = getConfigFromInstance(chartInstance)
    updateConfigText(chartConfig)
  }

  /*************
   * JSON TEXT MODE
   * **************/
  let textEditor
  const initJSONEditor = () => {
    // todo: parse schema from https://echarts.apache.org/zh/documents/option-parts/option.js?b77d40f1b4 and 
    // detail: https://echarts.apache.org/zh/documents/option-parts/option.title.js?b77d40f1b4

    textEditor = new JSONEditor.JSONEditor(document.getElementById('textEditorEl'), baseConfig)
    textEditor.on('change', () => {
      let config = textEditor.getValue();
      chartConfig = config
      updateChart()
    })
  }
  const updateConfigText = (config) => {
    textEditor.setValue(config)
  }
  const updateChart = () => {
    if(!chartInstance) return;
    chartInstance.setOption(chartConfig, true)
  } 


  // ***************
  // onMount
  // ***************
  onMount(() => {
    initJSONEditor();
  })

</script>
<div class="config-view" style="display: {isShow ? 'block' : 'none'};">
  <div id="textEditorEl" class="config-view-editor"></div>
</div>