Router.configure({
	layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function(){
	this.render('Home', {to: 'content'});
});
Router.route('/bird-details', function(){
	this.render('BirdDetails', {to: 'content'});
	this.render('BirdsControl', {to: 'footer'});
	this.render('BirdControlFooter', {to: 'control-footer'})
});
Router.route('/anatomy', function () {
	this.render('BirdAnatomy', {to: 'content'});
})
//TODO: Titles
//TODO: 404 page