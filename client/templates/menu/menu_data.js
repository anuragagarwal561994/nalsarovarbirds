menus = {
    'List of Birds': function () {
        var birdLink = {};
        _.each(birds, function (bird) {
            birdLink[bird.name] = '/bird-details?bird=' + bird.name.toLowerCase().replace(/ /g, '_');
        });
        return birdLink;
    }(),
    'Family Classification': {
        'Grebes Podicipedidae': '/family?name=grebes_podicipedidae',
        'Whistling ducks, Swans, Geese, and Ducks Anatidae': '/family?name=whistling_ducks_swans_geese_and_ducks_anatidae',
    },
    'List of Indian State Birds': '/statebird'
};

(function reduceMenu (menu, MAX_MENU_ITEMS) {
    var keys = Object.keys(menu);
    var length = keys.length;

    if(length>MAX_MENU_ITEMS){
        menu["More"] = {};
        for(var i=MAX_MENU_ITEMS;i<length;i++){
            menu["More"][keys[i]] = menu[keys[i]];
            delete menu[keys[i]];
        }
    }
    keys = Object.keys(menu);
    length = keys.length;
    for(var i=0;i<length;i++){
        if(menu[keys[i]] instanceof Object){
            reduceMenu(menu[keys[i]], MAX_MENU_ITEMS);
        }
    }
})(menus, 6);