import Route from '@ember/routing/route';

export default Route.extend({
   model(){
     //load all the location detials.
       //return this.get('store').findAll('placemark') //it needs a route named placemark for it to work
      //Uncaught TypeError: Cannot read property 'getJSON' of undefined
      return this.store.findAll('placemark')//singular here
   }
});
