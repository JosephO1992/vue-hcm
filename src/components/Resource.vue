<template>
   <div id="contractorTile" class="shadow mainContainer">
<<<<<<< HEAD
      <div class="container">
        <h3>Name: </h3> <p>{{contractors.name}}</p>
        </div>
      <div class="container">
        <h3>Phone: </h3> <p>{{contractors.phoneNumber}}</p>
=======
      <div class="container contractor-heading-div">
        <h3 class="contractor-heading">{{name}} {{surname}}</h3>
        </div>
      <button class="toggle-details" @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
      <ul v-if="detailsAreVisible">
        <button @click="editDetails(id)">Edit Details</button>
        
        
        <div class="container">
        <h3>Phone: </h3> <p>{{phoneNumber}}</p>
>>>>>>> 1560e26da0d81204c61e3384b41d846cf9e82105
      </div>
      <div class="container">
        <h3>Address: </h3> <p>{{contractors.homeAddress}}</p>
      </div>
      <div class="container">
        <h3>Email Address: </h3> <p>{{contractors.emailAddress}}</p>
      </div>
<<<<<<< HEAD
        <div class="container">
        <h3>Country: </h3> <p>{{contractors.country}}</p>
       
      </div>
=======
  
      </ul>
      <button class="delete" @click="$emit('delete-contact', id)">Delete Contractor</button>
     
      
>>>>>>> 1560e26da0d81204c61e3384b41d846cf9e82105
     </div> 
  
</template>

<script>

export default {
  
  name: "Resource",
<<<<<<< HEAD
  // props: [
  //     'name',
  //     'phoneNumber',
  //     'homeAddress',
  //     'emailAddress',
  //     'country'
  // ],
  // data() {
  //     return {
  //         contractors: [
  //           {
  //            id: "Joe", 
  //            name: "Joe",
  //            phoneNumber: "0419 203 843",
  //            homeAddress: "23 Main St",
  //            emailAddress: "joe@test.com",
  //            country: 'Australia'
  //         },
  //         {
  //           id:"Dave",
  //           name:"Dave",
  //           phoneNumber: "0410 234 213",
  //           emailAddress:"dave@test.com",
  //           homaAddress:"4 Guest Street, Perth", 
  //           country: "Australia"
  //         }
  //         ],
  //     }
  // }

}
=======
  props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      surname: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true
      },
      homeAddress: {
        type: String,
        required: true
      },
      emailAddress: {
        type: String,
        required: true
      },
  },
  emits: ['delete-contact'],
  data() {
    return {
      detailsAreVisible: false,
      editId: ''
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    editDetails(id) {
      this.editId = id
      console.log(id)
    }
 
  }
  
  }
>>>>>>> 1560e26da0d81204c61e3384b41d846cf9e82105
    
</script>

<style>
#contractorTile {
  
  width: 350px;
  margin: 1rem auto
}

h3 {
    margin: 0px 0px 5px 0px;
    padding: 5px;
    text-align: center;
    
    /* border: 1px solid lightgrey; */
     /* background-color: #f5f5f5; */
}

.contractor-heading-div {
  width: 100%;
}

.contractor-heading {
  width: 100%;
}


.shadow {
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
.mainContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
}
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  
}

ul {
  padding: 0;
  width: 100%;
}

button {
  width: 100%;
  margin-bottom: 0.5rem;
  cursor: pointer;
  border: none;
  padding: 0.3rem 0;
  border-radius: 4px;
}

button:hover {
  font-size: 1rem;
}

.delete {
  background-color: #ff00008c
}

.toggle-details {
  background-color: rgb(143 224 255);
}
</style>