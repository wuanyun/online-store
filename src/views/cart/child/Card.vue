<template>
    <div class="card">
        <div v-for="(item, index) in copyList" :key="index" class="card-card">
            <div class="check">
                <van-checkbox 
                    v-model="item.checked"
                    checked-color="#ff5777"
                    @change="changeCheck({'iid': item.iid, 'checked': item.checked})"
                />
            </div>
            <div class="pic">
                <img :src="item.imgUrl">
            </div>
            <div class="msg">
                <p class="title" v-text="item.title"></p>
                <p class="desc" v-text="'商品描述：' + item.desc"></p>
                <div class="price">
                    <div class="price-price" v-text="'¥' + item.price"></div>
                    <div class="count" v-text="'x' + item.count"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {
            checked: true,
            copyList: []
        }
    },
    methods: {
        ...mapMutations(['changeCheck']),
        listCp() {
            this.copyList = []
            for(let i=0; i<this.list.length; i++) {
                this.copyList.push({
                    checked: this.list[i].checked,
                    count: this.list[i].count,
                    desc: this.list[i].desc,
                    iid: this.list[i].iid,
                    imgUrl: this.list[i].imgUrl,
                    price: this.list[i].price,
                    title: this.list[i].title
                })
            }
        }
    },
    computed: {
        ...mapState(['list'])
    },
    created() {
        this.listCp()
    },
    watch: {
        list: {
            handler(){
                this.listCp()
            },
            deep:true 
        }
    },
}
</script>

<style lang="scss" scoped>
    .card {
        min-height: 100px;
        padding: 5px 8px;
        overflow: hidden;
        .card-card {
            display: flex;
            border-bottom: 1px solid #eae9e9;
            padding: 10px 0;
            .check {
                width: 30px;
                display: flex;
                align-items: center;
            }
            .pic {
                width: 90px;
                img {
                    width:80px;
                    height:100px;
                    border-radius: 5px;
                }
            }
            
            .msg {
                overflow: hidden;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                p {
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin: 0px;

                    &.title {
                        color: #333;
                    }

                    &.desc {
                        color: #666;
                        font-size: 14px;
                        margin-bottom: 15px;
                    }
                }
                .price {
                    margin-bottom: 3px;
                    color: #666;
                    display: flex;
                    justify-content: space-between;
                    .price-price {
                        color: orangered
                    }
                }
            }
        }
    }
</style>