<template>
    <div class="head">
        <div class="left">
            <van-icon name="manager" />
        </div>
        <div class="main">
            <p class="login">
                登录/注册
            </p>
            <p class="phone">
                <van-icon name="phone-o" />暂无绑定手机号
            </p>
        </div>
        <div class="right">
            <van-icon name="arrow" />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .head {
        background: #ff8198;
        display: flex;
        color: #fff;
        padding: 10px 0;
        .left {
            width:90px;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
                font-size: 60px;
                border-radius: 50px;
                background: #fff;
                overflow: hidden;
                color: #dcdcdc;
            }
        }
        .right {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            font-size: 14px;
        }
        .main {
            flex: 1;
             display: flex;
             justify-content: center;
            flex-direction: column;
            p {
                margin: 2px 0;
                
                &.login {
                    font-size: 16px;
                }
                &.phone {
                    font-size: 14px;
                    position: relative;
                    padding-left: 18px;
                    i {
                        position: absolute;
                        font-size: 16px;
                        left: 0;
                        top: 2px;
                    }
                }
                
            }
        }
    }
</style>