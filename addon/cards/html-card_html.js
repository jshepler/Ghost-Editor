// this has to be a node style module as it's imported by the front end and ember.
// a card has to have an editor object, and an HTML object. In the future we might have AMP and Text (for FTS) renderers.

module.exports = {
    name: 'html-card',
    render: function(opts) {
        return opts.payload.html;
    }
};

