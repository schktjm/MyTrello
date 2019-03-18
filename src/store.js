import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        boardName: 'board name',
        lists: [
            {
                name: 'listname',
                list: [
                    {
                        text: 'hoge',
                        date: '2019:01:01',
                        place: 'Japan',
                    },
                    {
                        text: 'kjkljk',
                        date: '1998:09:19',
                        place: ''
                    },
                    {
                        text: 'hage',
                        date: '',
                        place: ''
                    }
                ]
            },
            {
                name: 'hogelist',
                list: [
                    {
                        text: 'hoge',
                        date: '1000:09:10',
                        place: ''
                    },
                    {
                        text: 'hogwhoge',
                        date: '',
                        place: ''
                    }
                ]
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
        updateLists(state, payload) {
            state.lists = payload.lists;
        },
        addNewList(state, payload) {
            state.lists = [...state.lists, {name: payload.title, list: []}];
        },
    },
    actions: {}
})
