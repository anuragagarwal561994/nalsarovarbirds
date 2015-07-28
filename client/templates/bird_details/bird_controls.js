Template.BirdsControl.rendered = function () {
    var bird_control = $(this.find('.enlarge'));
    var self = this;
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
Template.BirdControlFooter.events({
    'click #map-trigger': function (event, template) {
        window.location.href = '/map?bird=' + birds[Session.get('current_bird')].name.toLowerCase().replace(/ /g, '_');
    }
});