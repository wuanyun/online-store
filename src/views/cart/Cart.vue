<template>
    <div class="cart">
        <NavBar>
            <div slot="title">{{title}}</div>
        </NavBar>
        <Card />
        <SubmitBar />
    </div>
</template>


<script>
import NavBar from '@/components/navbar/NavBar'
import Card from './child/Card'
import SubmitBar from './child/SubmitBar'
export default {
    data() {
        return {
            title: '购物车'
        }
    },
    components: {
        NavBar,
        Card,
        SubmitBar
    }
}
</script>

<style lang="scss" scoped>
    .cart {
        margin-bottom: 100px;
    }
</style>