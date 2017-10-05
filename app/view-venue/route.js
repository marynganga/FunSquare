import Ember from 'ember';
import config from '../config/environment';


export default Ember.Route.extend({
	model: function(params) {
      var CLIENT_ID = config.myCLIENT_ID;
      var CLIENT_SECRET = config.myCLIENT_SECRET;
      var venueId= Object.values(params);
      var url = 'https://api.foursquare.com/v2/venues/'+venueId+'?&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&v=20171003';
      console.log(url);
      return Ember.$.getJSON(url).then(function(responseJSON) {
    	console.log(responseJSON);
      // console.log(responseJSON.response.venue.tips.groups[0].items);
      var allVenues= responseJSON.response.venue;
      var allReviews=responseJSON.response.venue.tips.groups[0].items;
      var allData = {allVenues,allReviews};
      console.log(allReviews);
      return allData;
     

    });
  },

});
