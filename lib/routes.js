Router.configure({
	layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function(){
	this.render('Home', {to: 'content'});
});
Router.route('/bird-details', function(){
	this.render('BirdDetails', {
		to: 'content',
		data: function(){
			return this.params.query
		}
	});
});
Router.route('/anatomy', function () {
	this.render('BirdAnatomy', {to: 'content'});
});
Router.route('/menu', function(){
	this.render("Menu", {to: 'content'});
});
Router.route('/family', function(){
	this.render('BirdFamily', {
		to: 'content',
		data: function(){
			return this.params.query
		}
	});
});
Router.route('/statebird', function () {
	this.render('StateBird', {to: "content"});
});
Router.route('/map', function () {
	this.render('Map', {
		to: 'content',
		data: function () {
			return this.params.query
		}
	});
});
Router.route('/ecology', function(){
   this.render('Ecology', {to: 'content'});
});
//TODO: Titles
//TODO: 404 page