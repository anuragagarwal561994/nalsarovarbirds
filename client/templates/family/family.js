Template.BirdFamily.created = function () {
    Session.set('current_family', getIndex(bird_families, 'name', this.data.name, 'current_family'));
};
Template.BirdFamily.helpers({
    'family_data' : function () {
        return bird_families[Session.get('current_family')];
    },
    'hasFamilyData' : function () {
        return this.hasOwnProperty('birds') || this.hasOwnProperty('bird_details') || this.hasOwnProperty('characteristics');
    },
    'nextFamily' : function () {
        if (Session.get('current_family') < bird_families.length) {
            return bird_families[Session.get('current_family') + 1].name.cutString(26);
        }
    },
    'previousFamily' : function () {
        if (Session.get('current_family') > 0) {
            return bird_families[Session.get('current_family') - 1].name.cutString(26);
        }
    }
});
Template.BirdFamily.events({
    'click .birds li' : function (event, template) {
        Router.go('bird-details', {}, {
            query : {
                bird : $(template.find(event.target)).text().toUnderscoreFormat()
            }
        })
    },
    'click #next' : function (event, template) {
        Session.set('current_family', Session.get('current_family') + 1);
    },
    'click #previous' : function (event, template) {
        Session.set('current_family', Session.get('current_family') - 1);
    }
});