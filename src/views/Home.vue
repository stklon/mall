<template>
  <div id="home">
        <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
        <homeswiper :banners="banners"></homeswiper>
        <Homerecommend :recommend="recommend"></Homerecommend>
  </div>
</template>

<script>
import NavBar from '../components/common/navbar/NavBar.vue';
import {getHomeMultidata} from '../network/home.js';
import homeswiper from './childHome/homeswiper'
import Homerecommend from './childHome/Homerecommend'
export default {
    name:"Home",
    components:{
      NavBar,
      homeswiper,//组件要注册才能使用
      Homerecommend,
    },
    data(){
      return{
        //把接口数据获取到并保存
        banners:[],
        dKeyword:[],
        keywords:[],
        recommend:[]
      }
    },
    created(){
      //生命周期函数
      //1.请求多个数据,异步操作
      getHomeMultidata().then(res =>{
        console.log(res);
        //函数执行完后会销毁函数内容(内存回收)
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
      })
    }
}
</script>

<style>
.home-bar{
  background-color:var(--color-tint);
  color: #fff;
}
</style>