<template>
    <div class="info">
        <p class="desc" v-text="info.title"></p>
        <p class="price">
            <span class="curr-price" v-text="info.price"></span>
            <span class="old-price" v-text="info.oldPrice"></span>
            <van-tag round color="#ff5777">{{info.discountDesc}}</van-tag>
        </p>
        <div class="column">
            <span v-for="(item, index) in info.columns" :key="index" >{{item}}</span>
        </div>
        <div class="services">
            <span 
                v-for="(item, index) in info.services" 
                :key="index"
            >
                <template v-if="index < 4">
                    <van-icon name="passed" />
                    {{item.name}}
                </template>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['info']
}
</script>

<style lang="scss" scoped>
    .info {
        padding: 15px 8px 0 8px;
        border-bottom: 5px solid #f2f5f8;
        p {
            margin: 0px;
            padding: 0px;
            color: #222;
            &.desc {
                font-size: 16px;
                line-height: 20px;
            }
            &.price {
                height: 50px;
                line-height: 50px;
                .curr-price {
                    color: #ff5777;
                    font-size: 22px;
                }
                .old-price {
                    color: #999;
                    font-size: 13px;
                    margin-left: 10px;
                    text-decoration:line-through;
                }
                ::v-deep .van-tag {
                    position: relative;
                    margin-left: 5px;
                    display: inline-block;
                    top: -5px;
                }
            }
        }
        .column {
            color: #999;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            border-bottom: 1px solid #f1f1f1;
            padding-bottom: 8px;

        }
        .services {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: #333;
            height: 60px;
            line-height: 60px;
            span {
                overflow: hidden;
            }
        }
        
    }
</style>