import DS from 'ember-data';

/*export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});*/ //the above is DS.JSONAPIAdapter for the JSON API specs..

export default DS.RESTAdapter.extend({ //REST Adapter
   namespace: 'api'
})


