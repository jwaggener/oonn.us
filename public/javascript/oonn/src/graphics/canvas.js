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
      }
      
    }); 
    
    return Canvas;
    
});