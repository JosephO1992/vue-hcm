# Human Capital Management App

## The Aim:

I want to create an App that will allow me to add/delete "staff" from a database.

This will be the largest project I've built that will be based off components and connecting to a database.

I will be creating this app in Vue, and using a MongoDB database hosted in the cloud, I will be using a database as a service so I don't have to worry about this part!

# Documentation:

## Vue HCM

# The purpose of the app

The main point of the app is a simple way for me to add and delete contractors from a database in a single page application.
I have used bloated CRM/ATS systems for the last 8+ years and I can’t stand them, so this is a chance for me to create something that I would actually enjoy using.

# The purpose of the documentation

This is a way for me to explain how the app works. My process of creating the app and another way for me to reinforce what I’ve actually learnt. They say, if you can explain something then you have actually learnt it.

I will explain how different components relate to each other and what learning points there have been for the in the app.

# The App

This was created by running a script in the CLI, using Vue’s own custom CLI tool.

### Main.js

This file I see as the base component for the whole thing. If you want to register a component globally for the whole application, then this is where you would do it.

Also, to make life easier, you create a variable which runs the createApp(App) function, then you can attach functions onto the end of this “app” variable.

Eg. In my app so far, I’ve created a component called “NewResource” to create new candidate resources in the app. So to register this you need to call the “.component()” method on the app constant.

This takes in 2 parameters:

1. html version of the name (this is what you want it to be called, usually kebab-case)
2. javaScript version of the component, which will be used when importing the component in other components.

### App.vue

This file is the main parent component, where all the other components will be imported into.

At the moment in this file, there are a few components in the “template” tag, which are:

- Header
- New-Resource
- Resource

Header is where I do the general title of the app and the other info that would go in the general header of a website.

New-Resource houses a form which allows me to add new candidates to the app.

Resource is where it will loop through all the data using the v-for directive to show the different candidates.

At the moment my initial dummy data is held in the data() object, which is how you do it in Vue. This holds an array of contractors, which will then be added to when the form in New-Resource is submitted.

I imported these 3 components using the:

```

Import X from “./Folder/X.vue” syntax.

```

In the Script section, the whole thing is like a config object.

In this app I have given it a name, which is “App”, this is used to import into other components if you want to.
Also, you register the components in the app, such as “Header”, “Resource” and “NewResource”.
There is the data object.
Finally, in this component you store your methods within this config object.

### Passing Data Down Props

This was a big learning curve for me, when it finally clicked, it was a big eureka moment!

```

 contractors: [{
              id:"Joe",
              name: "Joe",
              surname: "O'Reilly",
              phoneNumber:'0451 246 846',
              homeAddress: "15 Main st",
              emailAddress: "joe@test.com"
          },

```

This is an example of the data object in the app.vue file.

I have an array of contractors, which have certain props to them, such as “id”, “name” etc. You then need to bind this data to the component. You do this using the semi-colon : then assign it the correct data value. See below:

```
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

```

See how the name is assigned the value contractor.name. This means it will show this data when it’s rendered in the HTML.

Also note how the v-for directive looks. Super simple right?!

Now, this is all well and good, but how is it passed down to that Resource component we have registered?

This is where you need to let the child component know they should be ready to receive “props”.

To register props in the child component, it’s as simple as adding a props section in the script tag (remember the whole thing is like 1 big config object) and adding in the names of the pros. See below:

```

  name: "Resource",
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

```

I’ve gone a bit extra and added a bit of validation, but you don’t have to even to that, you can just add an array with the props in quotes. Eg: props: [‘name’,’surname’...].
Passing Data Up With Emits
This is another big thing within Vue that’s super handy to know and another lightbulb moment when I figured it out.

Scenario is I’ve got all my data that’s coming from the form and it needs to be pushed into my contractors array in App.vue.

Firstly I will use the v-model directive to bind the input data to an initially empty variable in the data() object within the config object in NewResource.vue.

```

<template>
    <form class='container shadow' @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label>Surname</label>
            <input type="text" v-model="enteredSurname">
        </div>
        <div>
            <label>Email Address</label>
            <input type="email" v-model="enteredEmail"></div>
        <div>
            <label>Phone Number</label>
            <input type="tel" v-model="enteredPhone"></div>
        <div>
            <label>Home Address</label>
            <input type="text" v-model="enteredAddress">
        </div>
        <button class="btn">Add Contact</button>

    </form>
</template>

```

This binds to this:

```

 data(){
      return {
          enteredName: '',
          enteredSurname: '',
          enteredPhone: '',
          enteredEmail: '',
          enteredAddress: ''
      }
  },

```

Then you’ll see at the top in the form html tag, there is an event listener @submit.prevent=”submitData”.

3 things to look out for here:

1. The “@” basically means listen out for
2. The submit.prevent is saying, when the form is submitted, prevent the default
3. You can name this function anything you want, “submitData” could be called anything, it just needs to make sense to you and make it readable. This means it will try and call a method with the name “submitData”.

Now, going back to our config object, there is the section called “methods”. In this, we are going to use the \$emit syntax, which I like to think will push out your method to the aether of your application and make it available anywhere something is listening for it.

```

methods: {
      submitData() {
          this.$emit('add-contact', this.enteredName, this.enteredSurname, this.enteredPhone, this.enteredAddress, this.enteredEmail)
      }

```

So, the main parameter you need to add in is the first part “add-contact”. Again, this can be anything, just make sure it makes sense and this is what the other component will be looking out for.

You can also add in other data you want to pass through, like in this one, we are passing in the data we binded the form to earlier, so the name, surname etc.

At this stage you’ve added a form, binded that data to the data object in the component. Set an event listener to fire when the form is submitted and connect that to a method. This method is being emitted into the application with some data from the form attached to it and is now waiting to be dragged into another application.

TIME TO DRAG THE DATA BACK IN!

It gets a bit weird but bare with me. You now need to set another click handler which will has the same name as what you gave it in the initial component:

```

<New-resource @add-contact="addContractor"></New-resource>

```

You see how it will be looking for “add-contact” which is the name we gave it earlier.

From here, you can again give it any name you want, I’ve called it “addContractor” and we will head back down to the methods part of the config object in the App.vue file now.

```

methods: {
  addContractor(name, surname, phone, address, email) {
    const newContractorContact = {
      id: new Date().toISOString(),
      name: name,
      surname: surname,
      phoneNumber: phone,
      homeAddress: address,
      emailAddress: email
      };
    this.contractors.push(newContractorContact)
    },

```

You can see that this method is now receiving the same data you exported earlier and is being passed in as arguments.
We can create a variable, assign the data to the same variable names as your current contractor data and push this into the array.

# DONE!

## Caveat

I'm not a designer, I haven't used a CCS library as Vue 3 hasn't got much support yet. I will be redisigning the app at a later stage and adding CSS in to make it look awesome!
