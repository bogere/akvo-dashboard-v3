import Controller from '@ember/controller';

export default Controller.extend({
  //for the demo map..
  //Notice that we specified the center of the map and its zoom level passing
  // regular properties to the component, bound to the controller. 
  lat:45.519743,
  lng:-122.680522,
  zoom: 10
});
