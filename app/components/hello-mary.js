import Component from '@ember/component';

export default Component.extend({
  
  init(){
    this._super(...arguments)
    /*this.set('name', '')
    this.set('college', '')*/
  },
  name: null,
  college: null
  
});
