<template>
  <div id="app">
    <h1>this is the parent component</h1>
    <mydaughter/>
  </div>
</template>

<script>
import Mydaughter from './components/mydaughter'

export default {
  name: 'App',
  components: {
    Mydaughter
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
