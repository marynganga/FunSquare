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
  this.route('food');
  this.route('coffee');
  this.route('breakfast');
});

export default Router;
