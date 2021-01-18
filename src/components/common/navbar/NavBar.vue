<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style>
 .nav-bar{
     display: flex;
     line-height: 44px;/*要放内容才能撑起来 */
     text-align: center;
 }
 .left,.right{
     width: 60px;
 }
 .center{
     flex:1;/*中间宽度减去两个60就是中间的*/ 
     
 }
</style>