export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
     this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  
  //let get started pliz... 
  
  //static way.... hello world stuff.
  //GET /api/dataPoints/surveyId.
   this.get('/api/dataPoints', function(){
      return {
        dataPoints:[  //pliz a find  a way to configure this..
          {
	          id: "23124",
	          displayName: "foo",
	          identifier: "fkdos-dso-dofks"
	          latitude: 56.2,
	          longitude: 23.6,
	          createdAt: "2017-02-23T03:30:58",
	          modifiedAt: "2017-02-23T03:30:58",
            surveyId: '123' //matching teh survey selected.
	      },
        {
          id: "23124",
          displayName: "foo",
          identifier: "fkdos-dso-dofks"
          latitude: 56.2,
          longitude: 23.6,
          createdAt: "2017-02-23T03:30:58",
          modifiedAt: "2017-02-23T03:30:58",
          surveyId: '123' //matching teh survey selected.
        },
       {
        id: "23124",
        displayName: "foo",
        identifier: "fkdos-dso-dofks"
        latitude: 56.2,
        longitude: 23.6,
        createdAt: "2017-02-23T03:30:58",
        modifiedAt: "2017-02-23T03:30:58",
        surveyId: '123' //matching teh survey selected.
          }    
        ]
      }//end of the return statement
   }) //route handler... for  GET /api/dataPoints/ but later u shall change it to FLOW.placemark
  
}
