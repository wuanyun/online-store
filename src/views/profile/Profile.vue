<template>
    <div class="profile">
        <NavBar>
            <div slot="title">{{title}}</div>
        </NavBar>
        <Head />
        <Message />
        <List :list="list.list1" />
        <List :list="list.list2" />
    </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import Head from './child/Head'
import Message from './child/Message'
import List from './child/List'
export default {
    data() {
        return {
            title: '个人中心',
            list: {
                list1: [
                    {
                        icon: 'chat-o',
                        title: '我的消息'
                    },
                    {
                        icon: 'shop-o',
                        title: '积分商场'
                    },
                    {
                        icon: 'vip-card-o',
                        title: '会员卡'
                    }
                ],
                list2: [
                    {
                        icon: 'shopping-cart-o',
                        title: '我的购物车'
                    },
                    {
                        icon: 'down',
                        title: '下载购物APP'
                    }
                ]
            }
        }
    },
    components: {
        NavBar,
        Head,
        Message,
        List
    }
}
</script>