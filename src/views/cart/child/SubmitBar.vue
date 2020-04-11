<template>
    <div class="submitbar">
        <van-submit-bar
            :price="allPrice"
            button-text="提交订单"
            @submit="onSubmit"
        >
            <van-checkbox v-model="currAllCheck" checked-color="#ff5777" @click="allChange(currAllCheck)">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
            checked: true
        }
    },
    methods: {
        onSubmit() {
            this.sumbitOrder()
            this.$toast.success('操作成功')
        },
        ...mapMutations(['allChange', 'sumbitOrder'])
    },
    computed: {
        ...mapGetters(['allCheck','allPrice']),
        currAllCheck: {
            get: function() {
                return this.allCheck
            },
            set: function() {
                return this.allCheck
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .submitbar {
        ::v-deep .van-submit-bar {
            bottom: 50px;
            border-bottom: 1px solid #eae9e9;
        }
    }
</style>