<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// import MainTabBar from '../src/components/MainTabBar'
import MainTabBar from 'components/content/maintabbar/MainTabBar'

export default {
  name:'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";

body{
  margin: 0px;
  padding: 0px;
  word-wrap: break-word;
}
</style>
