Template.BirdsControl.rendered = function () {
    var bird_control = $(this.find('.enlarge'));
    var self = this;
    Session.set('current_bird', 0);
    Tracker.autorun(function () {
        var enlargeList = $(self.findAll('.enlarge li')),
            birdIndex = Session.get('current_bird');
        enlargeList.removeClass('active');
        $(enlargeList[birdIndex]).addClass('active');

        $('#gallery-trigger').magnificPopup({
            items: birds[birdIndex]['gallery'],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });
};
Template.BirdsControl.helpers({
    'birds': function () {
        return birds;
    }
});
Template.BirdsControl.events({
    'click .enlarge li': function (event, template) {
        Session.set('current_bird', $(template.find(event.currentTarget)).index());
    }
});