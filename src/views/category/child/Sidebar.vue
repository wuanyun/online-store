<template>
    <div class="sidebar">
        <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item v-for="(item, index) in category" :key="index" :title="item.title" />
        </van-sidebar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeKey: 0
        }
    },
    methods: {
        onChange(index) {
            let maitKey = this.category[index].maitKey
            let miniWallkey = this.category[index].miniWallkey
            this.$emit('child-event', {maitKey, miniWallkey})
        }
    },
    props: ['category']
}
</script>

<style lang="scss" scoped>
    .sidebar {
        ::v-deep .van-sidebar-item--select {
            color: #ff5777;
            border-color: #ff5777;
        }
        ::v-deep .van-sidebar-item {
                padding: 15px 12px 15px 8px;
                text-align: center;
        }
    }
</style>