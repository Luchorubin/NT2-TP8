import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        url:'https://62a6273eb9b74f766a44849f.mockapi.io/usuarios',
        name:'',
        edad:'',
        email:'',
        estado:0,
        usuarios:[]
    },
    actions : {
        usuarios({commit},usu){
            commit('usuariosm',usu)
        },
        usuariosElim({commit},usu){
            commit('usuariosElimm',usu)
        },
        estado({commit},estado){
            commit('estadom',estado)
        },
        name({commit},nombre){
            commit('namem',nombre)
        },
        edad({commit},edad){
            commit('edadm',edad)
        },
        email({commit},email){
            commit('emailm',email)
        },
    },
    mutations : {
        usuariosm(state,usu){
            state.usuarios.push(usu)
        },
        usuariosElimm(state,usu){
            state.usuarios.pop(usu)
        },
        estadom(state,estado){
            state.estado=estado
        },
        namem(state,nombre){
            state.name=nombre
        },
        edadm(state,edad){
            state.edad=edad
        },
        emailm(state,email){
            state.email=email
        },
    }
})