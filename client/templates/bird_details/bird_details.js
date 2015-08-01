var navigationLinks = [
    'Nomenclature',
    'Habitat',
    'Habits',
    'Identification Features',
    'Migration Facts',
    'Population Status'
];
Template.BirdDetails.created = function () {
    $("html, body").animate({
        scrollTop: 0
    }, 'slow');
    var getIndex = function (array, key) {
        return Math.max(_.map(array, function (val) {
            return val.toLowerCase().replace(/ /g, '_');
        }).indexOf(key), 0);
    };
    Session.set('current_bird', getIndex(_.pluck(birds, 'name'), this.data.bird));
    Session.set('current_information', getIndex(navigationLinks, this.data.information));
};
Template.BirdDetails.rendered = function () {
    var self = this;
    Tracker.autorun(function () {
        var navigationList = $(self.findAll('#information-nav div'));
        navigationList.removeClass('active');
        $(navigationList[Session.get('current_information')]).addClass('active');
    });
};
Template.BirdDetails.helpers({
    'data': function () {
        var bird = birds[Session.get('current_bird')];
        var title = navigationLinks[Session.get('current_information')];
        var currentInfromation = title.toLowerCase().replace(/ /g, '_');
        return {
            title: title,
            info: new Handlebars.SafeString(bird[currentInfromation]),
            name: bird.name
        };
    },
    'navigationLinks': function () {
        return navigationLinks;
    }
});
Template.BirdDetails.events({
    'click #information-nav .button': function (event, template) {
        Session.set('current_information', $(template.find(event.currentTarget)).index())
    },
    'load #magnify': function (event, template) {
        $(template.find(event.currentTarget)).elevateZoom({
            zoomWindowWidth: 300,
            zoomWindowHeight: 300,
            scrollZoom: true,
            zoomWindowPosition: 9,
            zoomLevel: 6,
            minZoomLevel: 3
        });
    }
});