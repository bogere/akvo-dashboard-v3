import Route from '@ember/routing/route';

export default Route.extend({
   model(){
        //what about u test this n see the results.
        //return this.store.findAll('placemarkdetail') //works perfectly
        //return this.store.findAll('placemark-detail') //no route defined. works perfectly
   }
});
