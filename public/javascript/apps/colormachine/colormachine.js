var ColorMachine = {
	Routers: {},
	Views: {},
	init: function(){
		console.log("init the app");
		new ColorMachine.Routers.Colors();
        Backbone.history.start();
	}
}