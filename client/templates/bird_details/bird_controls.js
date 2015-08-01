Template.BirdsControl.rendered = function () {
    var bird_control = $(this.find('.enlarge'));
    var self = this;
    Tracker.autorun(function () {
        var enlargeList = $(self.findAll('.bird-list div.slick-slide')),
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
    $(this.find('.bird-list')).slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false
    })
};
Template.BirdsControl.helpers({
    'birds': function () {
        return birds;
    }
});
Template.BirdsControl.events({
    'click .bird-list div.slick-slide > div': function (event, template) {
        Session.set('current_bird', $(template.find(event.currentTarget)).parent().data('slickIndex'))
    }
});
Template.BirdControlFooter.events({
    'click #map-trigger': function (event, template) {
        window.location.href = '/map?bird=' + birds[Session.get('current_bird')].name.toLowerCase().replace(/ /g, '_');
    }
});