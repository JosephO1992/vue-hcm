<template>
  <Header/>
<<<<<<< HEAD
  <Resource 
  v-for="contractor in contractors"
  :key="contractor.id"
  :name="contractor.name" 
  :phone-number="contractor.phoneNumber" 
  :email-address="contractor.emailAddress" 
  :home-address="contractor.homaAddress" 
  :country="contractor.country"></Resource>
  
=======
  <!-- <Resource name="Joe" phone-number="0410 923 493" email-address="joe@test.com" home-address="1 Retail Street, Perth" country="Australia"></Resource>
  <Resource name="Dave" phone-number="0410 234 213" email-address="dave@test.com" home-address="4 Guest Street, Perth" country="Australia"></Resource>
  <Resource name="Chloe" phone-number="0410 251 215" email-address="chloe@test.com" home-address="4 Nugget Close, Perth" country="Australia"></Resource> -->
  <the-navigation></the-navigation>
  <New-resource @add-contact="addContractor"></New-resource>
>>>>>>> 1560e26da0d81204c61e3384b41d846cf9e82105
  
  <Resource 
  v-for="contractor in contractors"
  :key="contractor.id"
  :id="contractor.id"
  :name="contractor.name"
  :surname="contractor.surname"
  :phoneNumber="contractor.phoneNumber"
  :homeAddress="contractor.homeAddress"
  :emailAddress="contractor.emailAddress"
   @delete-contact="deleteContractor"
 
  >
  </Resource>
</template>

<script>

import Header from './components/UI/Header.vue'
import Resource from './components/Resource.vue'
import NewResource from './components/NewResource.vue'
import TheNavigation from './components/UI/TheNavigation.vue'



export default {
  name: 'App',
  components: {
    Header,
    Resource,
    NewResource,
    TheNavigation,
    
    
  },
  data() {
      return {
          contractors: [{
              id:"Joe",
              name: "Joe",
              surname: "O'Reilly",
              phoneNumber:'0451 246 846',
              homeAddress: "15 Main st",
              emailAddress: "joe@test.com"
          },{
              id: "Dave",
              name: "Dave",
              surname: "Smith",
              phoneNumber: "0485 126 985",
              homeAddress: "23 Main trc",
              emailAddress: "dave@test.com"
          }
              
          ]
         
      }
},

methods: {
  addContractor(name, surname, phone, address, email) {
    const newContractorContact = {
      id: new Date().toISOString(),
      name: name,
      surname: surname, 
      phoneNumber: phone,
      homeAddress: address,
      emailAddress: email };
    
<<<<<<< HEAD
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
=======
    this.contractors.push(newContractorContact)
    }, deleteContractor(contractorId){
      this.contractors = this.contractors.filter(contractor => contractor.id !== contractorId)
  },


  },

 
>>>>>>> 1560e26da0d81204c61e3384b41d846cf9e82105
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
