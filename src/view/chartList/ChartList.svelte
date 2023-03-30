<script>
  import { createEventDispatcher } from "svelte";
  
  export let isShow = true;
  export let chartsList = [];

  const dispatch = createEventDispatcher()
  const handleClickChartItem = (chartKey) => {
    dispatch('showChart', {chartKey});
  }
</script>
<div class="ecdt-chart-list" style="display: {isShow ? 'block' : 'none'};">
  <ul class="chart-list">
    {#each chartsList as chart}
      <li class="chart-list-item">
        <button on:click={handleClickChartItem(chart.key)}>{chart.name}</button>
      </li>
    {/each}
  </ul>
</div>