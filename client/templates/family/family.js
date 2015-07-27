Template.BirdFamily.rendered = function(){
    var familyToJump = this.find('#'+this.data.name);
    if(familyToJump){
        $("#content").animate({
            scrollTop: $(familyToJump).offset().top
        }, 0, function () {
            $("html, body").animate({
                scrollTop: $(familyToJump).offset().top
            }, 'slow');
        });

    }
};
Template.BirdFamily.helpers({
    data: function(){
        return _.map(bird_families, function (obj) {
            obj['id'] = obj.name.toLocaleLowerCase().replace(/ /g, '_').replace(/,/g, '');
            return obj;
        })
    }
});
Template.BirdFamily.events({
   'click .birds li': function(event, template){
       Router.go('bird-details', {}, {
           query: {
               bird: $(template.find(event.target)).text().toLowerCase().replace(/ /g, '_')
           }
       })
   }
});