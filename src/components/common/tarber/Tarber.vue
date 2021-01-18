<template>
<div>
    <div class="tarber-bar">
    <slot></slot>
    </div>
</div>
  
</template>

<script>
export default {
    name:"Tarber"
}
</script>

<style>
.tarber-bar{
  display: flex;
  position: fixed;
  left: 0%;
  right: 0;
  bottom: 0%;
  box-shadow: 0 1px 1px rgba(100,100,100,0.2);
  font-size: 14px;
}
</style>