import DS from 'ember-data';

export default DS.Model.extend({
     latitude: DS.attr('number'),
     longitude: DS.attr('number'),
	   count: DS.attr('number'),
	   level: DS.attr('number'),
	   surveyId: DS.attr('number'),
	   detailsId: DS.attr('number'),
	   collectionDate: DS.attr('number')
  });
