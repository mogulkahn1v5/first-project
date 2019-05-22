<template>
  <div>
    <nav-bar title="商品展示" />
    <mt-loadmore :bottom-method="loadBottom" @top-status-change="handleTopChange" ref="loadmore" :bottom-all-loaded="isAllLoaded">
      <ul>
          <li v-for="(goods,index) in goodsList" :key="index">
            <a>
              <img :src="goods.img_url">
              <div class="title">{{goods.title}}</div>
              <div class="desc">
                <div class="sell">
                  <span>￥{{goods.sell_price}}</span>
                  <s>￥{{goods.market_price}}</s>
                </div>
                <div class="detail">
                  <div class="hot">热卖</div>
                  <div class="count">剩{{goods.stock}}件</div>
                </div>
              </div>
            </a>
          </li>
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
      goodsList: [], // 商品列表数据
      topStatus: '',
      page: 1,
      isAllLoaded: false // 全部数据是否加载完毕
    }
  },
  created () {
    this.page = this.$route.query.id || '1'
    this.loadByPage(this.page)
  },
  methods: {
    loadByPage (page) {
      this.$axios.get('goodsList?pageIndex=' + page)
        .then(res => {
          this.goodsList = res.data
          this.page++
        })
        .catch(err => { console.log('商品列表获取失败', err) })
    },
    concatByPage (page) {
      this.$axios.get('goodsList?pageIndex=' + page)
        .then(res => {
          if (res.data === 0) {
            this.$toast('没有更多数据了')
            // 禁止loadmore函数调用
            this.isAllLoaded = true
          }
          this.goodsList = this.goodsList.concat(res.data)
          this.$refs.loadmore.onBottomLoaded() // 通知元素重新定位
          this.page++
        })
        .catch(err => { console.log('商品列表获取失败', err) })
    },
    handleTopChange (status) {
      this.topStatus = status
      console.log(status)
    },
    // loadTop () {
    //   console.log('下拉 函数调用被触发了')
    //   this.$refs.loadmore.onTopLoaded()
    // },
    loadBottom () {
      console.log('上拉 函数调用被触发了')
      this.concatByPage(this.page)
    }
  }
}
</script>
<style scoped>
  .mint-loadmore{width:100%;float:left;}
  ul{width:100%;float:left;overflow: hidden}
  li{width:50%;float:left;padding:6px;box-sizing: border-box;border:1px #ccc solid;}
  a{width:100%;float:left;}
  a img{width:100%;float:left;}
  .title{width:100%;height:20px;line-height:20px;float:left;}
  .desc{width:100%;float:left;color:#aaa;}
  .sell span{color:#f00;}
  .hot{width:50%;float:left;}
  .count{width:50%;float:left;text-align: right;}
</style>
