import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    keyForAttribute(key){
      return key;
    }
});
