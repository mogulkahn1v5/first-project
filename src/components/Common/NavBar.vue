<template>
  <div class="back-nav">
    <i @click="goback">返回</i>
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  props: ['title'],
  name: 'nav-bar',
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.back-nav{width:100%;height:80px;float:left;margin-top:40px;}
.back-nav i{width:80px;height:80px;float:left;}
.back-nav span{width:calc(100% - 80px);height:80px;line-height:80px;float:left;text-align:center;font-size:20px;font-weight:bold;}
</style>
