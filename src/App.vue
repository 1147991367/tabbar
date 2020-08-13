<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path='/home'>
         <i slot='icon-font' class="icon iconfont icon-shouye2"></i>
        <div slot='icon-text'>首页</div>
      </tabbaritem>
      <tabbaritem path='/about'>
        <i slot='icon-font' class="icon iconfont icon-icon-test"></i>
          <div slot='icon-text'>分类</div>
      </tabbaritem>
      <tabbaritem path='/list'>
         <i slot='icon-font' class="icon iconfont icon-dingdan3"></i>
          <div slot='icon-text'>订单</div>
      </tabbaritem>
      <tabbaritem path='/profile'>
          <i slot='icon-font' class="icon iconfont icon-gerenzhongxin3"></i>
          <div slot='icon-text'>我的</div>
      </tabbaritem>
   </tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar/tabbar'
import tabbaritem from '@/components/tabbar/tabbaritem'
export default {
    name:'App',
    components:{
      tabbar,
      tabbaritem,
    }
}
</script>
<style lang="stylus">
  @important 'assets/base/base.css'
  @important 'assets/font-awesom/css/font-awesome.css'
 
</style>
