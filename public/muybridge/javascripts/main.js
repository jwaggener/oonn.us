require([
	'viewstate'
], function( ViewState ){
  //start the app
  var view = new ViewState();
  $( "#viewstate" ).append( view.el );
});