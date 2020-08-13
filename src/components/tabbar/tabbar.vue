<template>
  <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
 #tab-bar{
    display:flex;
      background :#f2f2f2;
      position :fixed;
      bottom :0;
      left :0;
      right :0;
  }
</style>