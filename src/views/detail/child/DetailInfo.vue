<template>
    <div class="detailInfo">
        <div class="top clearfloat">
            <div class="top-top"></div>
            <p class="top-middle">{{detailInfo.desc}}</p>
            <div class="top-footer"></div>
        </div>
        <p class="key">{{detailInfo.key}}</p>
        <div class="list">
            <img v-for="(item, index) in detailInfo.list" :key="index" v-lazy="item" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['detailInfo']
}
</script>

<style lang="scss" scoped>
    .detailInfo {
        padding: 20px 0px;
        border-bottom: 5px solid #f2f5f8;
        font-size: 14px;
        color: #666;
        .top {
            padding: 0 8px;
            position: relative;
            .top-top {
                width:90px;
                border-bottom: 1px solid #666;
                position: relative;
                &::before {
                    width:5px;
                    height:5px;
                    background: #666;
                    content: '';
                    position: absolute;
                    bottom: 0;
                }
            }
            p {
                margin: 0px;
                padding: 15px 0px;
                line-height: 20px;
            }
            .top-footer {
                width:90px;
                border-bottom: 1px solid #666;
                position: absolute;
                right: 8px;

                &::after {
                    width:5px;
                    height:5px;
                    background: #666;
                    content: '';
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
        .clearfloat::after {
            display:block;
            clear:both;
            content:"";
            visibility:hidden;
            height:0;
        }
        .key {
            padding-left: 8px;
            font-size: 15px;
            margin: 0px;
            height: 40px;
            line-height: 40px;
        }
        .list {
            img {
                width: 100%;
            }
        }
    }
</style>