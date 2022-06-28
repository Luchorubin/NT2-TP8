<template>

  <section class="src-components-formulario">
       <div class="jumbotron">
        <h2>Ingreso de Datos</h2>
        <hr>
        <hr>
        <br>

        <vue-form :state="formState" @submit.prevent="enviar()">
    
        <!-- --------------------- -->
        <!--     Campo nombre      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />

          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <!-- <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo requiere como máximo {{nombreMaxLength}} caracteres.
            </div> -->
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <div class="alert alert-danger mt-1" v-if="formData.nombre.length==nombreMaxLength">
            Este campo requiere como máximo {{nombreMaxLength}} caracteres.
        </div>
        <br>

        <!-- --------------------- -->
        <!--      Campo edad       -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />

          <!-- Mensajes de validación -->
          <field-messages name="edad" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--    Campo email     -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="email">email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
          />

          <!-- Mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>

      <hr>
       <p><b>USUARIOS CARGADOS</b></p>

      <div class="table-responsive">
              <table class="table table-dark" v-if="this.$store.state.usuarios.length" >
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Edad</th>
                      <th>Email</th>
                  </tr>
                  <tr v-for="(usuario,index) in this.$store.state.usuarios" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ usuario.name }}</td>
                      <td>{{ usuario.edad }}</td>
                      <td>{{ usuario.email }}</td>
                  </tr>
              </table>
              <div class="alert alert-danger mt-1" v-else>
                <p>No hay datos cargados</p>
              </div>
      </div>



      </vue-form>  


      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState:{},
        formData:this.getInicialData(),
        usuarios:[],
        nombreMinLength:5,
        nombreMaxLength:15,
        edadMin:18,
        edadMax:120,
        url:this.$store.state.url
      }
    },
    methods: {
      getInicialData(){
        return {
        nombre:'',
        edad:'',
        email:''
        }
      },
       enviar() {
        this.guardar
        this.postUsuario()
        console.log({ ...this.formData })
        this.formData = this.getInicialData() 
        this.formState._reset() 
      },
      

      
    },
    computed: {
      guardar(){
        this.$store.dispatch('name',this.formData.nombre)
        this.$store.dispatch('edad',this.formData.edad)
        this.$store.dispatch('email',this.formData.email)
        console.log('store'+this.$store.state.email,'data'+this.formData.email)
        this.$store.dispatch('estado',1)
        return this.$store.state.estado
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron {
      background-color: blue;
      color: black;
  }

  hr {
      background-color: #bbb;
  }  

  pre {
    color: white;
  }
</style>