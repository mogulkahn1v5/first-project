import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import GoodsList from '@/components/Goods/GoodsList'

// 注册全局组件 router-view rouoter-link
// 未来所有组件中的this对象，就都具备该属性，所有的this其实就是Vue的子类对象
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首先进行重定向操作
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    // 新闻列表
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    // 新闻详情
    {
      path: '/news/detail',
      name: 'news.detail',
      component: NewsDetail
    },
    // 图文列表
    {
      path: '/photo/list/:categoryId',
      name: 'photo.list',
      component: PhotoList
    },
    // 商品列表
    {
      path: '/goods/list',
      name: 'goods.list',
      component: GoodsList
    }
  ]
})
