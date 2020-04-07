<template>
    <div class="tab">
        <van-tabs v-model="activeName" title-active-color="#ff5777" sticky>
            <van-tab 
                v-for="(value, key) in goods" 
                :key="key"
                :title="goods[key].title"
                :name="key"
            >
               <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    :immediate-check="false"
               >
                    <template v-for="(item, index) in goods[key].list">
                        <router-link :key="index" class="cell" to="aa" tag="div">
                            <img :src="item.show.img" />
                            <div class="describe">
                                <p v-text="item.title"></p>
                                <div class="other">
                                    <span v-text="'¥' + item.price" class="price"></span>
                                    <span class="cfav">
                                        <van-icon name="star-o" />
                                        {{item.cfav}}
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: '',
            loading: false,
            finished: false
        }
    },
    methods: {
        onLoad() {
            let activeName = this.activeName || 'pop'
            this.$emit('child-event', activeName)
        }
    },
    props: ['goods']
}
</script>

<style lang="scss" scoped>
    .tab {
        ::v-deep [class*=van-hairline]::after {
            border: none;
        }
        ::v-deep .van-tabs__line {
            height: 2px;
            width:45px !important;
            bottom: 21px;
            background: #ff5777;
        }
        ::v-deep .van-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0 2px;
            .cell {
                width: 48%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 12px;
                color: #666;
                margin-bottom: 10px;
                img {
                   width: 100%;
                   margin-bottom:5px;
                   border-radius: 2px;
                }
                .describe {
                    p {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin: 0;
                        padding: 0;
                        line-height: 20px;
                    }
                    .other {
                        text-align: center;
                        span {
                            position: relative;
                            margin: 0 5px;
                            &.price {
                                color: #ff5777;
                            }
                            &.cfav {
                                padding-left:6px;
                                i {
                                position: absolute;
                                left: -4px;
                                top: 1px;
                            }
                            }
                            
                        }
                    }
                }
            }
        }

        ::v-deep .van-list__loading {
            width: 100%;
        }
        ::v-deep .van-list__finished-text {
             width: 100%;
        }
    }
</style>