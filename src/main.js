import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCoffee, faPlusSquare, faPlus, faBan} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faCoffee);
library.add(faPlusSquare);
library.add(faPlus);
library.add(faBan);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
