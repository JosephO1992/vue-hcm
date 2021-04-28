<template>

    <form class='container shadow' @submit.prevent="submitData">
        <h2>Add Contractor</h2>
        <div class="label-container">
            <label>Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div class="label-container">
            <label>Surname</label>
            <input type="text" v-model="enteredSurname">
        </div>
        <div  class="label-container">
            <label>Email Address</label>
            <input type="email" v-model="enteredEmail"></div>
        <div class="label-container">  
            <label>Phone Number</label>
            <input type="tel" v-model="enteredPhone"></div>
        <div class="label-container"> 
            <label>Home Address</label>
            <input type="text" v-model="enteredAddress">
        </div>
        <button class="btn">Add Contractor</button>
        
    </form>
</template>

<script>


export default {

  emits: ['add-contact'],
  data(){
      return {
          enteredName: '',
          enteredSurname: '',
          enteredPhone: '',
          enteredEmail: '',
          enteredAddress: ''
      }
  },
  methods: {
      submitData() {
          this.$emit('add-contact', this.enteredName, this.enteredSurname, this.enteredPhone, this.enteredAddress, this.enteredEmail);
          this.enteredName= '';
          this.enteredSurname= '';
          this.enteredPhone= '';
          this.enteredEmail= '';
          this.enteredAddress= '';
      }
     
  }
    
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    margin: 20px auto;
    padding: 10px;
    
}

.btn {
    margin-top: 10px;
    background-color: rgb(143 255 219)
}

.label-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-evenly;
    margin-bottom: 0.5rem;
    
}

.shadow {
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}

</style>