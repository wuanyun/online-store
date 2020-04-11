<template>
    <div class="mait-key">
        <div class="content">
            <div class="item" v-for="(item, index) in maitKeys" :key="index">
                <img v-lazy="item.image" alt="">
                <p v-text="item.title"></p>
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
    props: ['maitKeys']
}
</script>

<style lang="scss" scoped>
    .mait-key {
        width: 100%;
        .content {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .item {
                width: 33%;
                padding-top: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 66%;
                }
                p {
                    margin: 0px;
                    padding-top: 5px;
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                }
            }
        }
        
    }
</style>