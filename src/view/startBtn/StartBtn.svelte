<script>
  import { createEventDispatcher } from "svelte";
  import Style from './startBtn.less'

  export let isShow = true

  const dispatch = createEventDispatcher()
  const handleClickStartBtn = () => {
    dispatch('clickStart')
  }
</script>
<div class="ecdt-start-btn" on:keydown={handleClickStartBtn} on:click={handleClickStartBtn} style="display: {isShow ? 'block' : 'none'};">
  ECDT
</div>