import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        return this.store.createRecord('contact');
    },
    actions: {
        saveContact(newContact){

            newContact.save().then((response)=> {
                this.set('responseContact', `Thank you! We will be in contact with you shortly: ${this.get("email")}`);
                this.set('email', '');
                console.log('response test...')
            });


        },
        willTransition() {
          // rollbackAttributes() removes the record from the store
          // if the model 'isNew'
          this.controller.get('model').rollbackAttributes();
      }
    }
});
