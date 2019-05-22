<template>
  <div style="margin-top: 50px">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" ref="loadmore">
      <ul>
        <li v-for="(item,index) in list" :key="index">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6],
      topStatus: ''
    }
  },
  methods: {
    handleTopChange (status) {
      this.topStatus = status
      console.log(status)
    },
    loadTop () {
      console.log('下拉 函数调用被触发了')
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      console.log('上拉 函数调用被触发了')
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>
<style scoped>
  li{list-style: none}
</style>
