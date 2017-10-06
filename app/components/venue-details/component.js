import Ember from 'ember';

export default Ember.Component.extend({
  createEventClicked: null,
  actions: {
    createEvent() {
      this.set('createEventClicked', "I want to add an event.")
    }
  }
});
