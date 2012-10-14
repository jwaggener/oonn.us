/* provides access to manipulated data in the canvas */
/* works with images to get pixel data */
/* documentation on getting pixel data */
/* http://www.w3schools.com/html5/canvas_getimagedata.asp */
define([
  "graphics/canvas"
  ], function( Canvas ){
  
  var CanvasEnhanced = Canvas.extend({
    
  });
  
  _.extend( CanvasEnhanced.prototype, {
    
    /* if you are going to adjust a channel */
    /* it should be on the basis of mean set of data - or the original set of data */
    /* */
    adjustChannel: function( img, channel, val, target ){
      
      var canvas, context, imgData, toData;
      
      canvas = this.canvas; //document.createElement("canvas");
      canvas.width = img.width;
	    canvas.height = img.height;
	    context = canvas.getContext("2d");
	    context.drawImage( img, 0, 0 );
	    
	    imgData = context.getImageData( 0, 0, img.width, img.height );
	    toData = context.getImageData( 0, 0, img.width, img.height );//output
      
      // invert colors
      for (var i=0;i<imgData.data.length;i+=4){
        //imgData.data[i+channel]=val;
        toData.data[i]=imgData.data[i];
        toData.data[i+1]=imgData.data[i+1];
        toData.data[i+2]=imgData.data[i+2];
        toData.data[i+3]=255;
      }
      context.putImageData(toData,0,0);
      return canvas;
      
    }
    
  });
  
  return CanvasEnhanced;
  
} )