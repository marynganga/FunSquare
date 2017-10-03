import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        submitDetails(params) {
            this.transitionTo(params.selectedOption)
        }
    }
});
