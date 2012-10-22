define([
  'demos/index/routes/routes'
  ], function( Router ){
  
  function init(){
    new Router();
    Backbone.history.start();
  }
  
  init();
  
});