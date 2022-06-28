<template >

  <section class="src-components-usuarios">
        <div class="jumbotron">
      <h2>LISTADO DE USUARIOS - MOCKAPI</h2>
      <hr>
      <h5 v-if="posts.length">Usuarios ingresados: {{posts.length}} </h5>
      <hr>
      <br>

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Accion</th>
          </tr>
          <tr v-for="(post, index) in posts" :key="index">
              <td>{{ post.id}}</td>
              <td>{{ post.name}}</td>
              <td>{{ post.edad }}</td>
              <td>{{ post.email }}</td>
              <td><button class="btn btn-danger" @click="deleteUsuario(post.id)">DELETE</button></td>
          </tr>
        </table>
        
      </div>
      <h4 v-else class="alert alert-danger text-center">No hay usuarios ingresados</h4>

     </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {
       this.getPostsAxios() 
    },
    data () {
      return {
        url: this.$store.state.url,
        posts: []
      }
    },
    methods: {
 
      /* -------------------------------------------------------------------------------------------- */
      /*                                      Petición Ajax con Axios                                            */
      /* -------------------------------------------------------------------------------------------- */
       async getPostsAxios() {              
        try {
          let { data } = await this.axios(this.url)
          this.posts = data
        }
        catch(error) {
          console.error('Error Axios', error)
        }   
      },
      /* ---------------------------------- */
      /*         API REST : DELETE          */
      /* ---------------------------------- */
      async deleteUsuario(id) {
        console.log('deleteUsuario', id)

        try {
          let { data: usuario } = await this.axios.delete(this.url+'/'+id)
          console.log('AXIOS DELETE usuario', usuario)

          this.getPostsAxios() 
          let index = this.posts.findIndex(user => user.id == usuario.id)
          if(index == -1) throw new Error('usuario no encontrado')
          this.$store.state.usuarios.splice(index, 1)
        }
        catch(error) {
          console.error('Error en deleteUsuario()', error.message)
        }
      },            
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios {

  }
  
  .jumbotron {
      background-color: yellow;
      color: black;
  }

</style>
