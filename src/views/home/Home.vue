<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <h2>首页</h2>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from './childComps/HomeSwiper'

  // import {request} from 'network/request';
  import {getHomeMultidata} from 'network/home';

  export default {
    name:'Home',
    components:{
      NavBar,HomeSwiper
    },
    created(){
      // request({url:'/home/multidata'}).then( res=>{
      //   console.log(res);
      // });测试request请求
      
      getHomeMultidata().then( res => {
        this.banners = res.data.data.banner.list;
        console.log(this.banners);
        
        this.recommends = res.data.data.recommend.list;
        console.log(res);
      })
    },
    data() {
      return {
        banners:[],
        recommends:[]
      }
    },
  }
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>