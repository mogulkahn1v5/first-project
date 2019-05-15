<template>
  <div class="tmpl">
    <nav-bar title="新闻详情" />
    <div class="news-title">
      <p>{{newsDetail.title}}</p>
      <div>
        <span>{{newsDetail.click}}次点击</span>
        <span>分类：{{newsDetail.type}}</span>
        <span>添加时间：{{newsDetail.add_time | converTime('YYYY-MM-DD')}}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsDetail.content"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newsDetail: []
    }
  },
  created () {
    // 获取路由查询字符串参数id
    let id = this.$route.query.id
    this.$axios.get('newsDetail/' + id)
      .then(res => {
        this.newsDetail = res.data
      })
      .catch(err => { console.log('新闻详情异常', err) })
  }
}
</script>
<style scoped>
.new-title{margin-top:5px;border-bottom:1px solid rgba(0,0,0,0.2);}
.new-title p{color:#0a87f8;font-size: 20px;font-weight: bold;}
.new-title span{margin-right:30px;}
/*主体文章的左右距离*/
.news-content{padding:10px 5px;}
</style>
