<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h3>TP8 - Rubin Luciano</h3>
      <br>
      <Nav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>