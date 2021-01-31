<template>
   <div id="contractorTile" class="shadow">
    <h2>Name: {{name}}</h2>
    <h3>Phone: {{phoneNumber}}</h3>
    <h3>Address:</h3>
    <h3>Email Address:</h3>
    </div> 
  
</template>

<script>


export default {
  name: "Resource",
  props: [
      'name',
      'phoneNumber',
      'address',
      'email'
  ],
  data() {
      return {
          contractors: {
              name: "Joe O'Reilly",
              phone: "0410 829 039",
              address: "8 Nowhere Street",
              email: "joe@gmail.com"
          }
      }
  }

}
    
</script>

<style>
#contractorTile {
  text-align: left;
 
  margin: 0px;
}

h2, h3 {
    margin: 0px 0px 5px 0px;
    padding: 5px;
    /* border: 1px solid lightgrey; */
     /* background-color: #f5f5f5; */
}

.shadow {
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
</style>