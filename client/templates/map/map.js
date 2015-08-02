Template.Map.created = function () {
    Session.set('current_bird', getIndex(birds, 'name', this.data.bird));
};
Template.Map.helpers({
    'current_bird' : function () {
        return birds[Session.get('current_bird')].name.toUnderscoreFormat();
    }
});