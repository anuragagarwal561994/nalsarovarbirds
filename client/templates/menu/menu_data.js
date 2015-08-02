var link_formation = function (prefix, array, property) {
    var links = {};
    $.each(array, function (index, obj) {
        links[obj[property]] = prefix + obj[property].toUnderscoreFormat();
    });
    return links;
};
menus = {
    'List of Birds' : link_formation('/bird-details?bird=', birds, 'name'),
    'Family Classification' : link_formation('/family?name=', bird_families, 'name'),
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