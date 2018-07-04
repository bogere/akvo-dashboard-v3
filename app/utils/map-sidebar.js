/*export default function mapSidebar() {
  return true;
}*/
import Ember from 'ember';
import EmberObj from '@ember/object';
//import {inject as service} from '@ember/service';
import {A} from '@ember/array';
import ENV from 'akvov3/config/environment';

export default EmberObj.extend({
    init(){
      //this.super(...arguments) //this only works for commponents when extending them.
      //objects --> this.set('titles', []) for initialising the values
    },
    
    renderCaddisflyAnswer(json){
       //console.log('iam activating cadisfly part ' + json ) //yeah it works perefectly
       var name = "",
           imageUrl = "",
           result = A([]);
          //!Ember.empty(json)
           if (json!== undefined && json!== null) { //Ember.empty is not a function
              try {
                  var jsonParsed = JSON.parse(json);
                  //// get out image url
                   if (!Ember.empty(jsonParsed.image)) {
                      imageUrl = ENV.photo_url_root + jsonParsed.image.trim();
                   }
                   //construct the html
                   html = "<div><strong>" + name + "</strong></div>"
                   html += jsonParsed.result.map(function(item){
                          return "<br><div>" + item.name + " : " + item.value + " " + item.unit + "</div>";
                   }).join("\n")
                   html += "<br>"
                   html += "<div class=\"signatureImage\"><img src=\"" + imageUrl +"\"}} /></div>"
                   return html
              } catch (e) {
                return json
              } 
          } else {
            return "Wrong json format"
          }
    },
    FLOW_parseJson(jsonString, property){
       //Your data is already an object. No need to parse it. The javascript interpreter has already parsed it for you.
        try {
           var jsonObj = JSON.parse(jsonString)
            if (jsonObj[property].length >0) {
                return jsonObj;
            } else {
              return null
            }
        } catch (e) {
          return null
        }
    },
     //getting the center for the map on the sidebar.. (dynamically )
     FLOW_getCentroid(arr){
       return arr.reduce(function(x,y){
          return [x[0] + y[0]/arr.length, x[1] + y[1]/arr.length]
       }, [0,0])
     }
    
})
