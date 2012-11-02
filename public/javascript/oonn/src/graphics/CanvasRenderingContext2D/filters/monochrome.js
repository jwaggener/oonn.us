define([],function(){
  
  /* returns an imageData object with dithered monochrome */
  /* http://stackoverflow.com/questions/12422407/bayer-ordered-dithering-halftone-algorithm-image-processing-matrix-operations */
  /* http://www.visgraf.impa.br/Courses/ip00/proj/Dithering1/ordered_dithering.html */
  /* http://en.wikipedia.org/wiki/List_of_monochrome_and_RGB_palettes */
  CanvasRenderingContext2D.prototype.monochrome = function( x, y, w, h, threshold, type ){

    var imageData, imageDataLength, newImageData;
    var bayerThresholdMap;
    var lumR, lumG, lumB;
    var w;
    var newPixel, err;

    imageData = this.getImageData(x, y, w, h );
    newImageData = this.createImageData( imageData );
    
    bayerThresholdMap = [
      [  15, 135,  45, 165 ],
      [ 195,  75, 225, 105 ],
      [  60, 180,  30, 150 ],
      [ 240, 120, 210,  90 ]
    ];
    
    lumR = [];
    lumG = [];
    lumB = [];
    for (var i=0; i<256; i++) {
      lumR[i] = i*0.299;
      lumG[i] = i*0.587;
      lumB[i] = i*0.114;
    }
    
    imageDataLength = imageData.data.length;
    
    // Greyscale luminance (sets r pixels to luminance of rgb)
    for (var i = 0; i <= imageDataLength; i += 4) {
      imageData.data[i] = Math.floor(lumR[imageData.data[i]] + lumG[imageData.data[i+1]] + lumB[imageData.data[i+2]]);
    }
    
    w = imageData.width;

    for (var currentPixel = 0; currentPixel <= imageDataLength; currentPixel+=4) {

      if (type === "none") {
        // No dithering
        imageData.data[currentPixel] = imageData.data[currentPixel] < threshold ? 0 : 255;
      } else if (type === "bayer") {
        // 4x4 Bayer ordered dithering algorithm
        var x = currentPixel/4 % w;
        var y = Math.floor(currentPixel/4 / w);
        var map = Math.floor( (imageData.data[currentPixel] + bayerThresholdMap[x%4][y%4]) / 2 );
        imageData.data[currentPixel] = (map < threshold) ? 0 : 255;
      } else if (type === "floydsteinberg") {
        // Floyd–Steinberg dithering algorithm
        newPixel = imageData.data[currentPixel] < 129 ? 0 : 255;
        err = Math.floor((imageData.data[currentPixel] - newPixel) / 16);
        imageData.data[currentPixel] = newPixel;

        imageData.data[currentPixel       + 4 ] += err*7;
        imageData.data[currentPixel + 4*w - 4 ] += err*3;
        imageData.data[currentPixel + 4*w     ] += err*5;
        imageData.data[currentPixel + 4*w + 4 ] += err*1;
      } else {
        // Bill Atkinson's dithering algorithm
        newPixel = imageData.data[currentPixel] < threshold ? 0 : 255;
        err = Math.floor((imageData.data[currentPixel] - newPixel) / 8);
        imageData.data[currentPixel] = newPixel;

        imageData.data[currentPixel       + 4 ] += err;
        imageData.data[currentPixel       + 8 ] += err;
        imageData.data[currentPixel + 4*w - 4 ] += err;
        imageData.data[currentPixel + 4*w     ] += err;
        imageData.data[currentPixel + 4*w + 4 ] += err;
        imageData.data[currentPixel + 8*w     ] += err;
      }

      // Set g and b pixels equal to r
      imageData.data[currentPixel + 1] = imageData.data[currentPixel + 2] = imageData.data[currentPixel];
    }
    
    this.monochromeData = imageData;//cacheing
    return this.monochromeData;
    
  }
  
});
/*var bayerThresholdMap = [
  [  15, 135,  45, 165 ],
  [ 195,  75, 225, 105 ],
  [  60, 180,  30, 150 ],
  [ 240, 120, 210,  90 ]
];

var lumR = [];
var lumG = [];
var lumB = [];
for (var i=0; i<256; i++) {
  lumR[i] = i*0.299;
  lumG[i] = i*0.587;
  lumB[i] = i*0.114;
}

function monochrome(imageData, threshold, type){

  var imageDataLength = imageData.data.length;

  // Greyscale luminance (sets r pixels to luminance of rgb)
  for (var i = 0; i <= imageDataLength; i += 4) {
    imageData.data[i] = Math.floor(lumR[imageData.data[i]] + lumG[imageData.data[i+1]] + lumB[imageData.data[i+2]]);
  }

  var w = imageData.width;
  var newPixel, err;

  for (var currentPixel = 0; currentPixel <= imageDataLength; currentPixel+=4) {

    if (type === "none") {
      // No dithering
      imageData.data[currentPixel] = imageData.data[currentPixel] < threshold ? 0 : 255;
    } else if (type === "bayer") {
      // 4x4 Bayer ordered dithering algorithm
      var x = currentPixel/4 % w;
      var y = Math.floor(currentPixel/4 / w);
      var map = Math.floor( (imageData.data[currentPixel] + bayerThresholdMap[x%4][y%4]) / 2 );
      imageData.data[currentPixel] = (map < threshold) ? 0 : 255;
    } else if (type === "floydsteinberg") {
      // Floyd–Steinberg dithering algorithm
      newPixel = imageData.data[currentPixel] < 129 ? 0 : 255;
      err = Math.floor((imageData.data[currentPixel] - newPixel) / 16);
      imageData.data[currentPixel] = newPixel;

      imageData.data[currentPixel       + 4 ] += err*7;
      imageData.data[currentPixel + 4*w - 4 ] += err*3;
      imageData.data[currentPixel + 4*w     ] += err*5;
      imageData.data[currentPixel + 4*w + 4 ] += err*1;
    } else {
      // Bill Atkinson's dithering algorithm
      newPixel = imageData.data[currentPixel] < threshold ? 0 : 255;
      err = Math.floor((imageData.data[currentPixel] - newPixel) / 8);
      imageData.data[currentPixel] = newPixel;

      imageData.data[currentPixel       + 4 ] += err;
      imageData.data[currentPixel       + 8 ] += err;
      imageData.data[currentPixel + 4*w - 4 ] += err;
      imageData.data[currentPixel + 4*w     ] += err;
      imageData.data[currentPixel + 4*w + 4 ] += err;
      imageData.data[currentPixel + 8*w     ] += err;
    }

    // Set g and b pixels equal to r
    imageData.data[currentPixel + 1] = imageData.data[currentPixel + 2] = imageData.data[currentPixel];
  }

  return imageData;
}*/