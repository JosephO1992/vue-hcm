<template>
  <Header/>
  <Resource name="Joe"></Resource>
  
</template>

<script>

import Header from './components/Header.vue'
import Resource from './components/Resource.vue'

export default {
  name: 'App',
  components: {
    Header,
    Resource,
    
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
