<template>
    <div class="navbar">
        <van-nav-bar :border="false">
            <slot slot="title" name="title" ></slot>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        ::v-deep .van-nav-bar {
            background: #ff8198;
            .van-nav-bar__title {
                color: #fff;
                font-size: 18px;
            }
        }
    }
</style>