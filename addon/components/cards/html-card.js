import Ember from 'ember';
import layout from '../../templates/components/html-card';


export default Ember.Component.extend({
    layout,
    isEditing: true,
    save: function () {
        this.get('env').save(this.get('payload'), false);
    }.observes('doSave'),

    value : Ember.computed('payload', {
        get() {
            return this.get('payload').html || '';
        },
        set(_, value) {
            this.get('payload').html = value;
            this.get('env').save(this.get('payload'), false);
            return this.get('payload').html;
        }
    }),
    init() {
        this._super(...arguments);
        let payload = this.get('payload');
        if (payload.hasOwnProperty('html')) {
            this.isEditing = false;
        } else {
            this.isEditing = true;
        }
    },
    didRender() {
    }
});


// non editor cards need to be vanilla javascript
export let html = {

};
