<template>
  <div>
    <ul v-for="goodsitem in goodslist">
      <li>{{goodsitem}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'GoodsList',
    props:{
      goodslist:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
