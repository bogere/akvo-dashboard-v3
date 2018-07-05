import Component from '@ember/component';
import {computed, observer} from '@ember/object';

export default Component.extend({
   content: null,
   showingShape:false,
   didReceiveAttrs(){
     this._super(...arguments)
      let details = this.get('content')
      if (details.questionType === 'GEOSHAPE') {
        this.set('showingShape', true)
      }
   },
   /*displayMap: computed('content', function(){
       let details = this.get('content')
      //console.log(details)
       if (details.questionType === 'GEOSHAPE') {
         this.set('showingShape', true )  
      }
      //return details
      return true
   }),*/
   
   actions:{
     
   }
   
   
});
