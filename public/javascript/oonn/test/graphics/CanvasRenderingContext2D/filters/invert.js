describe( "inverts the colors of imgdata object", function(){
  
  it("should invert the colors of an imagedata object",function(){
    
    var img, canvas, context, imgData;
    img = document.getElementById("cat");
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.drawImage( img, 0, 0 );
    imgData = context.invertColors( 0, 0, img.width, img.height );
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
  
})