// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import {routes} from "@/routes/web.js"
import Vuex from 'vuex'
import {storage} from '@/components/store/index'

Vue.use(VueRouter)
Vue.use(Vuex)

window.$ = window.jQuery = require('jquery')
Vue.config.productionTip = false

const router = new VueRouter({
    routes
})
const store = new Vuex.Store(storage)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
