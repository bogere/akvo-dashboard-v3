import Controller from '@ember/controller';
import {computed} from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
  //for the demo map..
  //Notice that we specified the center of the map and its zoom level passing
  // regular properties to the component, bound to the controller. 
  lat:0.3262600,
  lng:32.6149900, //Hive Collab Kampala
  zoom: 10,
  defaultLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  nightMode: false, //change the tile layer based on checked value
  tileLayers:[
    {label: 'stamen terrain', value: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png'},
    {label: 'openstreet', value: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'},
    {label: 'night',value:'https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png'},
    {label: 'Eris', value: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'},
    {label: 'Google streets', value: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'} 
  ],
   //dealing with dynamic location details.
   locationPoints: A([ //why u need to use the ember Array... so that they r observable n as properties
     {
       title: 'Peace Corps Uganda',
       street: 'Plot 53 / P.O. Box 7007 Prince Charles Dr, Kampala, Uganda',
       dataPoint: [0.3372743,32.5921307]
     },
     {
       title: 'British High Commission',
       street: 'Plot 4 / P. O. Box 7070, Kampala, Uganda',
       dataPoint: [0.334949619708498,32.58311441970849]
     },
     {
       title: 'kololo Hospital Kampala',
       street: 'Plot 16 Kawalya Kaggwa Close, Kololo/P.O. Box 71997',
       dataPoint:[0.3340316,32.5889985]
     }
   ]),
   
   //dealing with the polygon layers... but u shall learn sth about computed properties.
  dangerZone: computed('locationPoints.[]', function(){
     let locs = this.get('locationPoints'),
         locArray = [];
     locs.forEach((item,index)=>{
         locArray.push(item.dataPoint) 
     })  
       
     return locArray;
  }),
  actions:{
    //changing the tile layers dynamically.
    changeLayer(){
     var selectedLayer = this.get('selectedOption')
      this.set('defaultLayer', selectedLayer)  
    },
    //updating the center for teh map..
    updateCenter(e){
       let center = e.target.getCenter(); //cordinates of the center
       this.set('lat', center.lat)
       this.set('lng', center.lng)
    },
    //show the summary details of data point via teh modal.
    showModal(e){
      console.log('yeah i can see summary',e.latlng)
      //get these values-> show the data point in summary details
    }
  }
});
