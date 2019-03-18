import Vue from 'vue'
import Router from 'vue-router'
import Board from './views/Board'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Board',
            component: Board
        }
    ]
})
