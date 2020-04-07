<template>
    <div class="tabbar">
        <van-tabbar v-model="active" :safe-area-inset-bottom="true" :active-color="color.activeColor" :inactive-color="color.inactiveColor">
            <van-tabbar-item 
                v-for="(item, index) in menu" 
                :key="index"
                :icon="item.icon"
                :to="item.url"
                :name="item.name"
            >
                {{item.title}}
            </van-tabbar-item> 
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: ''
        }
    },
    methods: {

    },
    created() {
        this.active = this.activePath
    },
    props: ['menu', 'color', 'activePath']
}
</script>

<style lang="scss" scoped>

</style>