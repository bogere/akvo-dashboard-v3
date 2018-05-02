import Component from '@ember/component';

export default Component.extend({
  
  init(){
     this._super(...arguments)
     this.set('myGroups', [
       { label: "Group 1", value: "group1" },
       { label: "Group 2", value: "group2" }
     ])
     this.set('languageContent', [
        { label: "EnglishT", value: "English" },
        { label: "SpanishT", value: "Spanish"},
        {label: 'japanishT', value: 'Japanese'}
     ])
  },
  actions:{
    switchLanguage(){
      console.log(this.get('selectedOption'))
    }
    
  }
});
