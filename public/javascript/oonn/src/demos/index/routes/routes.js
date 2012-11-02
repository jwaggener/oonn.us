define([
  'demos/index/views/mainView',
  'demos/grid/views/mainView',
  'demos/cats/views/mainView',
  'demos/filters/views/mainView',
  'demos/circles/main',
  'demos/polygons/main',
  'demos/mask/main'
  ], function( MainView, Grid, Cats, Filters, Circle, Polygons, Mask ){
  
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
        
        case("circle"):
        this.circle();
        break;
        
        case("polygons"):
        this.polygons();
        break;
        
        case("mask"):
        this.mask();
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
    
    circle: function(){
      var circle = new Circle();
      this.content.html( circle.el );
    },
    
    polygons: function(){
      var polygons = new Polygons();
      this.content.html( polygons.el );
    },
    
    mask: function(){
      var mask = new Mask();
      this.content.html( mask.el );
    }
    
  });
  
  return Router;
  
});