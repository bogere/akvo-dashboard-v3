import { helper } from '@ember/component/helper';

export function contentForGroup([content,group,contentGroupKey]) {
  //which filters the content using the current group’s key.
   //return content.filterBy('contentGroupKey',group)//this has caused the grouped options not to work
    return content.filterBy(contentGroupKey, group)  
}

export default helper(contentForGroup);
