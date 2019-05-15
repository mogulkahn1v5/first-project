<template>
<div>
  <nav-bar title="新闻列表" />
  <ul>
    <!-- key值如果接口有id就用，反之用index -->
    <li v-for="news in newsList" :key="news.id">
      <router-link :to="{name:'news.detail',query:{id:news.id}}">
        <i></i>
        <span>{{news.title}}</span>
        <span>点击量：{{news.click}}&nbsp;&nbsp;&nbsp;&nbsp;时间：{{news.add_time | converTime('YYYY-MM-DD')}}</span>
      </router-link>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'news-list',
  data () {
    return {
      newsList: []// 图片数据
    }
  },
  created () {
    // 没接口地址，暂时隐藏
    this.$axios.get('newsList')
      .then(res => {
        this.newsList = res.data
      })
      .catch(err => { console.log('新闻列表异常', err) })
  }
}
</script>
<style scoped>
ul{width:100%;float:left;margin:0 0 50px 0;padding:0;}
ul li{width:100%;height:100px;float:left;margin-bottom:10px;}
ul li a{width:100%;height:100px;float:left;color:#000;}
ul li a i{width:100px;height:100px;float:left;background-color:#f00;}
ul li a span{width:calc(100% - 100px);height:50px;line-height:50px;float:left;font-size:14px;}
</style>
