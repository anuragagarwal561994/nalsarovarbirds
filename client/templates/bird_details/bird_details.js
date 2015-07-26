var navigationLinks = [
    'Nomenclature',
    'Habitat',
    'Habits',
    'Identification Features',
    'Migration Facts',
    'Population Status'
];
Template.BirdDetails.rendered = function () {
    var self = this;
    Session.set('current_information', 0);
    Tracker.autorun(function () {
        var navigationList = $(self.findAll('#information-nav div'));
        navigationList.removeClass('active');
        $(navigationList[Session.get('current_information')]).addClass('active');
    });
};
Template.BirdDetails.helpers({
    'data': function () {
        var bird = birds[Session.get('current_bird')];
        var title = navigationLinks[Session.get('current_information')]
        var currentInfromation = title.toLowerCase().replace(' ', '_');
        if (title && bird) {
            return {
                title: title,
                info: new Handlebars.SafeString(bird[currentInfromation]),
                name: bird.name
            };
        }
        return null;
    },
    'navigationLinks': function(){
        return navigationLinks;
    }
});
Template.BirdDetails.events({
    'click #information-nav div': function (event, template) {
        Session.set('current_information', $(template.find(event.currentTarget)).index())
    },
    'click #magnify': function(event, template){
        $(template.find(event.currentTarget)).elevateZoom({
            zoomWindowWidth: 300,
            zoomWindowHeight: 300,
            scrollZoom: true,
            zoomWindowPosition: 9,
            zoomLevel: 2
        });
    }
});