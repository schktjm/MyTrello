import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [
            {
                text: 'hoge',
                date: '2019/01/01',
                place: 'Japan',
            },
            {
                text: 'kjkljk',
                date: '1998/09/19',
                place: ''
            }
        ],
        count: 0,
        message: 'Hello vuex'

    },
    getters: {},
    mutations: {
        incrementCount(state) {
            state.count++;
        },
    },
    actions: {}
})
