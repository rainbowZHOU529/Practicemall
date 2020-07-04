<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <h2>首页</h2>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  // import axios from 'axios'
  import {request} from 'network/request';
  import {getHomeMultidata} from 'network/home';

  export default {
    name:'Home',
    components:{
      NavBar
    },
    created(){
      request({url:'/home/multidata'}).then( res=>{
        // console.log('request:'+res);
        console.log(res);
      });
      getHomeMultidata().then( res => {
        // console.log('getHomeMultidata:'+res);
        console.log(res);
      })
    }
  }
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>