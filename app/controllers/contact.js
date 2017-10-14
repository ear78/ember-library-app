import Ember from 'ember';

export default Ember.Controller.extend({

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageLongEnough: Ember.computed.gte('message.length', 5),
    //computes both properties for validation
    isBothValid: Ember.computed.and('isValid', 'isMessageLongEnough'),

    actions: {
        sendMessage: function(){
            let email = this.get('emailAddress');
            let message = this.get('message');

            

            let responseMessage = 'To: ' + email + ', Message: ' + message;
            this.set('responseMessage', responseMessage);
            this.set('emailAddress', '');
            this.set('message', '');

        }
    }
});
