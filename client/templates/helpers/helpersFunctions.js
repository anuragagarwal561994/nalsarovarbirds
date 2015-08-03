Template.for.helpers({
    'array' : function () {
        var from = this.from,
            to = this.to;
        return Array.apply(null, Array(to-from)).map(function (_, i) {return i+from;});
    }
});
String.prototype.neededSubStrings = function (joinCharacter) {
    return this.match(/[0-9a-z]+s?/gi).join(joinCharacter);
};
String.prototype.toUnderscoreFormat = function () {
    return this.neededSubStrings('_').toLowerCase();
};
String.prototype.toTitleCase = function () {
    return this.neededSubStrings(' ').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};
toArray = function (obj) {
    var returnArray = [];
    for (var key in obj) {
        returnArray.push({key : key, value : obj[key]});
    }
    return returnArray;
};
String.prototype.cutString = function (limit) {
    return this.length > limit ? this.slice(0, limit) + '...' : this;
};
getIndex = function (a, b, c, d) {
    switch (arguments.length){
        case 4:
            if(!c && Session.get(d))
                return Session.get(d);
            else
                return getIndex(a,b,c);
        case 3:
            return getIndex(a.map(function (obj) {
                return obj[b];
            }), c);
        case 2:
            return Math.max(a.map(function (val) {
                return val;
            }).indexOf(b), 0);
        default:
            throw "Accepts either 2 or 3 arguments";
    }
};