<template>
  <div id="app">
    <keep-alive> 
      <router-view v-if="$route.meta.keepAlive"></router-view> 
    </keep-alive> 
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Tabbar :menu="menu" :color="color" ref="tabbar" :activePath="activePath" />
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Tabbar'

export default {
  name: 'App',
  data() {
    return {
      menu: [
        {
          title: '首页',
          name: 'home',
          icon: 'home-o',
          url: '/home'
        },
        {
          title: '分类',
          name: 'category',
          icon: 'apps-o',
          url: '/category'
        },
        {
          title: '购物车',
          name: 'cart',
          icon: 'shopping-cart-o',
          url: '/cart'
        },
        {
          title: '我的',
          name: 'profile',
          icon: 'user-o',
          url: '/profile'
        }
      ],
      activePath: 'home',
      color: {
        activeColor: 'red',
        inactiveColor: 'black'
      }
    }
  },
  components: {
    Tabbar
  },
  watch:{
    $route(to){
      let route_link = to.path.replace('/', '')
      for(let m of this.menu) {
        if(route_link === m.name) {
          this.$refs.tabbar.active = route_link
          break
        }
      }
    }
  }
}
</script>

<style>
#app {
  margin-bottom: 50px;
}
</style>
