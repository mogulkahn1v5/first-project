<template>
  <div>
    <!-- 上有轮播图 下有九宫格 -->
    <mt-swipe :auto="4000">
      <!-- <mt-swipe-item class="bg1">1</mt-swipe-item>
      <mt-swipe-item class="bg2">2</mt-swipe-item>
      <mt-swipe-item class="bg3">3</mt-swipe-item> -->
      <!-- 没接口地址，暂时隐藏 -->
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.add_img" />
        {{img.title}}
      </mt-swipe-item>
    </mt-swipe>
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <router-link :to="grid.router">
            <span :class="grid.className"></span>
            <b>{{grid.title}}</b>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello app',
      imgs: [],
      grids: [
        {'className': 'newsCol', 'title': '新闻资讯', 'router': {name: 'news.list'}},
        {'className': 'picCol', 'title': '图文分享', 'router': {name: 'photo.list', params: {categoryId: 0}}},
        {'className': 'newsCol', 'title': '商品展示', 'router': {name: 'news.list'}},
        {'className': 'picCol', 'title': '留言反馈', 'router': {name: 'news.list'}},
        {'className': 'newsCol', 'title': '搜索资讯', 'router': {name: 'news.list'}},
        {'className': 'picCol', 'title': '联系我们', 'router': {name: 'news.list'}}
      ]
    }
  },
  created () {
    // 没接口地址，暂时隐藏
    this.$axios.get('posts')
      .then(res => {
        this.imgs = res.data
        console.log(res.data)
      })
      .catch(err => console.log('轮播图获取异常', err))
  }
}
</script>
<style scoped>
.mint-swipe{height:200px;}
.mint-swipe-item{line-height:200px;text-align:center;font-size:50px;color:#000;}
.mint-swipe-item img{width:50%;height:50%;}
.bg1{background-color:#f00;}
.bg2{background-color:#0f0;}
.bg3{background-color:#00f;}
img{width:100%;}
.grid{width:100%;height:200px;float:left;}
li span{width:100%;height:50px;float:left;}
li b{width:100%;height:50px;line-height:50px;text-align:center;float:left;}
.newsCol{background-color:#ff0;}
.picCol{background-color:#0ff;}
</style>
