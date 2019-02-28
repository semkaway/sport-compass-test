import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
