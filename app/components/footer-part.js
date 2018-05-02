import Component from '@ember/component';

export default Component.extend({
  
  init(){
     this._super(...arguments)
     this.set('myGroups', [
       { label: "Group 1", value: "group1" },
       { label: "Group 2", value: "group2" }
     ])
     this.set('languageContent', [
        { label: "EnglishT", value: "English", group: 'group1' },
        { label: "SpanishT", value: "Spanish", group:'group2' },
        {label: 'japanishT', value: 'Japanese', group: 'group1'}
     ])
  },
  actions:{
    switchLanguage(){
      console.log(this.get('selectedOption'))
    }
    
  }
});
