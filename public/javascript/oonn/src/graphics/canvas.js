/* a wrapper class for the HTML5 element Canvas */
/* this class can be extended */
/* has property canvas that is an instance of the HTML5 canvas */
/* a reference for the canvas */
/* http://www.w3schools.com/tags/ref_canvas.asp */
define([
  "class/class"
  ], function( Extend ){
    
    var Canvas = function( img ){
      this.initialize.apply(this, arguments);
    }
    
    Canvas.extend = Extend;// mixin classical style inheritance
    
    _.extend( Canvas.prototype, {
      
      initialize: function(){
        this.canvas = ( !( document.createElement("canvas").getContext ) ) ? undefined : document.createElement("canvas");
        /* if a canvas is inited with data from an image object, the image data is saved */
        /* image data consists of a height, a width, and an array of values - every grouping of 4 values represents the red, green, blue, and alpha values of a single pixel */
        this.origImgData;
      }
      
    }); 
    
    return Canvas;
    
});