var link_formation = function (routeName, array, property, queryParamName) {
    var links = {};
    $.each(array, function (index, obj) {
        var query = {};
        query[queryParamName] = obj[property];
        links[obj[property]] = Router.path(routeName, {}, {
            query: query
        });
    });
    return links;
};
menus = {
    'List of Birds' : link_formation('bird-details', birds, 'name', 'bird'),
    'Family Classification' : link_formation('family', bird_families, 'name', 'name'),
    'List of Indian State Birds' : '/statebird'
};
(function reduceMenu(menu, MAX_MENU_ITEMS) {
    var keys = Object.keys(menu);
    var length = keys.length;
    if (length > MAX_MENU_ITEMS) {
        menu["More"] = {};
        for (var i = MAX_MENU_ITEMS; i < length; i++) {
            menu["More"][keys[i]] = menu[keys[i]];
            delete menu[keys[i]];
        }
    }
    keys = Object.keys(menu);
    length = keys.length;
    for (var i = 0; i < length; i++) {
        if (menu[keys[i]] instanceof Object) {
            reduceMenu(menu[keys[i]], MAX_MENU_ITEMS);
        }
    }
})(menus, 6);