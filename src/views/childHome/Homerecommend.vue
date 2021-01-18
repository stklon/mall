<template>
  <div class="recommend">
      <div v-for="(item,index) in recommend" :key="index" class="commend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"Homerecommend",
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend{
        width: 100%;
        display: flex;
        font-size: 10px;
        margin-top: 10px;
        text-align: center;
        margin-bottom: 8px;
    }
    .commend-item{
        flex: 1;
    }
    .recommend img{
        width: 68px;
        height: 68px;
        margin-bottom: 5px;
    }
</style>