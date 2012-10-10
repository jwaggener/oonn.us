define([
  
  ], function(){
  
    /* the usage we're going for is myCanvasObj.invert() - returns a canvas with an inverted image */
    function invert( imgOrCanvas ){
      
      var canvas, context;
      var width, height, imgData;
      var newCanvas, newContext, newImgData;
      
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
      
      //create a new canvas to return
      newCanvas = document.createElement( "canvas" );
      newCanvas.width = imgData.width;
      newCanvas.height = imgData.height;
      newContext = newCanvas.getContext("2d");
      newImgData = newContext.createImageData( imgData.width, imgData.height );
      
      // invert colors
      for (var i=0;i<imgData.data.length;i+=4){
        newImgData.data[i]=255-imgData.data[i];
        newImgData.data[i+1]=255-imgData.data[i+1];
        newImgData.data[i+2]=255-imgData.data[i+2];
        newImgData.data[i+3]=255;
      }
      
      newContext.putImageData(newImgData,0,0);
      
      //cache on our canvas wrapper class
      /*if( this.variations ){
        this.variations.invert = newCanvas;
      }*/
      
      //return the new canvas object
      //would there be an advantage to return just the image data?
      return newCanvas;
      
    }
    
    return invert;

});