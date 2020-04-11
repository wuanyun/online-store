<template>
    <div class="profile">
        <NavBar>
            <div slot="title">{{title}}</div>
        </NavBar>
        <Head />
        <Message />
        <List />
        <List2 />
    </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import Head from './child/Head'
import Message from './child/Message'
import List from './child/List'
import List2 from './child/List2'
export default {
    data() {
        return {
            title: '个人中心'
        }
    },
    components: {
        NavBar,
        Head,
        Message,
        List,
        List2

    }
}
</script>