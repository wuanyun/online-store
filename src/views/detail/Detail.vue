<template>
    <div class="detail">
        <DetailBar :title="title" @child-event="barClick" />
        <DetailSwipe :images="topImages" />
        <Info :info="info" />
        <Shop :shop="shop" />
        <DetailInfo :detailInfo="detailInfo" />
        <ItemParams :itemParams="itemParams" ref="itemParams" @child-event="jump" />
        <Rate :rate="rate" ref="rate" @child-event="jump" />
        <Recommend :recommend="recommend" title="热门推荐" ref="recommend" @child-event="jump" />
        <GoodsActionIcon :cart="cart" />
    </div>
</template>

<script>
import DetailBar from '@/components/navbar/DetailBar'
import DetailSwipe from '@/components/swipe/DetailSwipe'
import Info from './child/Info'
import Shop from './child/Shop'
import DetailInfo from './child/DetailInfo'
import ItemParams from './child/ItemParams'
import Rate from './child/Rate'
import Recommend from './child/Recommend'
import GoodsActionIcon from './child/GoodsActionIcon'


import axios from '@/utils/network.js'
export default {
    data() {
        return {
            title: ['商品', '参数', '评论', '推荐'],
            topImages: [],
            info: {
                title: '',
                price: '',
                oldPrice: '',
                discountDesc: '',
                columns: [],
                services: [],
            },
            shop: {
                name: '',
                logo: '',
                cSells: 0,
                cGoods: 0,
                score: []
            },
            detailInfo: {
                desc: '',
                key: '',
                list: []
            },
            itemParams: {
                sizeInfo: [],
                productInfo: []
            },
            rate: [],
            recommend: [],
            cart: {
                checked: true,
                count: 1,
                desc: '',
                iid: '',
                imgUrl: '',
                price: '',
                title: ''
            }
        }
    },
    methods: {
        _getDetail(iid) {
            axios({
                url: '/detail',
                params: {
                    iid
                }
            }).then(res => {
                this.topImages = res.data.result.itemInfo.topImages
                this.info.title = res.data.result.itemInfo.title
                this.info.price = res.data.result.itemInfo.price
                this.info.oldPrice = res.data.result.itemInfo.oldPrice
                this.info.discountDesc = res.data.result.itemInfo.discountDesc
                this.info.columns = res.data.result.columns
                this.info.services = res.data.result.shopInfo.services

                this.shop.name = res.data.result.shopInfo.name
                this.shop.logo = res.data.result.shopInfo.shopLogo
                this.shop.cSells = res.data.result.shopInfo.cSells
                this.shop.cGoods = res.data.result.shopInfo.cGoods
                this.shop.score = res.data.result.shopInfo.score

                this.detailInfo.desc = res.data.result.detailInfo.desc
                this.detailInfo.key = res.data.result.detailInfo.detailImage[0].key
                this.detailInfo.list = res.data.result.detailInfo.detailImage[0].list

                this.itemParams.sizeInfo = res.data.result.itemParams.rule.tables[0]
                this.itemParams.productInfo = res.data.result.itemParams.info.set

                this.rate = res.data.result.rate.list

                this.cart.desc = res.data.result.itemInfo.desc
                this.cart.iid = res.data.result.itemInfo.iid
                this.cart.imgUrl = res.data.result.itemInfo.topImages[0]
                this.cart.price = res.data.result.itemInfo.lowNowPrice
                this.cart.title = res.data.result.itemInfo.title

                this.initScroll()
            })
        },
        _getRecommend() {
            axios({
                url: '/recommend'
            }).then(res => {
                this.recommend = res.data.data.list
            })
        },
        barClick(data) {
            window.scrollTo(0, 0);
            switch (data) {
                case 0:
                    break;
                case 1:
                    this.$refs['itemParams'].getTopHight()
                    break;
                case 2:
                    this.$refs['rate'].getTopHight()
                    break; 
                case 3:
                    this.$refs['recommend'].getTopHight()
                    break; 
            }
            
        },
        jump(data) {
            data = data - 43
            window.scrollTo(0, data);
        },
        initScroll() {
            window.scrollTo(0, 0);
        }
    },
    components: {
        DetailBar,
        DetailSwipe,
        Info,
        Shop,
        DetailInfo,
        ItemParams,
        Rate,
        Recommend,
        GoodsActionIcon
    },
    created() {
        let iid = this.$route.query.iid
        this._getDetail(iid)
        this._getRecommend()
    }
}
</script>

<style lang="scss" scoped>
    .detail {
        margin-top:44px;
    }
</style>