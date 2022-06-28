import Vue from 'vue'

const miMixinGlobal = {
    methods: {
              async postUsuario() {
                let usuarioNew = {
                  name: this.$store.state.name,
                  edad:this.$store.state.edad,
                  email:this.$store.state.email,
                }
                try {
                  let { data: usuario } = await this.axios.post(this.$store.state.url, usuarioNew, {'content-type' : 'application/json'})
                  console.log('AXIOS POST usuario', usuario)
                  this.$store.dispatch('usuarios',usuario)
                  this.$store.dispatch('estado',0)
                }
                catch(error) {
                  console.error('Error en postUsuario()', error.message)
                }
        }
    },
    computed: {
  
    }
}

Vue.mixin(miMixinGlobal)