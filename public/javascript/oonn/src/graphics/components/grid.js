define([], function(){
  
  var Grid = function( opts ){
    this.initialize.apply(this, arguments);
  }
  
  _.extend( Grid.prototype, {
    
    initialize: function(){
      this.drawGrid( arguments[0] );
    },
    
    canvas: null,
    
    getCanvas: function(){
      return this.canvas || document.createElement("canvas");
    },
    /*
      options: 
      width - of the canvas
      height - height of the canvas
      color
      lineWidth
      stepx - distance to move before drawing next x line
      stepy - distance to move before drawing next y line
    */
    drawGrid: function( opts ){
      
      opts = opts || {};
      
      var context;
      var width, height;
      var color;
      var lineWidth;
      var stepx, stepy;
      
      this.canvas = this.getCanvas();
      width = opts.width || 300;
      height = opts.height || 250;
      this.canvas.width = width;
      this.canvas.height = height;
      
      context = this.canvas.getContext("2d");
      
      context.strokeStyle = opts.color || "darkgray";
      context.lineWidth = opts.lineWidth || 0.5;
      
      stepx = +opts.stepx || 15;
      stepy = +opts.stepy || 15;
      
      context.clearRect( 0, 0, width, height );
      
      for ( var i = stepx + 0.5; i < context.canvas.width; i += stepx ){
        context.beginPath();
        context.moveTo( i, 0 );
        context.lineTo( i, context.canvas.height  );
        context.stroke();
      }

      for ( var i = stepy + 0.5; i < context.canvas.height; i += stepy ){
        context.beginPath();
        context.moveTo( 0, i );
        context.lineTo( context.canvas.width, i );
        context.stroke();
      }
      
      return this.canvas; 
    },
    
    clear: function( context ){
      context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
    }
    
  });
  
  return Grid;
  
});