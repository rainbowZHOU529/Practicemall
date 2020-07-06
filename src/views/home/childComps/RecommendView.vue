<template>
  <div class="recommend-view" >
    <div v-for="item in recommends" class="recommend-view-item">
      <a :href="item.link" >
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
.recommend-view{
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
}
.recommend-view-item{
  flex: 1;
}
.recommend-view-item img{
  width: 65px;
  margin: 5px 0;
}
</style>