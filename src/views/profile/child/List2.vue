<template>
    <div class="list">
        <div class="item">
            <div class="logo">
                <van-icon name="shopping-cart-o" />
            </div>
            <div class="content">
                我的购物车
            </div>
        </div>
        <div class="item">
            <div class="logo">
                <van-icon name="down" />
            </div>
            <div class="content">
                下载购物APP
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .list {
        border-top: 12px solid #f2f2f2;
        color: #333;
        .item {
            display: flex;
            align-items: center;
            &:last-child .content {
                border-bottom: none;
            }
            .logo {
                width: 40px;
                text-align: center;
                font-size: 20px;
                
            }
            .content {
                flex: 1;
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #f2f2f2;
            }
        }
    }
</style>