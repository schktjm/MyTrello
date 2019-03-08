import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
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
            },
            {
                text: 'hage',
                date: '',
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
        updateList(state, payload) {
            state.list = payload.list;
        }
    },
    actions: {}
})
