<template>
  <Header/>
  <!-- <Resource name="Joe" phone-number="0410 923 493" email-address="joe@test.com" home-address="1 Retail Street, Perth" country="Australia"></Resource>
  <Resource name="Dave" phone-number="0410 234 213" email-address="dave@test.com" home-address="4 Guest Street, Perth" country="Australia"></Resource>
  <Resource name="Chloe" phone-number="0410 251 215" email-address="chloe@test.com" home-address="4 Nugget Close, Perth" country="Australia"></Resource> -->
  <New-resource @add-contact="addContractor"></New-resource>
  
  <Resource 
  v-for="contractor in contractors"
  :key="contractor.id"
  :name="contractor.name"
  :phoneNumber="contractor.phoneNumber"
  :homeAddress="contractor.homeAddress"
  :emailAddress="contractor.emailAddress"
  >
  </Resource>
</template>

<script>

import Header from './components/UI/Header.vue'
import Resource from './components/Resource.vue'
import NewResource from './components/NewResource.vue'


export default {
  name: 'App',
  components: {
    Header,
    Resource,
    NewResource,
    
  },
  data() {
      return {
          contractors: [{
              id:"Joe",
              name: "Joe",
              phoneNumber:'0451 246 846',
              homeAddress: "15 Main st",
              emailAddress: "joe@test.com"
          },{
              id: "Dave",
              name: "Dave",
              phoneNumber: "0485 126 985",
              homeAddress: "23 Main trc",
              emailAddress: "dave@test.com"
          }
              
          ]
         
      }
},

methods: {
  addContractor(name, phone, address, email) {
    const newContractorContact = {
      id: new Date().toISOString(),
      name: name,
      phoneNumber: phone,
      homeAddress: address,
      emailAddress: email
    };
    this.contractors.push(newContractorContact)
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
