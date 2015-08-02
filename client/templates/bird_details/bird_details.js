navigationLinks = [
    'Nomenclature',
    'Habitat',
    'Habits',
    'Identification Features',
    'Migration Facts',
    'Population Status'
];
Template.BirdDetails.rendered = function () {
    var self = this;
    Tracker.autorun(function () {
        var navigationList = self.findAll('#information-nav div');
        if(navigationList){
            $(navigationList).removeClass('active');
            $($(navigationList)[Session.get('current_information')]).addClass('active');
        }
    });
};
Template.BirdDetails.helpers({
    'name' : function () {
        this.bird = birds[Session.get('current_bird')].name;
        return this.bird;
    },
    'title' : function () {
        this.information = navigationLinks[Session.get('current_information')];
        return this.information;
    },
    'info' : function () {
        return birds[Session.get('current_bird')][navigationLinks[Session.get('current_information')].toUnderscoreFormat()];
    },
    'navigationLinks' : function () {
        return navigationLinks;
    },
    'activeInformation' : function () {
        return navigationLinks[Session.get('current_information')].replace(/ /g, '');
    }
});
Template.Nomenclature.helpers({
    'isStringLocalNames' : function () {
        return typeof this.local_names === 'string';
    },
    'localNames' : function () {
        return toArray(this.local_names);
    }
});
Template.Habits.helpers({
    'informationArray' : function () {
        return toArray(this);
    }
});
Template.IdentificationFeatures.helpers({
    'imageName' : function () {
        return birds[Session.get('current_bird')].name.toUnderscoreFormat();
    }
});
Template.paragraphs.helpers({
    'getParagraphs' : function () {
        if (typeof this === 'string') {
            return [this]
        }
        else if (typeof this.paras === 'string') {
            return [this.paras];
        }
        return this.paras;
    }
});
Template.parasWithPoints.helpers({
    'getParaWithPoints' : function () {
        var data = UI._templateInstance().data;
        if (typeof data === 'string') {
            return {paras : [data]};
        }
        else if (Array.isArray(data)) {
            return {paras : data};
        }
        return data;
    }
});
Template.BirdDetails.events({
    'click #information-nav .button' : function (event, template) {
        Router.go('bird-details', {}, {
            query: {
                bird: birds[Session.get('current_bird')].name.toUnderscoreFormat(),
                information: $(event.currentTarget).text().toUnderscoreFormat()
            }
        });
    },
    'load #magnify' : function (event, template) {
        var magnifyElement = $(template.find(event.currentTarget));
        magnifyElement.data('zoomImage', magnifyElement.attr('data-zoom-image'));
        magnifyElement.elevateZoom({
            zoomWindowWidth : 300,
            zoomWindowHeight : 300,
            scrollZoom : true,
            zoomWindowPosition : 9,
            zoomLevel : 6,
            minZoomLevel : 3
        });
    }
});