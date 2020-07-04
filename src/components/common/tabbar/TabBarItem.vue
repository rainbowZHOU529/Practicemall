<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <div class="tab-bar-item">首页</div> -->
    
    <div v-if="!isActive"><slot name="item-img" ></slot></div>
    <div v-else><slot name="item-img-active" ></slot></div>
    <div :style="activeStyle"><slot name="item-text" ></slot></div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    data() {
      return {
        // isActive:false
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive(){
        let flag = this.$route.path.indexOf(this.path) != -1;
        // console.log(flag);
        return flag;
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      },
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
      }
    },
  }
</script>

<style>
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
</style>