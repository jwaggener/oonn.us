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
      
      initialize: function( ){
        this.canvas = ( !( document.createElement("canvas").getContext ) ) ? undefined : document.createElement("canvas");
        /* if a canvas is inited with data from an image object, the image data is saved */
        /* image data consists of a height, a width, and an array of values - every grouping of 4 values represents the red, green, blue, and alpha values of a single pixel */
        this.origImgData;
        //if the argument is a canvas
        if( arguments[0].getContext ){
          
        }
        //if it's an image
        else{
          this.canvas = document.createElement("canvas");
          this.canvas.width = arguments[0].width;
	        this.canvas.height = arguments[0].height;
	        this.context = canvas.getContext("2d");
	        this.context.drawImage( arguments[0], 0, 0 );
        }
        if( arguments[0] ){ this.setImgData( this.getImgData( arguments[0] ) ); };
        /* this is a hash that caches variations on img data. For example, if the inverse is requested, then that canvas or pixeldata is held at this.variations.inverse */
        this.variations = {};
      },
      
      /*pass an image object or canvas*/
      setImgData: function( imgData ){
        this.origImgData = imgData;
      },
      
      /* this returns the imgData referenced by this.origImgData unless an image or canvas object are passed. In that case the imgData object of that image's or canvas' 2d context is returned */
      getImgData: function( imgOrCanvas ){
        
        var imgData;
        
        //if an argument is passed, check to see if it is a canvas. If not, assume it's an image object
        //retrieve the imgData object
        if( arguments[0] ){
        
          if( imgOrCanvas.getContext ){
            imgData = imgOrCanvas.getContext("2d").getImageData( 0, 0, imgOrCanvas.width, imgOrCanvas.height );
          }else{
            canvas = document.createElement("canvas");
            canvas.width = imgOrCanvas.width;
  	        canvas.height = imgOrCanvas.height;
  	        context = canvas.getContext("2d");
  	        context.drawImage( imgOrCanvas, 0, 0 );
  	        imgData = context.getImageData( 0, 0, imgOrCanvas.width, imgOrCanvas.height );
          }
          
        }
      
        //if nothing was passed in, use the origImgData property of the wrapper Canvas class, if it is available
        if( !imgData  ){
          if( this.origImgData ){
            imgData = this.origImgData;
          }else{
            throw "This operation requires a canvas or imgData."
          }
        }
        
        return imgData;
        
      }
      
    }); 
    
    return Canvas;
    
});