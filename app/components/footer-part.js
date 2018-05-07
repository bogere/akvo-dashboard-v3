import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  i18n: service(),
  init(){ //i dont like this..... get it from the controller /utility
     this._super(...arguments)
     this.set('myGroups', [
       { label: "Group 1", value: "group1" },
       { label: "Group 2", value: "group2" }
     ])
     this.set('languageContent', [
        {label: "English", value: "en"}, //btw this is array of objects not just mere strings
        { label: "French", value: "fr"},
        {label: 'japanishT', value: 'Japanese'}
     ])
  },
  actions:{
    switchLanguage(){
      let selectedLanguage = this.get('selectedOption')
      //Override the default by setting locale on the i18n service:
      this.set('i18n.locale', selectedLanguage)
      
    }
    
  }
});
