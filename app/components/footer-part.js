import Component from '@ember/component';

export default Component.extend({
  
  init(){
     this._super(...arguments)
     this.set('languageContent', [
        { label: "EnglishT", value: "English" },
        { label: "SpanishT", value: "Spanish" }
     ])
  },
  actions:{
    switchLanguage(){
      console.log('iam switching languages' + Date.now())
    }
    
  }
});
