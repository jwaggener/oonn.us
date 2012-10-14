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
      
    },
    
    /* applies a multiplier to a channel; so red might be red value * 2 */
    /* if no channel is supplied, the multiplier applies to all channels */
    /* channelsMultipliers is an array with a multiplier for each channel [ 1, 1, 1, 1 ] */
    multiplyChannel: function( img, multiplier, channel, channelsMultipliers  ){
      
      var canvas, context;
      var width, height, imgData;
      var newCanvas, newContext, newImgData;
      var rgba;//multipliers for each channel
      
      multiplier = multiplier || 1;
      rgba = ( channel ) ? [ 1, 1, 1, 1 ] : [ multiplier, multiplier, multiplier, multiplier ];
      if( channel ){ rgba[ channel ] = multiplier; }
      if( channelsMultipliers ){ rgba = channelsMultipliers }
      
      imgData = this.getImgData( img );
      
      //create a new canvas to return
      newCanvas = document.createElement( "canvas" );
      newCanvas.width = imgData.width;
      newCanvas.height = imgData.height;
      newContext = newCanvas.getContext("2d");
      newImgData = newContext.createImageData( imgData.width, imgData.height );
      
      // invert colors
      for (var i=0;i<imgData.data.length;i+=4){
        newImgData.data[i]=imgData.data[i] * rgba[0];
        newImgData.data[i+1]=imgData.data[i+1] * rgba[1];
        newImgData.data[i+2]=imgData.data[i+2] * rgba[2];
        newImgData.data[i+3]=255 * rgba[3];
        //newImgData.data[i + channel]=imgData.data[i + channel] * multiplier;
      }
      
      newContext.putImageData(newImgData,0,0);
      
      return newCanvas;
    }
    
  });
  
  return CanvasEnhanced;
  
} )