Template.ApplicationLayout.rendered = function () {
    var content = $(this.find('#content'));
    var content_trigger = this.find('#trigger-content');
    if (content_trigger && content) {
        if (!content.hasClass('transparent')) {
            content_trigger.src = "/images/controls/speech-bubble-active.png";
        }
    }
};
Template.ApplicationLayout.events({
    'click #trigger-content' : function (event, template) {
        var content = $(template.find('#content'));
        var trigger = template.find('#trigger-content');
        var imageName = 'speech-bubble';
        if (content && trigger) {
            if (content.hasClass('transparent')) {
                imageName += '-active';
            }
            content.toggleClass('transparent');
            trigger.src = '/images/controls/' + imageName + '.png';
        }
    },
    'error img' : function (event, template) {
        template.find(event.target).remove();
    },
    'click #controlImageMap area': function (event, template) {
        Router.go('/'+event.target.getAttribute('alt'));
    }
});