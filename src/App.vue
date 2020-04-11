<template>
  <div id="app">
    <keep-alive> 
      <router-view v-if="$route.meta.keepAlive"></router-view> 
    </keep-alive> 
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Tabbar :menu="menu" :color="color" ref="tabbar" :activePath="activePath" :class="isactive?'':'hidden'"/>
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
      },
      isactive: true
    }
  },
  methods: {
    resetStatus(path) {
      let route_link = path
      let flag = false
      for(let m of this.menu) {
        if(route_link === m.name) {
          this.$refs.tabbar.active = route_link
          flag = true
          break
        }
      }

      if(!flag) {
        this.isactive = false;
      } else {
        this.isactive = true;
      }
    }
  },
  components: {
    Tabbar
  },
  watch:{
    $route(to){
      let route_link = to.path.replace('/', '')
      this.resetStatus(route_link)
    }
  },
  mounted() {
    let route_link = this.$route.path.replace('/', '')
    this.resetStatus(route_link)
  }
}
</script>

<style lang="scss" scoped>
#app {
  margin-bottom: 50px;
  .hidden {
    display: none;
  }
}
</style>
