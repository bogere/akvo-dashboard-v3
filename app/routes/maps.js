import Route from '@ember/routing/route';

export default Route.extend({
   model(){
       //return this.store.findAll('placemark')//singular here
       //return this.store.query('placemark', {surveyId: 125001})
   }
});
