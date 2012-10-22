define([
  'views/mainView'
  ], function( MainView ){
  
  function init(){
    var scaffold, view, body;
    scaffold = $("#main");
    view =  new MainView();
    scaffold.append( view.el );
  }
  
  init();
  
});