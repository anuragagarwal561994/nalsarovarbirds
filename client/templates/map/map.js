Template.Map.helpers({
    'current_bird' : function () {
        return birds[Session.get('current_bird')].name.toUnderscoreFormat();
    }
});