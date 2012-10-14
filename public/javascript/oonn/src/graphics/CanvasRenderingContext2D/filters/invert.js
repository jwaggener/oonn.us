define([], function(){
  
  /* returns an imageData object with inverted colors */
  CanvasRenderingContext2D.prototype.invertColors = function( x, y, w, h ){
    
    var imgData, newImgData;

    imgData = this.getImageData(x, y, w, h );
    newImgData = this.createImageData( imgData );
    
    // invert colors
    for (var i=0;i<imgData.data.length;i+=4){
      newImgData.data[i]=255-imgData.data[i];
      newImgData.data[i+1]=255-imgData.data[i+1];
      newImgData.data[i+2]=255-imgData.data[i+2];
      newImgData.data[i+3]=255;
    }
    this.invertedColors = newImgData;
    return this.invertedColors;
  }
  
})