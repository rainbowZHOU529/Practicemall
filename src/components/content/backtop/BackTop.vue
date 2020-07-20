<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="返回顶部">
  </div>
</template>

<script>
  export default {
    name:'BackTop'
  }
</script>

<style scoped>
.backtop{
  position: fixed;
  bottom: 50px;
  right: 10px;
}
.backtop img{
  width: 50px;
  height: 50px;
}
</style>