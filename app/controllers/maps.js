import Controller from '@ember/controller';
import EmberObj , {computed, observer} from '@ember/object';
import { A } from '@ember/array';
import ENV from 'akvov3/config/environment';
//import { inject as service } from '@ember/service';

export default Controller.extend({
  //Notice that we specified the center of the map and its zoom level passing
  locationD: [],
  lat: 0,
  lng:0,
  zoom: 1, //zoom level 10 makes focus on the map smaller. 
  defaultAttr: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  nightMode: false, //change the tile layer based on checked value
  
  mapBox: EmberObj.create({
    street: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${ENV.MAPBOX_token}`,
    satellite: `https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${ENV.MAPBOX_token}`,
    terrain: `https://api.tiles.mapbox.com/v4/mapbox.mapbox-terrain-v2/{z}/{x}/{y}.png?access_token=${ENV.MAPBOX_token}`
  }),
  
   
   projectSurveys: A([
     {label: "survey 1", value: "125001"}, 
     { label: "survey 2", value: "13774000"},
     {label: 'survey 3', value: '391005'}
   ]),
   

  actions:{
    //updating the center for teh map..
    updateCenter(e){
       let center = e.target.getCenter(); //cordinates of the center
       this.set('lat', center.lat)
       this.set('lng', center.lng)
    },
    //show the summary details of data point via teh modal.
    showModal(e){
         e.preventDefault;
         //console.log(this.get('keyId'))
        //console.log('yeah i can see summary',e.latlng)
      //get these values-> show the data point in summary details
      //can u get the keyId/surveyId when i click on the marker..
       /*let marker = this.get('POI');
       console.log(marker)*/  //when the keyId is selected, use it to search for placemark-details
        //testing the store.filter() thing here.
        /*this.store.query('placemark', {filter:{keyId:17886274}}).then(function(result){
           console.log(result) //pliz u shall solve this later
        })*/
          // console.log(this.get('locationDetails'))
           let locArray = this.get('locationDetails')
           //console.log(locArray)
          /*let selectedMarker = this.get('locationDetails').filterBy('keyId',17886274)
                                                          .filterBy('detailsId',8943137); //works */
         /*let selectedMarker = this.get('locationDetails').filterBy('dataPoint[0]',-6.169694)
                                                          .filterBy('dataPoint[1]',35.752277)*/
        //perharps give this a try n see 
        //let selectedMarker = this.get('locationDetails').filterBy('dataPoint', [-6.169694,35.752277]);
         //it seems that filterBy is giving u headache.. try this pliz..
         //let selectedMarker = this.get('locationDetails')
          /*let selectedMarker = locArray.filter(function(elem){
             return elem.dataPoint.[0]== 6.169694 && elem.dataPoint.[1] == 35.752277
          })*/
            /*for (var i = 0; i < locArray.length; i++) {
               console.log(locArray[i])
            }*/
             locArray.forEach((item,index)=>{
                console.log( 'Latitude' + item.dataPoint[0] + 'Longitude' + item.dataPoint[1])
             })
         
    },
    //
    layerControlEvent(evt){
       //https://github.com/canufeel/ember-leaflet-layer-control      
    },
    //show the markers for selected survey.
    showMarkers(){
       let _surveyId = this.get('selectedSurvey'),
           self = this; //i want to refer to this controller
       //console.log(this.get('locationCord')) //positive
       //retrieve records from the store.
       if (_surveyId!== '') {
         //this.get('store').query('placemark', {surveyId: surveyId})
         //return this.get('store').query('rental', { city: param });
          this.get('store').query('placemark', {surveyId: _surveyId})
            .then(function(result){ //recall the retrieving data from store returns promise
             
            let locArray = [];
             //iterate thru each result..
             result.forEach((item,index)=>{
               let placeObj = {
                 //model.get('attribute-name')
                 //template(hbs) ==> {{model.keyId}}
                  keyId: item.get('keyId'),
                  count: item.get('count'),
                  level: item.get('level'),
                  surveyId: item.get('surveyId'),
                  detailsId: item.get('detailsId'),
                  collectionDate: item.get('collectionDate'),
                  dataPoint: [item.get('latitude'), item.get('longitude')]
               }
                  locArray.push(placeObj)       
             })
              self.set('locationDetails', locArray)
              //console.log('my location', this.get('locationDetails'))
         })
         
       }
    }
  }
  
});
