Router.configure({
    layoutTemplate : 'ApplicationLayout'
});
Router.route('/', function () {
    this.render('Home', {to : 'content'});
});
Router.route('/bird-details', function () {
    this.render('BirdDetails', {
        to : 'content',
        data : function () {
            return this.params.query
        }
    });
    this.onAfterAction = function () {
        Session.set('current_bird', getIndex(birds, 'name', this.params.query.bird, 'current_bird'));
        Session.set('current_information', getIndex(navigationLinks, this.params.query.information), 'current_information');
    }
});
Router.route('/terminology', function () {
    this.render('BirdsTerminology', {to : 'content'});
});
Router.route('/menu', function () {
    this.render("Menu", {to : 'content'});
    this.onAfterAction = function () {
        var currentMenu = menus,
            currentParentStack = [];
        for(var i= 0, parentStack = this.params.query.parentStack, length = parentStack?parentStack.length:0;i<length;i++){
            if(currentMenu.hasOwnProperty(parentStack[i])) {
                currentMenu = currentMenu[parentStack[i]];
                currentParentStack.push(parentStack[i]);
            }
            else {
                currentMenu = null;
                break;
            }
        }
        Session.set('parentStack', currentParentStack);
    }
});
Router.route('/family', function () {
    this.render('BirdFamily', {
        to : 'content',
        data : function () {
            return this.params.query
        }
    });
    this.onAfterAction = function(){
        Session.set('current_family', getIndex(bird_families, 'name', this.params.query.name, 'current_family'));
    }
});
Router.route('/statebird', function () {
    this.render('StateBird', {to : "content"});
});
Router.route('/map', function () {
    this.render('Map', {
        to : 'content',
        data : function () {
            return this.params.query
        }
    });
    this.onAfterAction = function () {
        Session.set('current_bird', getIndex(birds, 'name', this.params.query.bird, 'current_bird'));
    }
});
Router.route('/ecology', function () {
    this.render('Ecology', {to : 'content'});
});
Router.onAfterAction(function () {
    document.title = "Nalsarovar";
    if (this.route.getName())
        document.title += ' - ' + this.route.getName().replace(/-/g, ' ').toTitleCase();
    $("html, body").animate({
        scrollTop : 0
    }, 'slow');
});