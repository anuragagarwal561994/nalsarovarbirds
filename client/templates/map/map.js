Template.Map.helpers({
    'current_bird' : function () {
        return birds[Session.get('current_bird')].name.toUnderscoreFormat();
    }
});
Template.Map.events({
    'click #birdDetailMap area': function(event, template){
        Router.go('bird-details', {}, {
            query: {
                bird: birds[Session.get('current_bird')].name
            }
        });
    }
});