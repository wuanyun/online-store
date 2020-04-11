<template>
    <div class="itemParams" ref="itemParams">
        <table class="sizeInfo">
            <tr v-for="(info, index) in itemParams.sizeInfo" :key="index">
                <td v-for="(item, index) in info" :key="index">{{item}}</td>
            </tr>
        </table>
        <table class="productInfo">
            <tr v-for="(item, index) in itemParams.productInfo" :key="index">
                <td>{{item.key}}</td>
                <td colspan="3"><span>{{item.value}}</span></td>
            </tr>
        </table>
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
            let topHeight = this.$refs.itemParams.getBoundingClientRect().top
            this.$emit('child-event', topHeight)
        }
    },
    props: ['itemParams']
}
</script>

<style lang="scss" scoped>
    .itemParams {
        padding: 20px 8px;
        border-bottom: 5px solid #f2f5f8;
        color: #666;
        font-size: 14px;
        table {
            width: 100%;
            border-collapse:collapse;
            table-layout: fixed;
            tr {
                height: 40px;
                border-bottom: 1px solid #e2dfdf;
                span {
                    color: #ff5777;
                }
            }
        }
    }
</style>