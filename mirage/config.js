export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
     this.timing = 400;      // delay for each request, automatically set to 0 during testing

  //the above comments should help when setting fake backend server fro ur app.. mimic API.
  //which is where we can define our API endpoints and our data.
  
   this.namespace = '/api'; //config by default.. suppose it was nodejs server... this.urlPrefix = 'http://localhost:3010'
       
       //retrieving the placemarks according to teh surveyId
      this.get('/placemarks', function(schema,request){
           let selectedSurvey = request.queryParams.surveyId;//http://navyuginfo.com/use-ember-cli-mirage/
              if (selectedSurvey) { //if a surveyId is selected.
                 return schema.placemarks.where({surveyId:selectedSurvey})
              } else {
                 return schema.placemarks.all()
              }  
        
      })
      
      
       this.get('/placemarkDetails', function(schema,request){
            //let _selectedkeyId = request.queryParams.selectedkeyId; wrong filter key.
            let _selectedkeyId = request.queryParams.placemarkId;
            if (_selectedkeyId) {
               return schema.placemarkDetails.where({placemarkId: _selectedkeyId})
            }
       })
      //this.passthrough('/datas') //it is not yet clear to me.
}
