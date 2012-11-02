describe("grayscale", function(){
  
  it("should return dithered monochrome of the img (Bill Atkinson's dithering algorithm)",function(){
    
    var img, canvas, context, imgData;
    img = document.getElementById("cat");
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.drawImage( img, 0, 0 );
    imgData = context.monochrome( 0, 0, img.width, img.height, 129 );
    expect(imgData).toBeDefined();
    expect(imgData.data).toBeDefined();
    
    /* write rgbk out to canvas elements in the browser */
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.putImageData( imgData, 0, 0 );
    document.getElementById("stuff").appendChild( canvas );//testing
    
  });
  
  it("should return dithered monochrome of the img (Bayer's dithering algorithm)",function(){
    
    var img, canvas, context, imgData;
    img = document.getElementById("cat");
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.drawImage( img, 0, 0 );
    imgData = context.monochrome( 0, 0, img.width, img.height, 129, 'bayer' );
    expect(imgData).toBeDefined();
    expect(imgData.data).toBeDefined();
    
    /* write rgbk out to canvas elements in the browser */
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.putImageData( imgData, 0, 0 );
    document.getElementById("stuff").appendChild( canvas );//testing
    
  });
  
  it("should return dithered monochrome of the img (floydsteinberg's dithering algorithm)",function(){
    
    var img, canvas, context, imgData;
    img = document.getElementById("cat");
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.drawImage( img, 0, 0 );
    imgData = context.monochrome( 0, 0, img.width, img.height, 129, 'floydsteinberg' );
    expect(imgData).toBeDefined();
    expect(imgData.data).toBeDefined();
    
    /* write rgbk out to canvas elements in the browser */
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.putImageData( imgData, 0, 0 );
    document.getElementById("stuff").appendChild( canvas );//testing
    
  });
  
});