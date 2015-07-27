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
        'Whistling ducks, Swans, Geese, and Ducks Anatidae': '/family?name=whistling_ducks_swans_geese_and_ducks_anatidae'
    },
    'List of Indian State Birds': '/statebird'
};

