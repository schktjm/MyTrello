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
                    },
                    {
                        text: 'kjkljk',
                    },
                    {
                        text: 'hage',
                    }
                ]
            },
            {
                name: 'hogelist',
                list: [
                    {
                        text: 'hoge',
                    },
                    {
                        text: 'hogwhoge',
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
        updateListItem(state, payload) {
            state.lists[payload.idx].list = payload.list;
        },
        addNewList(state, payload) {
            state.lists = [...state.lists, {name: payload.title, list: []}];
        },
    },
    actions: {}
})
