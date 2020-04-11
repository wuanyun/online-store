import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        addList(state, obj) {
            let index = state.list.findIndex(x => x.iid === obj.iid )
            if(index === -1) {
                state.list.push(obj)
            }else {
                state.list[index].count++
            }
            
        },
        changeCheck(state, payload) {
            const index = state.list.findIndex(x => x.iid === payload.iid)
            if(index > -1) {
                state.list[index].checked = payload.checked
            }
        },
        allChange(state, checked) {
            state.list.forEach(element => {
                element.checked = !checked
            })
        },
        sumbitOrder(state) {
            state.list = state.list.filter(x => x.checked != true)
        }
    },
    getters: {
        allCheck(state) {
            let index = state.list.findIndex(x => x.checked === false)
            if(index > -1) {
                return false
            } else {
                return true
            }
        },
        allPrice(state) {
            let allPrice = 0.00;
            state.list.forEach(element => {
                if(element.checked) {
                    allPrice += parseFloat(element.price) * element.count
                }
            })

            return allPrice * 100
        }
    }
})
