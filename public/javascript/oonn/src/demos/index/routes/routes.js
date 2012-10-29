define([
  'demos/index/views/mainView',
  'demos/grid/views/mainView',
  'demos/cats/views/mainView',
  'demos/filters/views/mainView',
  'demos/circles/main',
  'demos/polygons/main'
  ], function( MainView, Grid, Cats, Filters, Circles, Polygons ){
  
  var Router = Backbone.Router.extend({
    
    initialize: function(){
      this.main; // the main view for the index
      this.content // replce the contents of this with demo item els
      this.mainView();
    },
    
    routes:{
      "" : "handleDemo",
      ":demo" : "handleDemo"
    },
    
    handleDemo: function( demo ){
      switch( demo ){
        case("grid"):
        this.grid();
        break;
        
        case("cats"):
        this.cats();
        break;
        
        case("filters"):
        this.filters();
        break;
        
        case("circles"):
        this.circles();
        break;
        
        case("polygons"):
        this.polygons();
        break;
        
        default:
        this.polygons();
        break;
      }
    },
    
    mainView: function(){
      var scaffold, view;
      scaffold = $("#main");
      this.main =  new MainView();
      this.content = this.main.$el.find( '.content' );
      scaffold.append( this.main.el );
    },
    
    grid: function(){
      var grid = new Grid();
      this.content.html( grid.el );
    },
    
    cats: function(){
      var cats = new Cats();
      this.content.html( cats.el );
    },
    
    filters: function(){
      var filters = new Filters();
      this.content.html( filters.el );
    },
    
    circles: function(){
      var circles = new Circles();
      this.content.html( circles.el );
    },
    
    polygons: function(){
      var polygons = new Polygons();
      this.content.html( polygons.el );
    }
    
  });
  
  return Router;
  
});