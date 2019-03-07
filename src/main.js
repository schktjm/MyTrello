import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(Buefy);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
