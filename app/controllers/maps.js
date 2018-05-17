import Controller from '@ember/controller';
import EmberObj , {computed, observer} from '@ember/object';
import { A } from '@ember/array';
//import EmberObj from '@ember/object';
import ENV from 'akvov3/config/environment';

export default Controller.extend({
  //for the demo map..
  //Notice that we specified the center of the map and its zoom level passing
  // regular properties to the component, bound to the controller. 
  lat:0.3262600,
  lng:32.6149900, //Hive Collab Kampala
  zoom: 10,
  defaultAttr: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  nightMode: false, //change the tile layer based on checked value
  
  mapBox: EmberObj.create({
    street: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${ENV.MAPBOX_token}`,
    satellite: `https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${ENV.MAPBOX_token}`,
    terrain: `https://api.tiles.mapbox.com/v4/mapbox.mapbox-terrain-v2/{z}/{x}/{y}.png?access_token=${ENV.MAPBOX_token}`
  }),
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
    //updating the center for teh map..
    updateCenter(e){
       let center = e.target.getCenter(); //cordinates of the center
       this.set('lat', center.lat)
       this.set('lng', center.lng)
    },
    //show the summary details of data point via teh modal.
    showModal(e){
      //console.log('yeah i can see summary',e.latlng)
      //get these values-> show the data point in summary details
    },
    //
    layerControlEvent(evt){
       //https://github.com/canufeel/ember-leaflet-layer-control      
    }
  }
  
});
