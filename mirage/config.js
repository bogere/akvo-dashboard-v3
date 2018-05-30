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
   
      this.get('/placemarks', function(schema,request){
              
           //return schema.placemarks.all()
          //test something.. return specific record...
          //return schema.placemarks.where({detailsId: 8943078}) //specific record. in form of array
          return schema.placemarks.findBy({detailsId: 8943078 }) //returns the 1st record that matches
          
      })
      
      //this.passthrough('/datas') //it is not yet clear to me.
}
