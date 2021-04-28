<template>
   <div id="contractorTile" class="shadow mainContainer">
      <div class="container">
        <h3>Name: </h3> <p>{{contractors.name}}</p>
        </div>
      <div class="container">
        <h3>Phone: </h3> <p>{{contractors.phoneNumber}}</p>
      </div>
      <div class="container">
        <h3>Address: </h3> <p>{{contractors.homeAddress}}</p>
      </div>
      <div class="container">
        <h3>Email Address: </h3> <p>{{contractors.emailAddress}}</p>
      </div>
        <div class="container">
        <h3>Country: </h3> <p>{{contractors.country}}</p>
       
      </div>
     </div> 
  
</template>

<script>


export default {
  name: "Resource",
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
    
</script>

<style>
#contractorTile {
  text-align: center;
  width: 350px;
  margin: 1rem auto
}

h3 {
    margin: 0px 0px 5px 0px;
    padding: 5px;
    /* border: 1px solid lightgrey; */
     /* background-color: #f5f5f5; */
}

p {
  font-size: 1.5rem;
}

.shadow {
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
.mainContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 10px;
}
.container {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: baseline;

}
</style>