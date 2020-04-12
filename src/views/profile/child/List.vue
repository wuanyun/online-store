<template>
    <div class="list">
        <div v-for="(item, index) in list" :key="index" class="item">
            <div class="logo">
                <van-icon :name="item.icon" />
            </div>
            <div class="content">
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['list']
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
                padding-top: 2px;
                
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