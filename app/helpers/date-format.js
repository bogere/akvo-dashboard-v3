import { helper } from '@ember/component/helper';

export function dateFormat([dateValue]/*, hash*/) {

  if (dateValue) {
     var d = new Date(dateValue)
     var date = d.getDate(),
         yr = d.getFullYear(),
         t = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric',hour12:true}); //AM or PM
    //getting the specific month.
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", 
                    "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
          m = months[d.getMonth()];
          
        return date + ' ' + m + ' ' + yr + ' at ' + t;      
  }
   return null
}

export default helper(dateFormat);
