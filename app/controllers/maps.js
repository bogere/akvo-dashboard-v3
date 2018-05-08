import Controller from '@ember/controller';

export default Controller.extend({
  //for the demo map..
  //Notice that we specified the center of the map and its zoom level passing
  // regular properties to the component, bound to the controller. 
  lat:0.3262600,
  lng:32.6149900, //Hive Collab Kampala
  zoom: 10,
  defaultLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  tileLayers:[
    {label: 'stamen terrain', value: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png'},
    {label: 'openstreet', value: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'},
    {label: 'night',value:'https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png'},
    {label: 'Eris', value: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'} 
  ],
  //catering for the markers on the map..
  //play around with other geocordinates.
   peaceLocation: [0.3372743,32.5921307],
   britishLocation:[0.334949619708498,32.58311441970849],
  actions:{
    //changing the tile layers dynamically.
    changeLayer(){
     var selectedLayer = this.get('selectedOption')
     console.log(selectedLayer)
      this.set('defaultLayer', selectedLayer)  
    }
  }
});
