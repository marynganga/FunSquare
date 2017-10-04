import Ember from 'ember';

export default Ember.Component.extend({
	selectedOption:null,
    actions:{
        setSelection: function(selected){
            this.set('selectedOption',selected)
        },
        submit(){
            var params = {
                location: this.get('location'),
                selectedOption: this.get('selectedOption')
            };
            this.set('location','');
            this.sendAction('submitDetails',params);
        }
    }
});
