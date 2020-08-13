<template>
   <div class="tab-bar-item" @click="item_click">
         <div :class="{active:isactive}">
            <slot name='icon-font'></slot>
         </div>
          <div :class="{active:isactive}">
            <slot name='icon-text'></slot>
          </div>
   </div>
</template>
<script>
export default {
  props:{
     path:String,
  },
    data(){
      return{
        // isactive:true
      }
    },
    computed:{
      isactive(){
        return this.$route.path.indexOf(this.path) !==-1
      }
    },
    methods:{
      item_click(){
        this.$router.push(this.path)
      }
    }
}
</script>
<style lang="stylus" scoped>
 .tab-bar-item{
        flex:1;
        text-align :center;
         height :49px;
         box-shadow :0 -3px rgba(10,10,10,.2);
         font-size :14px;
         vertical-align :middle;
         margin-top :2px;
         .icon.iconfont{
           font-size:22px;
         }
      }
      .active{
        color:red
      }
</style>