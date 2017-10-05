import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('top-picks',{path:'top-picks/:params.location'});
  this.route('food', {path: 'food/:params.location'});
  this.route('nightlife', {path: 'nightlife/:params.location'});
  this.route('events', {path: 'events/:params.location'});
  this.route('outdoors',{path:'outdoors/:params.location'});
  this.route('arts',{path:'arts/:params.location'});
  this.route('view-venue',{path:'view-venue/:params.id'});
  this.route('google-calendar');
});

export default Router;
