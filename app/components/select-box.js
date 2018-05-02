//https://spin.atomicobject.com/2016/02/23/ember-2-select-box/
import Component from '@ember/component';

export default Component.extend({
   content: [],
   prompt: null,
   optionValuePath: 'value',
   optionLabelPath: 'label',
   
   init(){
     this._super(...arguments)
     if (!this.get('content')) {
       this.set('content', [])
     }
   },
   
   actions:{
     change(){ //It basically handles a change action triggered from the template
       //calculates the selected value based on the  selectedIndex
       let selectedIndex = this.$('select')[0].selectedIndex;
       let content = this.get('content');
       // decrement index by 1 if we have a prompt
       let hasPrompt = !!this.get('prompt'),
           contentIndex = hasPrompt?selectedIndex- 1: selectedIndex,
           _selection =  content[contentIndex];
      //and fires off a willChangeAction and didChangeAction.
        this.sendAction('willChangeAction', _selection)
        
        if (this.get('optionLabelPath')) {
          this.set('selection', _selection[this.get('optionValuePath')])
        } else {
          this.set('selection', _selection)
        }
        
        this.sendAction('didChangeAction', _selection)
       
     }
   }
   
});
