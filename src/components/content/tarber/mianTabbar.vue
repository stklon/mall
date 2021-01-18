<template>
<!--插槽失效缘故:
  最外层的样式写的是左右0,所以四个插槽放在了一起
-->
<div>
  <router-view></router-view>
  <!--3.使用组建-->
  <Tarber><!---添加到插槽-->
  <!--可以使用router-link来路由跳转,但是样式错误-->
    <TarberItem path="/home"><!--再次添加到插槽-->
    <img slot="slot-icon" src="../../../assets/img/tabbar/home.svg" alt="">
    <img slot="slot-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="slot-text">首页</div>
    </TarberItem >
   <TarberItem path="/cate"><!--再次添加到插槽-->
    <img slot="slot-icon" src="../../../assets/img/tabbar/category.svg" alt="">
    <img slot="slot-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="slot-text">分类</div>
    </TarberItem>
    <TarberItem path="/shop"><!--再次添加到插槽-->
     <img slot="slot-icon" src="../../../assets/img/tabbar/cart.svg" alt="">
     <img slot="slot-icon-active" src="../../../assets/img/tabbar/cart_active.svg" alt="">
      <div slot="slot-text">购物车</div>
    </TarberItem>
    <TarberItem path="/profile"><!--再次添加到插槽-->
     <img slot="slot-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
     <img slot="slot-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="slot-text">我的</div>
    </TarberItem>
  </Tarber>

</div>
</template>


<script>
import Tarber from '../../common/tarber/Tarber'//1.导入组建
import TarberItem from '../../common/tarber/TarberItem'
export default {
  name: 'mainTabbar',
  components:{//2.注册组件
    Tarber,
    TarberItem
  }
}
</script>

<style>


</style>
