define([], function(){
  
  /* returns an imageData object with adjusted colors */
  CanvasRenderingContext2D.prototype.multiplyChannels = function( x, y, w, h, rmultiplier, gmultiplier, bmultiplier, amultiplier ){
    var rm = rmultiplier || 1;
    var gm = gmultiplier || 1;
    var bm = bmultiplier || 1;
    var am = amultiplier || 1;
    var imgData, newImgData;
    imgData = this.getImageData(x, y, w, h );
    newImgData = this.createImageData( imgData );
    // multiply colors
    for (var i=0;i<imgData.data.length;i+=4){
      newImgData.data[i] = imgData.data[i] * rm;
      newImgData.data[i+1] = imgData.data[i+1] * gm;
      newImgData.data[i+2] = imgData.data[i+2] * bm;
      newImgData.data[i+3] = 255 * am;
    }
    return newImgData;
  }
  
})