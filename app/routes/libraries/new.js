import Ember from 'ember';

export default Ember.route.extend({
    model(){
        return this.store.createRecord('library');
    },

    actions: {
        //bring in new library from new template form
        saveLibrary(newLibrary){
            newLibrary.save().then(()=> this.transitionTo('libraries'));
        },

        willTransition(){
            // rollbackAttributes() removes record from the store if model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});
