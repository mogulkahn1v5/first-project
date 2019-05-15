<template>
<div>
  <mt-header title="我的第一个项目" fixed></mt-header>
  <router-view/>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="home">
      <img @click="changeHash" slot="icon" src="./assets/logo.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="member">
      <img @click="changeHash" slot="icon" src="./assets/logo.png">
      会员
    </mt-tab-item>
    <mt-tab-item id="shopcart">
      <img @click="changeHash" slot="icon" src="./assets/logo.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="search">
      <img @click="changeHash" slot="icon" src="./assets/logo.png">
      查找
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeHash () {
      // 该调用早于了 子组件赋值给父组件的selected
      this.$nextTick(function () {
        // 在vue完成渲染以后的行为
        this.$router.push({
          name: this.selected
        })
        console.log(this.selected)
      })
    }
  },
  watch: {
    selected (newV, oleV) {
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>
<style></style>
