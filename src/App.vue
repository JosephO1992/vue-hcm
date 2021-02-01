<template>
  <Header/>
  <Resource name="Joe" phone-number="0410 923 493" email-address="joe@test.com" home-address="1 Retail Street, Perth" country="Australia"></Resource>
  <Resource name="Dave" phone-number="0410 234 213" email-address="dave@test.com" home-address="4 Guest Street, Perth" country="Australia"></Resource>
  
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
