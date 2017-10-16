import Ember from 'ember';

export default Ember.Controller.extend({

    isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
    isMessageLongEnough: Ember.computed.gte('model.message.length', 5),
    //computes both properties for validation
    isBothValid: Ember.computed.and('isValid', 'isMessageLongEnough')

});
