import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexFormulario from './components/IndexFormulario.vue'
import Usuarios from './components/Usuarios.vue'
Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/formulario' },
        { path: '/formulario', component:IndexFormulario },
        { path: '/usuarios', component:Usuarios },
    ]
})