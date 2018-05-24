import { JSONAPISerializer } from 'ember-cli-mirage';
import {camelize} from '@ember/string';
export default JSONAPISerializer.extend({
   //to stop Ember-data from customising my attribute keys..  instead of surveyId, it wants survey-id
    /*keyForAttribute(key){
      return key;
      //return Ember.String.camelize(key)
      //return camelize(key)
   }*/
});
