define([
  "demos/grid/views/paneView",
  "graphics/components/grid"
], function( PaneView, Grid ){
  
  var MainView = Backbone.View.extend({
    
    initialize: function(){
      _.bindAll( this );
      this.canvas = this.createCanvas();
      this.context = this.canvas.getContext("2d");
      this.grid
      this.gridModel = new Backbone.Model();
      this.gridModel.set({
        "width": window.innerWidth,
        "height": window.innerHeight,
        "stepx": 15,
        "stepy": 15,
        "color": 'darkgray'
      });
      //views
      this.paneview;
      //graphics
      this.grid;
      this.grid = new Grid( { width: window.innerWidth, height: window.innerHeight } );
      //html
      this.paneview = new PaneView({ model: this.gridModel });
      $(this.paneview).on( "update", this.render );
      $(this.paneview).on( "clear", this.clear );
      this.$el.append( this.paneview.render() );
      this.$el.append( this.canvas );
      //render the canavs
      this.render();
      this.gridModel.on("change:stepx",this.render );
      this.gridModel.on("change:stepy",this.render );
    },
    
    canvas: undefined,
  
    context: undefined,
  
    render: function(){
      var canvas;
      var stepx, stepy;
      stepx = this.gridModel.get( "stepx" ) || 15;
      stepy = this.gridModel.get( "stepy" ) || 15;
      this.grid.drawGrid({
        width: window.innerWidth,
        height: window.innerHeight,
        stepx: stepx,
        stepy: stepy
      });
      this.copy( this.grid.canvas, this.canvas );
    },
    
    clear: function( e ){
      this.canvas.getContext("2d").clearRect( 0, 0, this.canvas.width, this.canvas.height );
    },
    
    /* from, to - canvas */
    copy: function( from, to ){
      var context;
      context = to.getContext('2d');
      context.drawImage( from, 0, 0 );
    },
    
    createCanvas: function(){
      var canvas;
      canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      return canvas;
    }
  
  });
  
  return MainView;
  
});