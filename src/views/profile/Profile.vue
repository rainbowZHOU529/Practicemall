<template>
  <div>
    <nav-bar>
      <div class="nav" slot="center">网易新闻</div>
    </nav-bar>
    <b-scroll class="wrapper" ref="wrapper" :probe-type="3" :pull-up-load="true"
    @ypos="controlback" @pullingUp="loadmore">
      <div v-for="item in goodslist" >
        <a :href="item.path" class="item">
          <div class="item-img">
            <img :src="item.image" alt="news image" @load="imgload">
          </div>
          <div class="item-content">
            <h4>{{item.title}}</h4>
            <p>time：{{item.passtime}}</p>
          </div>
          <!-- {{item.path}} -->
        </a>
      </div>
    </b-scroll>
    <back-top @click.native="backtop" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
  import {getHomeNEWS} from 'network/home';
  import NavBar from 'components/common/navbar/NavBar';
  import BScroll from 'components/common/scroll/BScroll';
  import BackTop from 'components/content/backtop/BackTop';

  export default {
    name:'Profile',
    data() {
      return {
        currentGoods:{
          'news':{page:0,list:[]},
        },
        currentPage:0,
        isShowBack:false
      }
    },
    components:{
      NavBar,BScroll,BackTop
    },
    created(){
      this.getHomeNEWS()
    },
    mounted(){
      this.$bus.$on('itemimgload',() => {
        this.$refs.wrapper.refresh();
        console.log('----');
      })
    },
    computed:{
      goodslist(){
        return this.currentGoods['news'].list
      }
    },
    methods:{
      getHomeNEWS(){
        this.currentPage = this.currentPage + 1;
        this.currentGoods['news'].page = this.currentPage;
        console.log('this.currentPage:'+this.currentPage);
        getHomeNEWS(this.currentPage).then( res => {
          this.currentGoods['news'].list.push(...res.data.result)
          console.log(this.currentGoods['news'].list);
          return this.currentGoods['news'].list;
        }).catch( err => {
          console.log('getHomeNEWS err!')
        })
      },
      backtop(){
        this.$refs.wrapper.scrollTo(0,0,500)
      },
      controlback(position){
        this.isShowBack = -(position.y) > 1000;
      },
      loadmore(){
        this.getHomeNEWS()
        this.$refs.wrapper.finishPullUp();
        this.$refs.wrapper.refresh();
      },
      imgload(){
        this.$bus.$emit('itemimgload')
      }
    }
  }
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
}
.wrapper{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
.item{
  height: 120px;
  /* line-height: 250px; */
  text-align: left;

  display: flex;
  align-items: center;

  border-top:1px solid rgb(209, 204, 204);
  border-bottom:1px solid rgb(209, 204, 204);
  padding: 0px 10px;
}
.item-img img{
  width: 120px;
  height: 80px;
  flex:1;
}
.item-content{
  padding-left: 8px;
  flex:2;
}

</style>