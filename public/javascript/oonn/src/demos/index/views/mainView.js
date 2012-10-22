define([
  'text!demos/index/resources/templates/main.html'
  ], function( Template ){
  
  var MainView = Backbone.View.extend({
    
    initialize: function(){
      this.render();
    },
    
    render: function(){
      var body;
      body = _.template( Template );
      this.$el.html(body);
    }
    
  });
  
  return MainView;
  
});