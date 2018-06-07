import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
   //control what unlogged users can see.
   loggedIn:false, //if false, public cant see contents.
   //router: Ember.inject.service(),
   router:service(), //yeah router as service so that u can access it in components
   store:service(), // for component is isolated from ember surronding... 
                   //that we had to import store service though it z global
                   
 
   actions:{
     //what about the login part.. 
     doLogIn(){
       console.log('iam logging into Akvo flow')
       this.toggleProperty('loggedIn') //change it to true...
     },
     //cater for the logout action first.
     doLogOut(){
      this.set('loggedIn', false) //please logout now.
       //i need u to clear all the records in the store.
       //this.store.unloadAll(); //Uncaught TypeError: Cannot read property 'unloadAll' of undefined
       this.get('store').unloadAll();
       this.get('router').transitionTo('surveys') //navigate to the public homepage
     }
   }
});
