<template>
    <div class="list">
        <div class="item">
            <div class="logo">
                <van-icon name="chat-o" />
            </div>
            <div class="content">
                我的消息
            </div>
        </div>
        <div class="item">
            <div class="logo">
                <van-icon name="shop-o" />
            </div>
            <div class="content">
                积分商场
            </div>
        </div>
        <div class="item">
            <div class="logo">
                <van-icon name="vip-card-o" />
            </div>
            <div class="content">
                会员卡
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