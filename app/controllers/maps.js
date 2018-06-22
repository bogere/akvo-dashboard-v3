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
  showPlacemarkDetail: false,
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
         let self = this;
         //console.log('yeah i can see summary',e.latlng)
          // console.log(this.get('locationDetails'))
          let marker = e.latlng,
           
              selectedMarker = this.get('locationDetails').filterBy('dataPoint.0',marker.lat)
                                                         .filterBy('dataPoint.1',marker.lng);
          //this is the way u access nested properties of ember property
             //console.log(selectedMarker)
          //use the keyId for the selected marker to retrieve the placemark-details.
             let selectedkeyId = selectedMarker[0].keyId;         
           //i need to query the store for the placemark details.
             this.get('store').query('placemark-detail', {placemarkId: selectedkeyId}) 
                .then(function(results){////filter key--> placemarkId//
                  //just know the result --> model data.. so even if u use ..
                  //even if u try to access in the template like this.
                     let locMarker= [];
                     results.forEach((item,index)=>{ //it just  1 item in the array
                        locMarker.push({
                          collectionDate:item.get('collectionDate'),
                          keyId: item.get('keyId'),
                          placemarkId: item.get('placemarkId'),
                          questionText: item.get('questionText'),
                          questionType: item.get('questionType'),
                          stringValue: item.get('stringValue')                                          
                        })
                     })
                     
                    //console.log('detailsInfo',locMarker)
                    self.set('markerInfo', locMarker)
                    //console.log( typeof(this.get('markerInfo') ) )
                    //then in the template... u shall access it like this. {{markerInfo.keyId}}
                     //then u can show the sidebar part.. for the placemarkdetail info.
                     self.set('showPlacemarkDetail',true) 
                })
           
         
    },
    //
    layerControlEvent(evt){
       //https://github.com/canufeel/ember-leaflet-layer-control      
    },
    //show the markers for selected survey.
    showMarkers(){
       let _surveyId = this.get('selectedSurvey'),
           self = this;
           
       if (_surveyId!== '') {
         
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
         })
         
       }
    },
    showDetails(evt){
       //this.set('showPlacemarkDetail', false)
       //first make the width of the flowMap abit smaller so that detailDiv can also fit.
        //this.$('#flowMap').style.width = '750px';
        document.getElementById('flowMap').style.width = '70%';
        //let flowMap = this.$('#flowMap');
         //this.set('showPlacemarkDetail', false)
       //this.toggleProperty('showPlacemarkDetail') //this can hide n show sidebar
    }
  }
  
});
