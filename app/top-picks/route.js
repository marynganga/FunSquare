import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var CLIENT_ID = config.myCLIENT_ID;
    var CLIENT_SECRET = config.myCLIENT_SECRET;
    var location = Object.values(params);
    var url = 'https://api.foursquare.com/v2/venues/explore?near=' + location + '&limit=25&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&v=20171003';
    console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON.response.groups[0].items;
    });
  },
});
