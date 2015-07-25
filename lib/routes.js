Router.configure({
	layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function(){
	this.render('Home', {to: 'content'});
});
//TitlesRouter.route('/anatomy', function () {
	this.render('BirdAnatomy', {to: 'content'});
})
