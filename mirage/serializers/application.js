import {RestSerializer } from 'ember-cli-mirage';
//import {camelize} from '@ember/string';
 export default RestSerializer.extend({
   //to stop this error.
   //Assertion Failed: You must include an 'id' for placemark in an object passed to 'push'
    primaryKey: 'keyId'
});
//export default RestSerializer;
