export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
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
  
  //the above comments should help when setting fake backend server fro ur app.. mimic API.
  //which is where we can define our API endpoints and our data.
  
   this.namespace = '/api'; //config by default.. suppose it was nodejs server... this.urlPrefix = 'http://localhost:3010'
   
      //for the placemarks..
      this.get('/placemarks', function(){
         return {
         "placemarks": [{
          "collectionDate": 1400077495009,
          "count": 1,
          "detailsId": 8943078,
          "keyId": 17886156,
          "latitude": -11.334335,
          "level": 0,
          "longitude": -49.251078,
          "markType": null,
          "surveyId": 125001
          },
        {
          "collectionDate": 1400233173034,
          "count": 1,
          "detailsId": 8943137,
          "keyId": 17886274,
          "latitude": -6.169694,
          "level": 0,
          "longitude": 35.752277,
          "markType": null,
          "surveyId": 13774000
          },
         {
          "collectionDate": 1400158264440,
          "count": 1,
          "detailsId": 8943143,
          "keyId": 17886286,
          "latitude": -0.614335,
          "level": 0,
          "longitude": 30.650189,
          "markType": null,
          "surveyId": 13774000
        },
        {
         "collectionDate": 1403274236657, 
         "count": 1, 
         "detailsId": 17913062, 
         "keyId": 35826124, 
         "latitude": -0.613333, 
         "level": 0, 
         "longitude": 30.65833, 
         "markType": null, 
         "surveyId": 18004010
         },
         {
           "collectionDate": 1328619612000, 
           "count": 1, 
           "detailsId": 530003, 
           "keyId": 1060006, 
           "latitude": -1.29632474, 
           "level": 0, 
           "longitude": 36.76036076, 
           "markType": null, 
           "surveyId": 391005
          }
          ] //placemarks root key
         };
      })
}
