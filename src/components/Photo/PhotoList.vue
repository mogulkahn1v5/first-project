<template>
<div>
  <nav-bar title="图文列表" />
  <div class="photo-header">
    <ul>
      <li>
        <a href="javascript:;">标题1</a>
      </li>
      <li>
        <a href="javascript:;">标题2</a>
      </li>
      <li>
        <a href="javascript:;">标题3</a>
      </li>
    </ul>
  </div>
  <div class="photo-list">
    <ul>
      <!-- <li v-for="img in photoList" :key="img.id"> -->
      <li>
        <a>
          <img :src="photoList.img_url" />
          <p>
            <span>{{photoList.title}}</span>
            <br/>
            <span>{{photoList.zhaiyao}}</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'photo-list',
  data () {
    return {
      photoList: []
    }
  },
  created () {
    // 1.获取路由参数categoryId
    let categoryId = this.$route.params.categoryId
    // 2.通过url拼接参数发请求
    this.$axios.get('photoList/' + categoryId)
      .then(res => {
        this.photoList = res.data
      })
      .catch(err => { console.log('图文列表异常', err) })
    // 3.获取数据做渲染
  }
}
</script>
<style scoped>
.photo-header li{list-style:none;display: inline-block;margin-left:10px;height:30px;}
.photo-header ul{white-space:nowrap;overflow-x: auto;padding-left:0px;margin:5px;}
.photo-header{width:100%;height:80px;float:left;}
/*下面的图片*/
.photo-list{width:100%;float:left;}
.photo-list li{width:100%;float:left;list-style:none;position:relative;margin-bottom:50px;}
.photo-list li img{width:100%;height:50px;vertical-align: top;}
.photo-list ul{padding-left:0px;margin:0;}
.photo-list p{position: absolute;bottom:0px;color:white;background-color: rgba(0,0,0,0.3);margin-bottom:0px;}
.photo-list p span:nth-child(1){font-weight: bold;font-size: 16px;}
</style>
