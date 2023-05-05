<script>
  import StartBtn from "../startBtn/StartBtn.svelte";
  import ControllerPanel from "../controllerPanel/controllerPanel.svelte";

  let isShowBtn = true;
  let positionX = 0;
  let positionY = 0;
  let hasMoved = false;
  $:isShowPanel = !isShowBtn

  const switchBtnAndPanle = () => {
    if(hasMoved) return;
    isShowBtn = !isShowBtn
  }

</script>
<StartBtn
  bind:hasMoved={hasMoved}
  bind:btnPositionX={positionX}
  bind:btnPositionY={positionY}
  bind:isShow={isShowBtn}
  on:clickStart={switchBtnAndPanle}
/>
<ControllerPanel
  bind:hasMoved={hasMoved}
  bind:panelPositionX={positionX}
  bind:panelPositionY={positionY}
  bind:isShow={isShowPanel}
  on:closePanel={switchBtnAndPanle}
/>
