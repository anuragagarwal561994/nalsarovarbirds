Template.ApplicationLayout.rendered = function () {
    var content = $(this.find('#content'));
    var content_trigger = this.find('#trigger-content');
    if (content_trigger && content) {
        if (content.is(":visible")) {
            content_trigger.src = "/images/controls/speech-bubble-active.png";
        }
    }
};
Template.ApplicationLayout.events({
    'click #trigger-content': function (event, template) {
        var content = $(template.find('#content'));
        var trigger = template.find('#trigger-content');
        var imageName = 'speech-bubble';
        if (content.is(':visible')) {
            content.fadeOut(300);
        }
        else {
            content.fadeIn(300);
            imageName += '-active';
        }
        trigger.src = '/images/controls/' + imageName + '.png';
    }
});