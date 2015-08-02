Template.StateBird.created = function () {
    this.birdNames = birds.map(function (obj) {
        return obj.name;
    });
};
Template.StateBird.helpers({
    data : function () {
        return states
    },
    hasBird : function () {
        console.log(this.bird, UI._templateInstance().birdNames.indexOf(this.bird));
        return UI._templateInstance().birdNames.indexOf(this.bird) > -1;
    }
});
Template.StateBird.events({
    'click .bird-link' : function (event, template) {
        Router.go('bird-details', {}, {
            query : {
                bird : event.target.innerText.toUnderscoreFormat()
            }
        });
    }
});