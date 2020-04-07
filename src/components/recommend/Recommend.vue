<template>
    <div class="recommend">
        <div v-for="(item, index) in recommend" :key="index">
            <img :src="item.image" alt="" />
            <p v-text="item.title"></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['recommend']
}
</script>

<style lang="scss" scoped>
    .recommend {
        display: flex;
        justify-content: space-between;
        padding-top: 3px;
        padding-bottom: 10px;
        > div {
            margin: 7px;
            flex: 1;
            img {
                width: 100%;
            }
            p {
                text-align: center;
                margin: 0px;
                line-height:30px;
                font-size: 14px;
                color: #666666;
            }
        }
    }
</style>