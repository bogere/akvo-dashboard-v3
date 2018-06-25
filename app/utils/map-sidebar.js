/*export default function mapSidebar() {
  return true;
}*/

import EmberObj from '@ember/object';
import {inject as service} from '@ember/service';

export default EmberObj.extend({
    init(){
      //this.super(...arguments) //this only works for commponents when extending them.
      //objects --> this.set('titles', []) for initialising the values
    },
    renderCaddisflyAnswer(json){
       //console.log('iam activating cadisfly part ' + json ) //yeah it works perefectly
    }
    
})
