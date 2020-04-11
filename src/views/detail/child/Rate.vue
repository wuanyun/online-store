<template>
    <div class="rate" ref="rate">
        <div class="head">
            <p>用户评价</p>
            <p class="more">更多<van-icon name="arrow" /></p>
        </div>
        <template v-for="(item, index) in rate">
            <div :class="['main',index>0?'main-line':'']" :key="index">
                <div class="user">
                    <img :src="item.user.avatar" alt="" />
                    <p>{{item.user.uname}}</p>
                </div>
                <p class="content" v-text="item.content"></p>
                <div class="other">
                    <span class="date">{{item.created | formatStamp}}</span>
                    <span class="style">{{item.style}}</span>
                </div>
            </div>
        </template>
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
            let topHeight = this.$refs.rate.getBoundingClientRect().top
            this.$emit('child-event', topHeight)
        }
    },
    props: ['rate'],
    filters: {
        formatStamp(value) {
            if(!value) return ''
            var date = new Date(parseInt(value) * 1000)
            var tt = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
            return tt;
        }
    }
}
</script>

<style lang="scss" scoped>
    .rate {
        padding: 0px 8px 20px 8px;
        border-bottom: 5px solid #f2f5f8;
        font-size: 14px;
        color: #666;
        .head {
            display: flex;
            justify-content: space-between;
            font-size: 15px;
            border-bottom: 1px solid #f1f1f1;
            height: 50px;
            line-height: 50px;
            p {
                margin: 0px;
                position: relative;
                &.more {
                    padding-right: 20px;
                }
                i {
                    position: absolute;
                    top: 15px;
                    right: 0;
                    font-size: 20px;
                }
            }
        }
        .main {
            padding-top: 10px;
            .user {
                display: flex;
                padding-bottom: 5px;
                img {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                }
                p {
                    padding-left: 10px;
                }
            }
            .content {
                color: #777;
                margin: 0px;
                line-height: 20px;
                padding-bottom: 5px;
            }
            .other {
                font-size: 12px;
                padding-bottom: 10px;
                color: #999;
                span {
                    padding-right: 10px;
                }
            }
            
            
        }
        .main-line {
            border-top: 1px solid #f1f1f1;
        }
    }
</style>

