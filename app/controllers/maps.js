import Controller from '@ember/controller';
import {computed, observer} from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
  //for the demo map..
  //Notice that we specified the center of the map and its zoom level passing
  // regular properties to the component, bound to the controller. 
  lat:0.3262600,
  lng:32.6149900, //Hive Collab Kampala
  zoom: 10,
  defaultLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  defaultAttr: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  nightMode: false, //change the tile layer based on checked value
  tileLayers:[
    {label: 'stamen terrain', value: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png'},
    {label: 'openstreet', value: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', attrValue: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'},
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
      //this.set('defaultAttr', attrValue ) //work on this later pliz. for the select box.
      //what about Mary solution for the power select. think?????
      //quick hack for selecting attrValue.
        /*if (selectedLayer == 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png') {
          console.log('stamen attribute !!!!')
          this.set('defaultAttr', 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>')
        }*/
        //please avoid using hard coded values... Ember.Object with these attribution values
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
  },
    //maybe u need to observe teh selectedLayer to change the attriValue.
    updateAttribution: observer('selectedOption', function(){
       //in this case selectedOption is the selectedLayer..
        let self = this; // this only changes the context.
        let selectedLayer = this.get('selectedOption')
        if (selectedLayer == 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png') {
           console.log('stamen!!!!!')
           self.set('defaultAttr', 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>')
        }
    })
});
