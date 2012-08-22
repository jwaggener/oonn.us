define([
  'views/index'
], function( Index ){
    
    var ViewState = Backbone.View.extend({
      
      initialize: function(){
        _.bindAll(this);
        this.render();
      },
      
      render: function(){
        var index01;
        index = new Index();
        this.$el.append( index.el );
      }
      
    });
    
    return ViewState;
});