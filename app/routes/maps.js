import Route from '@ember/routing/route';

export default Route.extend({
   model(){
       //return this.store.findAll('placemark')//singular here
       //return this.store.query('placemark', {surveyId: 125001})
       //what about the placemark-detail..
        //return this.store.findAll('placemark-detail')//our Ember app tried to GET '/api/placemarkDetails',
        //what about u test this n see the results.
        return this.store.findAll('placemarkdetail')
   }
});
