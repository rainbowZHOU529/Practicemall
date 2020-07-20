<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>

    <b-scroll class="wrapper" ref="wrapper" :probe-type="3" @ypos="controlback">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :tabtitles="tabtitles" @tabitemClick="tabitemClick"></tab-control>
      <goods-list :goodslist="showGoods"></goods-list>
      
    </b-scroll>

    <back-top @click.native="backtop" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import BScroll from 'components/common/scroll/BScroll';

  import TabControl from 'components/content/tabcontrol/TabControl';
  import GoodsList from 'components/content/goodslist/GoodsList';
  import BackTop from 'components/content/backtop/BackTop';

  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView';
  import FeatureView from './childComps/FeatureView'

  // import {request} from 'network/request';
  import {getHomeMultidata,getHomeNEWS} from 'network/home';

  export default {
    name:'Home',
    components:{
      NavBar,HomeSwiper,RecommendView,FeatureView,TabControl,GoodsList,BScroll,BackTop
    },
    created(){
      // request({url:'/home/multidata'}).then( res=>{
      //   console.log(res);
      // });测试request请求
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('news'),
      this.getHomeGoods('sell')
    },
    data() {
      return {
        banners:[],
        recommends:[],
        tabtitles:['流行','上新','促销'],
        currentGoods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        currentPage:0,
        goods:{
          'pop':{
            page:1,list:[
              'pop1',
              'pop2',
              'pop3',
              'pop4',
              'pop5',
              'pop6',
              'pop7',
              'pop8',
              'pop9',
              'pop10',
              'pop11',
              'pop12',
              'pop13',
              'pop14',
              'pop15',
              'pop16',
              'pop17',
              'pop18',
              'pop19',
              'pop20',
              'pop21',
              'pop22',
              'pop23',
              'pop24',
              'pop25',
              'pop26',
              'pop27',
              'pop28',
              'pop29',
              'pop30',
              'pop31',
              'pop32',
              'pop33',
              'pop34',
              'pop35',
              'pop36',
              'pop37',
              'pop38',
              'pop39',
              'pop40',
              'pop41',
              'pop42',
              'pop43',
              'pop44',
              'pop45',
              'pop46',
              'pop47',
              'pop48',
              'pop49',
              'pop50',
              'pop51',
              'pop52',
              'pop53',
              'pop54',
              'pop55',
              'pop56',
              'pop57',
              'pop58',
              'pop59',
              'pop60',
              'pop61',
              'pop62',
              'pop63',
              'pop64',
              'pop65',
              'pop66',
              'pop67',
              'pop68',
              'pop69',
              'pop70',
              'pop71',
              'pop72',
              'pop73',
              'pop74',
              'pop75',
              'pop76',
              'pop77',
              'pop78',
              'pop79',
              'pop80',
              'pop81',
              'pop82',
              'pop83',
              'pop84',
              'pop85',
              'pop86',
              'pop87',
              'pop88',
              'pop89',
              'pop90',
              'pop91',
              'pop92',
              'pop93',
              'pop94',
              'pop95',
              'pop96',
              'pop97',
              'pop98',
              'pop99',
              'pop100',
            ],
            page:2,list:[
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
            ],
            page:3,list:[
              'pop-page3',
              'pop-page3',
              'pop-page3',
              'pop-page3',
              'pop-page3',
              'pop-page3',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
              'pop-page2',
            ]
          },
          'sell':{page:1,list:[
            'sell1',
            'sell2',
            'sell3',
            'sell4',
            'sell5',
            'sell6',
            'sell7',
            'sell8',
            'sell9',
            'sell10',
            'sell11',
            'sell12',
            'sell13',
            'sell14',
            'sell15',
            'sell16',
            'sell17',
            'sell18',
            'sell19',
            'sell20',
            'sell21',
            'sell22',
            'sell23',
            'sell24',
            'sell25',
            'sell26',
            'sell27',
            'sell28',
            'sell29',
            'sell30',
            'sell31',
            'sell32',
            'sell33',
            'sell34',
            'sell35',
            'sell36',
            'sell37',
            'sell38',
            'sell39',
            'sell40',
            'sell41',
            'sell42',
            'sell43',
            'sell44',
            'sell45',
            'sell46',
            'sell47',
            'sell48',
            'sell49',
            'sell50',
            'sell51',
            'sell52',
            'sell53',
            'sell54',
            'sell55',
            'sell56',
            'sell57',
            'sell58',
            'sell59',
            'sell60',
          ]},
          'news':{page:1,list:[
            'news1',
            'news2',
            'news3',
            'news4',
            'news5']
          }
        },
        isShowBack:false
      }
    },
    computed:{
      showGoods(){
        // console.log(this.currentGoods[this.currentType].list);
        return this.currentGoods[this.currentType].list;
      }
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then( res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
          // console.log(this.recommends);
          // console.log(res);
        })
      },
      getHomeGoods(type){
        // this.currentPage = this.currentPage + 1;
        // this.currentGoods[type].page = this.currentPage;
        this.currentGoods[type].list.push(...this.goods[type].list);
        // console.log(type+':'+this.currentGoods[type].list);
        return this.currentGoods[type].list;
      },
      tabitemClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'news';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      backtop(){
        this.$refs.wrapper.scroll.scrollTo(0,0,500)
      },
      controlback(position){
        this.isShowBack = -(position.y) > 1000;
      }
    }
  }
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav{
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
</style>