<template>
    <div class="message">
        <div class="item">
            <p><span>0.00</span>元</p>
            <p>我的余额</p>
        </div>
        <div class="item">
            <p><span>0</span>个</p>
            <p>我的优惠</p>
        </div>
        <div class="item">
            <p><span>0</span>分</p>
            <p>我的积分</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .message {
        display: flex;
        justify-content: space-around;
        color: #666;
        font-size: 14px;
        padding: 10px 0;
        p {
            margin: 5px 0;
            text-align: center;
            span {
                font-size: 20px;
                color: #ff5f3e;
                font-weight: bold;
            }
        }
    }
</style>