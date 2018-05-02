import { helper } from '@ember/component/helper';

export function contentForGroup([content,group,contentGroupKey]) {
  //return params;
  //which filters the content using the current group’s key.
   return content.filterBy('contentGroupKey',group)  
}

export default helper(contentForGroup);
