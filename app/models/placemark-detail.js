import DS from 'ember-data';

export default DS.Model.extend({
  keyId: DS.attr('number'),
  placemarkId: DS.attr('number'),
  collectionDate: DS.attr('number'),
  order: DS.attr('number'),
  questionText: DS.attr('string'),
  metricName: DS.attr('string'),
  stringValue: DS.attr('string'),
  questionType: DS.attr('string')
});
