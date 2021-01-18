<template>
      <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index"><!--要写key来区分，且不能同时使用item，会使对象重复且更新失败-->
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </swiper-item>
        </swiper>

</template>

<script>
import {Swiper,SwiperItem} from '../../components/common/swiper/index'
export default {
    name:"homeswiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>

</style>