<template>
  <Header/>
  <Resource 
  v-for="contractor in contractors"
  :key="contractor.id"
  :name="contractor.name" 
  :phone-number="contractor.phoneNumber" 
  :email-address="contractor.emailAddress" 
  :home-address="contractor.homaAddress" 
  :country="contractor.country"></Resource>
  
  
</template>

<script>

import Header from './components/Header.vue'
import Resource from './components/Resource.vue'

export default {
  name: 'App',
  components: {
    Header,
    Resource,
    
  },
  data() {
      return {
          contractors: [
            {
             id: "Joe", 
             name: "Joe",
             phoneNumber: "0419 203 843",
             homeAddress: "23 Main St",
             emailAddress: "joe@test.com",
             country: 'Australia'
          },
          {
            id:"Dave",
            name:"Dave",
            phoneNumber: "0410 234 213",
            emailAddress:"dave@test.com",
            homaAddress:"4 Guest Street, Perth", 
            country: "Australia"
          }
          ],
      }
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
