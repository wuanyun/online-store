<template>
    <div class="home">
        <NavBar>
            <div slot="title">{{title}}</div>
        </NavBar>
        <Swipe :banner="banner" />
        <Recommend :recommend="recommend" />
        <div class="space10"></div>
        <div class="keywords">
            <img src="../../assets/img/recommend_bg.jpg" alt="">
        </div>
        <Tab 
            :goods="goods" 
            @child-event="updateGoods"
            ref="tab"
        />
    </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import Swipe from '@/components/swipe/Swipe'
import Recommend from '@/components/recommend/Recommend'
import Tab from '@/components/tab/Tab'

import axios from '@/utils/network.js'
export default {
    data() {
        return {
            title: '购物街',
            banner: [],
            recommend: [],
            goods: {
                pop: {
                    title: '流行',
                    list: [],
                    page: 1
                },
                new: {
                    title: '新款',
                    list: [],
                    page: 1
                },
                sell: {
                    title: '精选',
                    list: [],
                    page: 1
                }
            }
        }
    },
    methods: {
        _getMultiData() {
            axios({
                url: '/home/multidata'
            }).then(res => {
                this.banner = res.data.data.banner.list
                this.recommend = res.data.data.recommend.list
            })
        },
        _getGoodsData(type, page) {
            axios({
                url: '/home/data',
                params: {
                    type,
                    page
                }
            }).then(res => {
                let list = res.data.data.list
                this.goods[type].page += 1
                this.goods[type].list.push(...list)
                this.$refs.tab.loading = false
            })
        },
        updateGoods(data) {
           this._getGoodsData(data, this.goods[data].page)
        }
    },
    created() {
        this._getMultiData()
        this._getGoodsData('pop', 1)
        this._getGoodsData('sell', 1)
        this._getGoodsData('new', 1)
    },
    mounted() {
        window.CateListScrollTop = 0;
    },
    beforeRouteLeave (to, from, next) {
        window.CateListScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        next()
    },
    activated() {
        window.scrollTo(0, window.CateListScrollTop);
    },
    components: {
        NavBar,
        Swipe,
        Recommend,
        Tab
    }
}
</script>

<style lang="scss" scoped>
    .home {
        .space10 {
            width: 100%;
            height: 10px;
            background-color: #eeeeee;
        }
        .keywords {
            img {
                width: 100%;
            }
        }
    }
</style>