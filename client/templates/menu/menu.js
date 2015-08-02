var currentMenu = null;
Template.Menu.created = function () {
    Session.set('parentStack', []);
    dep = new Tracker.Dependency();
};
Template.Menu.rendered = function () {
    var self = this;
    Tracker.autorun(function () {
        dep.depend();
        var menuItems = self.findAll(".menu-items");
        var timeGap = 300.0 / menuItems.length;
        $(self.findAll(".menu-items")).each(function (i) {
            $(this).delay(i * timeGap).fadeTo(timeGap, 1);
        });
    })
};
Template.Menu.helpers({
    'menuItems' : function () {
        currentMenu = menus;
        var parentStack = Session.get('parentStack');
        for (var i = 0, length = parentStack.length; i < length; i++) {
            currentMenu = currentMenu[parentStack[i]];
        }
        Meteor.defer(function () {
            dep.changed()
        });
        return Object.keys(currentMenu);
    },
    'hasParent' : function () {
        return Session.get('parentStack').length;
    }
});
Template.Menu.events({
    'click .menu-items:not(#back-button)' : function (event, template) {
        var selected = $(template.find(event.target)).text();
        if (typeof currentMenu[selected] === 'string')
            Router.go(currentMenu[selected]);
        else {
            animateFade(template, false, function () {
                var parentStack = Session.get('parentStack');
                parentStack.push(selected);
                Session.set('parentStack', parentStack);
            });
        }
    },
    'click #back-button' : function (event, template) {
        animateFade(template, true, function () {
            var parentStack = Session.get('parentStack');
            parentStack.pop();
            Session.set('parentStack', parentStack);
        });
    }
});
var animateFade = function (template, reverse, cb) {
    var menuItems = template.findAll('.menu-items');
    var timeGap = 300.0 / menuItems.length;
    if (reverse)
        menuItems.reverse();
    $(menuItems).each(function (i) {
        $(this).delay(i * timeGap).fadeTo(timeGap, 0);
    }).promise().done(cb)
};