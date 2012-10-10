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
    
    //rgbks
    /* creates an array of canvases representing red, green, blue, and black - the individual composite colors of the pixel data */
    /* returns [ <canvas>, <canvas>, <canvas>, <canvas> ]*/
    rgbks: function( img ){
      
      var canvas, context, pixels, to, toData, rgbks;
      
      /* returning an array of 4 canvas objects that contain data for r, g, b, and k */
      rgbks = [];
      
      canvas = document.createElement("canvas");
      canvas.width = img.width;
	    canvas.height = img.height;
	    context = canvas.getContext("2d");
	    context.drawImage( img, 0, 0 );
	    
	    /* a flat array is returned with all the pixel data */
	    /* the first 4 positions describe the first pixel - r g b and alpha */
	    /* the next 4 describe the second pixel and so on */
	    pixels = context.getImageData( 0, 0, img.width, img.height ).data;
	    // 4 is used to ask for 3 images: red, green, blue and
    	// black in that order.
    	for ( var rgbI = 0; rgbI < 4; rgbI++ ) {
    	  canvas = document.createElement("canvas");
    	  canvas.width  = img.width;
      	canvas.height = img.height;
      	context = canvas.getContext('2d');
      	context.drawImage( img, 0, 0 );
      	to = context.getImageData( 0, 0, img.width, img.height );
      	toData = to.data;
      	for ( var i = 0, len = pixels.length; i < len; i += 4 ) {
    			toData[i  ] = (rgbI === 0) ? pixels[i  ] : 0;
     			toData[i+1] = (rgbI === 1) ? pixels[i+1] : 0;
    			toData[i+2] = (rgbI === 2) ? pixels[i+2] : 0;
    			toData[i+3] =                pixels[i+3]    ;
    		}
    		context.putImageData( to, 0, 0 );
    		rgbks.push( canvas );
    	}
      return rgbks;
    },
    
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