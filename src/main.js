import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(Vuex);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
