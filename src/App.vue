<template>
  <div id="app"  @touchmove.prevent >
    <Top/>
    <Mydaughter/>
  </div>
</template>

<script>
import Mydaughter from './components/mydaughter'
import Top from './components/tophead'
export default {
  name: 'App',
  components: {
    Mydaughter,Top
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
