<template>
    <div class="swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#d43e2e">
            <van-swipe-item v-for="(item, index) in banner" :key="index">
                <img :src="item.image" :alt="item.title">
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
    props: ['banner']
}
</script>

<style lang="scss" scoped>
    .swipe {
        img {
            width: 100%;
        }
        ::v-deep .van-swipe__indicator {
            width: 8px;
            height: 8px;
            opacity: 1;
        }
    }
</style>