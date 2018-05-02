import Ember from 'ember';
import { helper } from '@ember/component/helper';

export function readPath([object,path]) {
  //return  this.get(object,path) // return Ember.get(object, path);
  return Ember.get(object,path) //solved this.. Uncaught TypeError: Cannot read property 'get' of undefined
}

export default helper(readPath);
