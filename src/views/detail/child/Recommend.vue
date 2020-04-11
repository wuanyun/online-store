<template>
    <div class="recommend" ref="recommend">
        <div class="head">
            {{title}}
        </div>
        <van-list
               >
            <template v-for="(item, index) in recommend">
                <div :key="index" class="cell">
                    <img v-lazy="item.image" />
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
                </div>
            </template>
        </van-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        getTopHight() {
            let topHeight = this.$refs.recommend.getBoundingClientRect().top
            this.$emit('child-event', topHeight)
        }
    },
    props: ['recommend', 'title']
}
</script>

<style lang="scss" scoped>
    .recommend {
        .head {
            height: 50px;
            line-height: 50px;
            padding: 0 8px;
            color: #333;
            font-size: 15px;
        }
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
    }
</style>