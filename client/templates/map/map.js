Template.Map.created = function () {
    Session.set('current_bird', Math.max(_.map(_.pluck(birds, 'name'), function (val) {
        return val.toLowerCase().replace(/ /g, '_');
    }).indexOf(this.data.bird), 0));
};
Template.Map.helpers({
    'current_bird': function () {
        return birds[Session.get('current_bird')].name.toLowerCase();
    }
});