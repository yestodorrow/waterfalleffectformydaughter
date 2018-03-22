<template>
  <div id="app">
    <Headline/>
    <Mydaughter/>
  </div>
</template>

<script>
import Mydaughter from './components/mydaughter'
import Headline from './components/headline'
export default {
  name: 'App',
  components: {
    Mydaughter,Headline
  },
  created:function(){
    document.ontouchmove=function(e){
      e.preventDefault()
    }
  }

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
