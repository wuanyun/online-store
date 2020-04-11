<template>
    <div class="shop">
        <div class="shop-top">
            <img :src="shop.logo" :alt="shop.name">
            <span>{{shop.name}}</span>
        </div>
        <div class="shop-middle">
            <div class="middle-left">
                <div class="cSells">
                    <p>{{shop.cSells | formatSale}}</p>
                    <p>总销量</p>
                </div>
                <div class="cGoods">
                    <p>{{shop.cGoods}}</p>
                    <p>全部宝贝</p>
                </div>
            </div>
            <div class="middle-right">
                <table>
                    <tr v-for="(item, index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td :class="item.isBetter?'better':'normal'">{{item.score}}</td>
                        <td>
                            <span :class="item.isBetter?'score-better':'score-normal'">{{item.isBetter?'高':'低'}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-footer">
            <span>进店逛逛</span>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['shop'],
    filters: {
        formatSale(value) {
            let newValue = ''
            if (!value) return ''

            if (value < 10000) {
                newValue = value
            } else if (value < 100000000) {
                let num  = value / 10000
                newValue = num.toFixed(1) + '万'
            } else {
                let num  = value / 100000000
                newValue = num.toFixed(1) + '亿'
            }
            return newValue
        }
    }
}
</script>

<style lang="scss" scoped>
    .shop {
        padding: 30px 8px;
        border-bottom: 5px solid #f2f5f8;
        .shop-top {
            width: 100%;
            height: 45px;
            line-height: 45px;
            display: flex;
            img {
                width:45px;
                border-radius: 50%;
                border: 1px solid #e2dfdf;
            }
            span {
                display: inline-block;
                padding-left: 10px;
                color: #666;
            }
        }
        .shop-middle {
            margin-top: 20px;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #666;
            p {
                margin: 0px;
                line-height: 25px;
            }
            .middle-left {
                flex:1;
                display: flex;
                justify-content: space-evenly;
                text-align: center;
                border-right: 1px solid #e2dfdf;
                align-items: center;
            }
            .middle-right {
                flex:1;
                table {
                    margin: auto;
                    td {
                        padding: 2px 8px;
                        &.normal {
                            color: #5ea732;
                        }
                        &.better {
                            color: #ff5777;
                        }
                        .score-normal {
                            background: #5ea732;
                            color: #fff;
                            padding: 0px 2px;
                            border-radius: 2px;
                        }
                        .score-better {
                            background: #ff5777;
                            color: #fff;
                            padding: 0px 2px;
                            border-radius: 2px;
                        }
                    }
                }
            }
        }
        .shop-footer {
            font-size: 14px;
            color: #666;
            text-align: center;
            margin-top: 20px;
            span {
                background: #f2f5f8;
                padding: 5px 40px;
                border-radius: 5px;
            }
        }
    }
</style>