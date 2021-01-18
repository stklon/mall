<template>
  

  <div class="tarber-item" @click="btn1"><!--是整个一块,所以放这里--><!--为了动态实现，使用插槽-->
       <!--为了动态实现，使用插槽-->
      <!-- <img src="../../assets/img/tarber/home.svg" alt=""> -->
      <!-- <div>首页</div>  -->
        <div v-if="Isactive" class="icon">
            <slot  name="slot-icon"></slot>
            </div><!--插槽是会被替换的,所以内部的绑定什么的就消失了-->
        <div v-else class="icon-active">
            <slot name="slot-icon-active"></slot>
        </div>
        <div :class={active:!Isactive}>
            <slot  name="slot-text"></slot>
        </div>
    </div>
 
</template>

<script>
export default {
    name:"TarberItem",
    props:{
        path:{
            type:String
        }
    },
    data(){
        return {
            // Isactive:true
        }
    },
    methods:{
        btn1(){
            this.$router.push(this.path)
            
        }
    },
    computed:{
        Isactive(){
         return this.$route.path.indexOf(this.path)   
        },
        //也可以通过计算属性来写字体的颜色
    }
}
</script>

<style>
.tarber-item{
  flex: 1;
  text-align: center;
  height: 49px;
  
}

 div .tarber-item{
  background: #f8f8f8;
  /* border: 1px solid rgba(100,100,100,0.1); */
}
.icon img,.icon-active img{
    height: 24px;
    width:24px;
    margin-top:5px;
    vertical-align: middle;
    margin-bottom: 2px;
}
.active{
    color: red;
}
</style>