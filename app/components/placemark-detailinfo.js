import Component from '@ember/component';
import {computed, observer} from '@ember/object';
import {A} from '@ember/array';
import mapUtil from '../utils/map-sidebar'; //it has vital  sidebar functions

export default Component.extend({
  
   //why initialise these values.
   content: null,
   lat: null,
   lng: null,
   showingShape: false,
   showPolygon: false, //for the polygon type geometry
   showLine: false,
   zoom: null,
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
//  locationPoints: A([]),  start working on the dynamic values on Monnday.. let mulo help u understand
   
   didReceiveAttrs(){
     this._super(...arguments)
      let details = this.get('content')
      let mapsidebar = mapUtil.create(); //yeah created an object that u shall invoke functions
      if (details.questionType === 'GEOSHAPE') {
        this.set('showingShape', true)
        //time to set these geocordinates.
        this.set('lat',0.3262600)
        this.set('lng', 32.6149900)
        this.set('zoom', 10)
         //test also whether geometry , is polygon or lineString or multipoint.
        //let geoshapeObject = details.stringValue; //u need to parse this data first .. that is why is undefined
        
        let geoshapeObject = mapsidebar.FLOW_parseJson(details.stringValue, 'features')
        let geoshapeCoordinatesArray, points = [], 
            geoShapeObjectType = geoshapeObject['features'][0]['geometry']['type'];
         if (geoShapeObjectType === 'Polygon') {
            this.set('showPolygon', true)
            //the same should apply for the line geometry line
             geoshapeCoordinatesArray = geoshapeObject['features'][0]['geometry']['coordinates'][0];
              //console.log(geoshapeCoordinatesArray)
               //u need to create the geopoints on the map.
               for (var i = 0; i < geoshapeCoordinatesArray.length; i++) {
                 //array[i]
                 //  points.push([geoshapeCoordinatesArray[j][1], geoshapeCoordinatesArray[j][0]]);
                 //what is [lat, lng] ==> the above shows the other way round
                 points.push([geoshapeCoordinatesArray[i][0], geoshapeCoordinatesArray[i][1]])
               }
              //this.set('locationPoints', geoshapeCoordinatesArray)
              //this.set('locationPoints', points) //n monday start here.. solving the problem
         }else {
            //it is a lineString or something else.
            this.set('showLine', true)
            geoshapeCoordinatesArray = geoshapeObject['features'][0]['geometry']['coordinates']
         }
         
      }
   },
   //dealing with the polygon layers... but u shall learn sth about computed properties.
   dangerZone: computed('locationPoints.[]',function(){  
     let  self = this,
          locs = self.get('locationPoints'),
          locArray = [];
         locs.forEach((item,index)=>{
             locArray.push(item.dataPoint)
          })
      return locArray
      
   }),
   
   actions:{
     
   }
   
   
});
