Template.BirdsControl.rendered = function () {
    var self = this;
    var birdList = $(this.find('.bird-list'));
    birdList.slick({
        slidesToShow : 5,
        slidesToScroll : 5,
        infinite : false
    });
    birdList.slick('slickGoTo', Session.get('current_bird') - 1);
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
        var query = {
            bird : birds[$(event.currentTarget).parent().data('slickIndex')].name.toUnderscoreFormat()
        };
        var currentRoute = Router.current().options.route.getName();
        Router.go(currentRoute, {}, {
            query : $.extend({}, query, currentRoute == "bird-details" ? {
                information: navigationLinks[Session.get('current_information')].toUnderscoreFormat()
            } : {})
        });
    }
});
Template.BirdControlFooter.helpers({
    'bird_name' : function () {
        return birds[Session.get('current_bird')].name.toUnderscoreFormat();
    }
});
Template.BirdControlFooter.events({
    'click #map-trigger' : function (event, template) {
        Router.go('map', {}, {
            query : {
                bird : birds[Session.get('current_bird')].name.toUnderscoreFormat()
            }
        });
    },
    'click #sound-trigger' : function (event, template) {
        var audioElement = template.find('audio');
        if (audioElement.paused)
            audioElement.play();
        else
            audioElement.pause();
    }
});