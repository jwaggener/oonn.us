define([], function(){
  
  /* returns an array of 4 objects containing imgData for r, g, b, an k */
  CanvasRenderingContext2D.prototype.getRGBKs = function( x, y, w, h ){
    
    /* an array of 4 objects containing imgData for r, g, b, an k */
    this.rgbks = [];
    
    var pixels, imgData;
    pixels = this.getImageData( x, y, w, h ).data;
    
    for ( var rgbI = 0; rgbI < 4; rgbI++ ) {
      
      imgData = this.createImageData( this.getImageData( x, y, w, h ) );
      
      for ( var i = 0, len = pixels.length; i < len; i += 4 ) {
  			imgData.data[i  ] = (rgbI === 0) ? pixels[i  ] : 0;
   			imgData.data[i+1] = (rgbI === 1) ? pixels[i+1] : 0;
  			imgData.data[i+2] = (rgbI === 2) ? pixels[i+2] : 0;
  			imgData.data[i+3] =                pixels[i+3]    ;
  		}
  		
  		this.rgbks[ rgbI ] = imgData;
  		
    }
    
    return this.rgbks;
    
  }
  
})