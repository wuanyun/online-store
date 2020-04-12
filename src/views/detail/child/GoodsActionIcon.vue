<template>
    <div class="goods-action-icon">
        <van-goods-action safe-area-inset-bottom>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="shop-o" text="店铺"  />
            <van-goods-action-icon icon="star-o" text="收藏" />
            <van-goods-action-button @click="addGoods" type="warning" text="加入购物车" />
            <van-goods-action-button @click="buy" type="danger" text="购买" />
        </van-goods-action>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            
        }
    },
    methods: {
        addGoods() {
            if(this.cart.iid) {
                this.$store.commit('addList', this.cart)
                this.$toast.success('操作成功')
            } else {
                this.$toast.fail('操作失败')
            }
            
        },
        buy() {
            if(this.cart.iid) {
                let index = this.list.findIndex(x => x.iid === this.cart.iid)
                if(index === -1) {
                    this.$store.commit('addList', this.cart)
                }
                this.$toast.success('操作成功')
                setTimeout(() => {
                    this.$router.push({path: '/cart'})
                }, 1000);
                
            } else {
                this.$toast.fail('操作失败')
            }
            
        }
    },
    props: ['cart'],
    computed: {
        ...mapState(['list'])
    }
}
</script>

<style lang="scss" scoped>
    .goods-action-icon {
        ::v-deep .van-goods-action-button--first {
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }
        ::v-deep .van-goods-action-button--last {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            margin-right: 0px;
        }
        ::v-deep .van-goods-action-button {
            height: 50px;
            line-height: 50px;
        }
    }
</style>