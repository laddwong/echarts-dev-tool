<script>
  import StartBtn from "../startBtn/StartBtn.svelte";
  import ControllerPanel from "../controllerPanel/controllerPanel.svelte";

  let isShowBtn = true;
  $:isShowPanel = !isShowBtn

  const switchBtnAndPanle = () => {
    isShowBtn = !isShowBtn
  }

</script>
<StartBtn
  bind:isShow={isShowBtn}
  on:clickStart={switchBtnAndPanle}
/>
<ControllerPanel
  bind:isShow={isShowPanel}
  on:closePanel={switchBtnAndPanle}
/>
