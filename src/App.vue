<template>
  <div id="app">
    <router-view></router-view>
    <mainTabbar></mainTabbar>
  </div>
</template>
<script>
import mainTabbar from '@/components/tabbar/mainTabbar'

export default {
    name:'App',
    components:{
     mainTabbar
    }
}
</script>
<style lang="stylus">
  @important 'assets/base/base.css'
  @important 'assets/font-awesom/css/font-awesome.css'
 
</style>
