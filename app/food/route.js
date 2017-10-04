import Ember from 'ember';
import config from '../config/environment';



export default Ember.Route.extend({
  model: function(params) {
      var CLIENT_ID = config.myCLIENT_ID;
      var CLIENT_SECRET = config.myCLIENT_SECRET;
      var location= Object.values(params);
      var url = 'https://api.foursquare.com/v2/venues/explore?near='+location+'&categoryId=4d4b7105d754a06374d81259&limit=25&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&v=20171003';
   console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON) {
    	console.log(responseJSON);
      return responseJSON.response.groups[0].items;
    });
  },
});


// import Ember from 'ember';
 
// export default Ember.Component.extend({
//   store: Ember.inject.service(),
//   posts: Ember.computed(function() {
//     return this.get('store').peekAll('post');
//   }),
 
//   pageSize: 20,
//   pageNumber: null,
//   recordCount: null,
 
//   sortProps: ['createdAt:desc'],
//   sortedPosts: Ember.computed.sort('posts', 'sortProps'),
 
//   loadPosts: function(getPageNumber) {
//     const pageSize = this.get('pageSize');
 
//     this.get('store').unloadAll('post');
//     this.get('store').
//       query('post', {page: {number: getPageNumber, size: pageSize}}).
//       then(function(result) {
//         this.setProperties({
//         	'recordCount': result.get('meta.record-count'),
//         	'pageNumber': getPageNumber
//         });
//       }.bind(this));
//   },
 
//   init: function() {
//     this._super(...arguments);
//     this.loadPosts(1);
//   },
 
//   actions: {
//     getPage: function(getPageNumber) {
//       this.loadPosts(getPageNumber);
//     }
//   }
// });