import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  i18n: service(),
  init(){
     this._super(...arguments)
     this.set('myGroups', [
       { label: "Group 1", value: "group1" },
       { label: "Group 2", value: "group2" }
     ])
     this.set('languageContent', [
        {label: "English", value: "en", group: 'group1' },
        { label: "French", value: "fr", group:'group2' },
        {label: 'japanishT', value: 'Japanese', group: 'group1'}
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
