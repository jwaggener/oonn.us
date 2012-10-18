define([], function(){
  
  /* returns an imageData object with inverted colors */
  CanvasRenderingContext2D.prototype.grayscale = function( x, y, w, h ){
    
    var imgData, newImgData;
    var r, g, b;
    var brightness;

    imgData = this.getImageData(x, y, w, h );
    newImgData = this.createImageData( imgData );
    
    // invert colors
    for (var i=0;i<imgData.data.length;i+=4){
      r = imgData.data[i];
      g = imgData.data[i + 1];
      b = imgData.data[i + 2];
      brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      newImgData.data[i]=brightness;
      newImgData.data[i+1]=brightness;
      newImgData.data[i+2]=brightness;
      newImgData.data[i+3]=255;
    }
    this.grayscale = newImgData;
    return this.grayscale;
  }
  
})