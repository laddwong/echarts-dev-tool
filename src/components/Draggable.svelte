<script>
  export let x = 0;
  export let y = 0;
  export let hasMoved = false;
  let mousedownOffsetX = 0;
  let mousedownOffsetY = 0;
  let isDragging = false;
  const handleMouseDown = (event) => {
    isDragging = true;
    hasMoved = false;
    mousedownOffsetX = event.clientX - x
    mousedownOffsetY = event.clientY - y
    // console.log('event info', event);
  };
  const handleMouseMove = (event) => {
    if(isDragging) {
      x = event.clientX - mousedownOffsetX
      y = event.clientY - mousedownOffsetY
      hasMoved = true;
    }
  };
  const handleMouseUp = (event) => {
    isDragging = false;
  };
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
</script>

<div
  style="position: fixed; top:{y}px; left:{x}px; z-index: 10000;"
  on:mousedown={handleMouseDown}
>
  <slot />
</div>
