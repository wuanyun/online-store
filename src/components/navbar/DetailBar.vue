<template>
    <div class="detailbar">
        <p @click="titleChange">
            <span v-for="(item, index) in title" :key="index" :class="active===index?'active':''" :data-index=index>{{item}}</span>
        </p>
        <div class="back" @click="$router.back(-1)"><van-icon name="arrow-left" /></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    methods: {
        titleChange(e) {
            if(e.target.dataset.index) {
                this.active = parseInt(e.target.dataset.index)
                this.$emit('child-event', this.active)
            }
            
        }
    },
    props: ['title']
}
</script>

<style lang="scss" scoped>

    .detailbar {
        position: fixed;
        height: 44px;
        line-height: 44px;
        left: 0;
        top: 0;
        right: 0;
        color: #666;
        z-index: 1;
        background: #fff;
        p {
            text-align: center;
            font-size: 18px;
            margin: 0px;
            padding: 0px;
            span {
                margin: 0 13px;
                &.active {
                    color: #ff5777
                }
            }

        }
        .back {
            height: 44px;
            position: absolute;
            top: 0;
            left: 10px;
            i {
                font-size: 18px;
                margin-top:15px;
            }
        }
    }
</style>