menus = {
    'List of Birds': function () {
        var birdLink = {};
        _.each(birds, function (bird) {
            birdLink[bird.name] = '/bird-details?bird='+bird.name.toLowerCase().replace(/ /g, '_');
        });
        return birdLink;
    }(),
    'Family Classification': {
        'List of Birds Families': '',
        'Grebes Podicipedidae': '',
        'Whistling ducks, Swans, Geese, and Ducks Anatidae': {
            'List of Birds': '',
            'Bar Headed Goose': '',
            'Lesser Whistining Duck': ''
        }
    },
    'List of Indian State Birds': {
        'List of Indian States': '',
        'Gujarat': '',
        'Uttar Pradesh': ''
    }
};

