<script>
  import { createEventDispatcher } from "svelte";
  import './startBtn.less'
  import Draggable from "../../components/Draggable.svelte";

  export let isShow = true
  export let btnPositionX;
  export let btnPositionY;
  export let hasMoved;

  const dispatch = createEventDispatcher()
  const handleClickStartBtn = () => {
    dispatch('clickStart')
  }
</script>
<Draggable bind:x={btnPositionX} bind:y={btnPositionY} bind:hasMoved={hasMoved}>
  <button class="ecdt-start-btn" on:click={handleClickStartBtn} style="display: {isShow ? 'block' : 'none'};">
    ECDT
  </button>
</Draggable>