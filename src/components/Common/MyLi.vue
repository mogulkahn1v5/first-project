<template>
  <li>
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'my-li',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
li{width:33.33%;height:100px;float:left;list-style:none;}
</style>
