import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendId(venueId) {
      this.sendAction('sendId', venueId);
    }
  }
});
