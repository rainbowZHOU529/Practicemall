<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name:'BScroll',
    props:{
        probeType:{
          type:Number,
          default(){
            return 0
          }
        },
        pullUpLoad:{
          type:Boolean,
          default:false
        }
    },
    data() {
      return {
        scroll:null,

      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        pullUpLoad: {
            threshold: -20
        },
      })
      console.log('BS mouncted success');

      this.scroll.on('scroll',position => {
        // console.log(position);
        this.$emit('ypos',position)
      })

      this.scroll.on('pullingUp',() => {
        console.log('bottom');
        setTimeout(() => {
          this.finishPullUp();
          this.$emit('pullingUp');
        },600)
      })
    },
    methods:{
      scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>