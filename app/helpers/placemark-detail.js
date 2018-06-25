import Ember from 'ember';
import { helper } from '@ember/component/helper';
import {htmlSafe,loc} from '@ember/string';
import ENV from 'akvov3/config/environment';
import {inject as service} from '@ember/service';
import mapUtil from '../utils/map-sidebar'; //it has vital  sidebar functions

export function placemarkDetail([value, ...rest]) {
    i18n: service(); //it works perfectly but accessing it z tight
    let answer, markup, question, cascadeJson, optionJson, cascadeString = "",
        questionType, imageSrcAttr, signatureJson, photoJson, cartoQuestionType,
        self=this;
    let mapsidebar = mapUtil.create(); //yeah created an object that u shall invoke functions
        //access the  i18n service.
        //let t =  this.get('i18n');
        //let translate = self.get('i18n'); //cant read the property get of undefined
          //extract these values from the content passed.
          questionType = value.questionType;
          question = value.questionText;
          answer = value.stringValue;
          
          //time to cleanup the funny symbols  from the questions n answers using regex.
          answer = answer.replace(/\|/g, ' | '); // geo, option and cascade data
          answer = answer.replace(/\//g, ' / '); // also split folder paths
          
          //start with the cascade question type.... u need sample to test this.
          if (questionType === 'CASCADE') {
              if (answer.indexOf('|')>-1) { //if answer has | 
                //ignore it
              } else {
                 if (answer.charAt(0)=== '[') { //if answer starts with'[
                      cascadeJson = JSON.parse(answer)
                      //then rebuild that string with this.. |
                      answer = cascadeJson.map(function(item){
                         return item.name;
                      }).join('|')
                 }
              }
              //next is PHOTOS n VIDEOS type
          } else if ( (questionType === 'VIDEO'||questionType === 'PHOTO') && answer.charAt(0) === '{') {
            // console.log('iam dealing with photos')
            photoJson = JSON.parse(answer);
            var mediaAnswer = photoJson.filename;
            var mediaFileURL = ENV.photo_url_root + mediaAnswer.split('/').pop().replace(/\s/g, '');
               if (questionType === 'PHOTO') {
                 // if it is a photo , start drawing the image html tag for answer
                 answer  = '<div class=":imgContainer photoUrl:shown:hidden">'
                            +'<a class="media" data-coordinates=\''
                            +((photoJson.location) ? answer : '') +'\' href="'
                            +mediaFileURL+'" target="_blank"><img src="'+mediaFileURL+'" alt=""/></a><br>'
                            +((photoJson.location) ? '<a class="media-location" data-coordinates=\''+answer+'\'>'+ loc('_show_photo_on_map')+'</a>' : '')
                            +'</div>';  
                  
               }else { //else it z a video type... start drawing the video html tag
                 answer = '<div><div class="media" data-coordinates=\''
                          + ((photoJson.location)? answer : '' ) +'\'>'+mediaFileURL+'</div><br>'
                          + '<a href="'+mediaFileURL+'" target="_blank">'+ loc('_open_video')+'</a>'
                          +((photoJson.location) ? '&nbsp;|&nbsp;<a class="media-location" data-coordinates=\''+answer+'\'>'+ loc('_show_photo_on_map')+'</a>' : '')
                          +'</div>';  
               }
               
          } else if (questionType === 'OPTION' && answer.charAt(0)=== '[') { //OPTION questions part.
              optionJson = JSON.parse(answer);
              answer = optionJson.map(function(item){
                   return item.text;
              }).join('|')             
          } else if (questionType === 'SIGNATURE') {
                 imageSrcAttr = 'data:image/png;base64,';
                 signatureJson = JSON.parse(answer);
                 signatureJson && imageSrcAttr + signatureJson.image || '';
                 answer = answer && '<img src="' + answer + '" />';
                 answer = answer && answer + '<div>' + loc('_signed_by') + ':' + signatureJson.name + '</div>' || '';
          } else if (questionType === 'CADDISFLY') {
              //answer = renderTimeStamp(answer); ==> automatically handled by date-format helper.
               //there is no need for this becoz there r no transformation needed... like NUMBER n FREE TEXT type
                //YEAH i skipped the DATE questin type...
                 let hello = 'iam going to jazz them!!!'
                console.log('handling the casiffly questions type ')
                 mapsidebar.renderCaddisflyAnswer(hello)
                
          }else if (questionType === 'GEOSHAPE') {
              //dealing with the geoshapes geometry part.
              
          }
          
    
    //final result of helper.
    markup = '<div class= "defListWrap"><h4>'
              +  question + ':</h4><div>' +
              answer + '</div></div>';
    // to stop the XSS vulnerability while uisng htmlSafe... 
    //let  safeMarkup = Ember.Handlebars.Utils.escapeExpression(markup);
    //return htmlSafe(safeMarkup) //but it z cming from the server n trusted thus no need to escape it.
    return htmlSafe(markup)
}

export default helper(placemarkDetail);
