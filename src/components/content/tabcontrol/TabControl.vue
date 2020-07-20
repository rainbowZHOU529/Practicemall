<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(value,index) in tabtitles" 
    :class="{active:index === currentindex}"
    @click="tabitemClick(index)">
      <span>{{value}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    data() {
      return {
        currentindex: 0,
      }
    },
    props:{
      tabtitles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    computed:{

    },
    methods:{
      tabitemClick(index){
        this.currentindex = index;
        this.$emit('tabitemClick',index)
      }
    }
  }
</script>

<style>
.tab-control{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;

  position: sticky;
  top: 44px;
}
.tab-control-item{
  flex: 1;
}
.active{
  background-color: var(--color-background);
  color: var(--color-tint);
}
.active span{
  padding: 5px;
  border-bottom: 2px solid var(--color-tint);
}
</style>