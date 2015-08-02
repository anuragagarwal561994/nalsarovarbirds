Template.for.helpers({
    'array' : function () {
        return _.range(this.from, this.to, this.incr);
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