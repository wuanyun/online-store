<template>
    <div class="category">
        <NavBar>
            <div slot="title">{{title}}</div>
        </NavBar>
        <Sidebar :category="category" @child-event="changeCategory" />
        <div class="content">
            <MaitKey :maitKeys='maitKeys' />
            <Recommend :goods='goods' ref="recommend" />
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import Sidebar from './child/Sidebar'
import MaitKey from './child/MaitKey'
import Recommend from './child/Recommend'
import axios from '@/utils/network.js'
export default {
    data () {
        return {
            title: '商品分类',
            category: [],
            maitKeys: [],
            type: 'pop',
            goods: {
                pop: {
                    title: '综合',
                    list: [],
                    page: 1
                },
                new: {
                    title: '新品',
                    list: [],
                    page: 1
                },
                sell: {
                    title: '销量',
                    list: [],
                    page: 1
                }
            }
        }
    },
    methods: {
        _getCategory() {
            axios({
                url: '/category'
            }).then(res => {
                this.category = res.data.data.category.list
                this._getMaitKey(this.category[0].maitKey)
                
                for(let key in this.goods) {
                    this._getMiniWallkey(this.category[0].miniWallkey, key)
                }
            })
        },
        _getMaitKey(maitKey) {
            axios({
                url: '/subcategory',
                params: {
                    maitKey
                }
            }).then(res => {
                this.maitKeys = res.data.data.list
            })
        },
        _getMiniWallkey(miniWallkey, type) {
            axios({
                url: '/subcategory/detail',
                params: {
                    miniWallkey,
                    type
                }
            }).then(res => {
                this.goods[type].list = res.data
            })
        },
        changeCategory(obj) {
            window.scrollTo(0, 0);
            this._getMaitKey(obj.maitKey)
            this.$refs.recommend.activeName = 'pop'
            for(let key in this.goods) {
                    this._getMiniWallkey(obj.miniWallkey, key)
            }
        }
    },
    created() {
        this._getCategory()
    },
    components: {
        NavBar,
        Sidebar,
        MaitKey,
        Recommend
    }
}
</script>

<style lang="scss" scoped>
    .category {
        position: relative;
        .content {
            position: absolute;
            top: 50px;
            right: 0;
            left: 85px;
            padding-bottom: 80px;
            overflow: hidden;
        }
    }
</style>