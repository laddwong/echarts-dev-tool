<script>
  /** @type {import('echarts').Echarts} */
  import { createEventDispatcher, onMount } from 'svelte';
  import ChartList from '../chartList/ChartList.svelte'
  import Style from './panelStyle.less'
  import { getEchartsInstances } from '../../utils/charts'  
  import ConfigView from '../configView/ConfigView.svelte';
  import { bind } from 'svelte/internal';

  export let isShow = false;


  /**********
   * page router *
  ************/
  let currPage = 'chartList';
  let isShowChartList = false;
  let isShowConfigView = false;
  const isShowThisPage = page => page === currPage;
  const changePage = page => {
    currPage = page
  }
  $:{
    isShowChartList = currPage === 'chartList'
    isShowConfigView = currPage === 'configPage'
  }
  const toConfigPage = (e) => {
    configViewInstance.showConfig(chartList[e.detail.chartKey].chart)
    changePage('configPage')
  }

  /***********
   * chart config
   ***********/
  let configViewInstance;

  // manage chart list
  let chartList = [];
  const updateChartList = () => {
    chartList = getEchartsInstances().map((item, index) => ({
      name: item.name,
      key: index,
      chart: item.instance
    }))
  }

  // close
  const dispatch = createEventDispatcher();
  const handleClickClose = () => {
    dispatch('closePanel')
  }

  // mount
  onMount(() => {
    // if (chartList.length === 0) updateChartList();
  })

</script>
<div class="ecdt-panel" style="display: {isShow ? 'flex' : 'none'}">
  <div class="ecdt-panel-line">
    <button class="close-btn" on:click={handleClickClose}>close</button>
    <button class="close-btn" on:click={updateChartList}>update</button>
  </div>
  <div class="ecdt-loading"></div>
  <ChartList 
    bind:isShow={isShowChartList}
    bind:chartsList={chartList}
    on:showChart={toConfigPage}
  />
  <ConfigView 
    bind:this={configViewInstance}
    bind:isShow={isShowConfigView}
  />
</div>