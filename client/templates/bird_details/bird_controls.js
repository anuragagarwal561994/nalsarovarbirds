Template.BirdsControl.rendered = function () {
    var self = this;
    $(this.find('.bird-list')).slick({
        slidesToShow : 5,
        slidesToScroll : 5,
        infinite : false
    });
    Tracker.autorun(function () {
        var birdListElements = $(self.findAll('.bird-list div.slick-slide')),
            birdIndex = Session.get('current_bird');
        birdListElements.removeClass('active');
        $(birdListElements[birdIndex]).addClass('active');
        $('#gallery-trigger').magnificPopup({
            items : (function () {
                var galleryImages = [];
                for (var i = 1, length = (birds[birdIndex].galleryCount || 6) + 1; i < length; i++) {
                    galleryImages.push({
                        src : '/images/birds-big/' + birds[birdIndex].name.toUnderscoreFormat() + i + '.jpg'
                    })
                }
                return galleryImages;
            })(),
            gallery : {
                enabled : true
            },
            type : 'image'
        });
    });
};
Template.BirdsControl.helpers({
    'images' : function () {
        return birds.map(function (obj) {
            return obj.name.toUnderscoreFormat();
        });
    }
});
Template.BirdsControl.events({
    'click .bird-list div.slick-slide > div' : function (event, template) {
        Session.set('current_bird', $(template.find(event.currentTarget)).parent().data('slickIndex'))
    }
});
Template.BirdControlFooter.events({
    'click #map-trigger' : function (event, template) {
        window.location.href = '/map?bird=' + birds[Session.get('current_bird')].name.toUnderscoreFormat();
    }
});