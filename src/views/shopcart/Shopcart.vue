<template>
  <div>
    <h2>购物车</h2>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>

  import { Button, Select } from 'element-ui';

  export default {
    name:'Shopcart',
    components:{
      Button, Select
    }
  }
</script>

<style>

</style>