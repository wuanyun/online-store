<template>
    <div class="detailSwipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#d43e2e">
            <van-swipe-item v-for="(item, index) in images" :key="index">
                <img 
                    :src="item"
                />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: ['images']
}
</script>

<style lang="scss" scoped>
    .detailSwipe {
        .my-swipe {
            height: 300px;
            overflow: hidden;
            img {
                width: 100%;
            }
            ::v-deep .van-swipe__indicator {
                width: 8px;
                height: 8px;
                opacity: 1;
            }
        }
        
    }
</style>