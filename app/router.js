import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('top-picks');

  this.route('trending');

  this.route('food', {
    path: 'food/:params.location'
  });

  this.route('coffee');

  this.route('breakfast');


  this.route('nightlife', {
    path: 'nightlife/:params.location'
  });

  this.route('shopping');

  this.route('fun', {
    path: 'fun/:params.location'
  });

  this.route('view-venue');

  this.route('events', {
    path: 'events/:params.location'
  });
});

export default Router;
