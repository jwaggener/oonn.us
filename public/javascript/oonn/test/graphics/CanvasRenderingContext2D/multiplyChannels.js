describe( "multiply channels", function(){
  
  it("should multiply the channels of an imagedata object",function(){
    
    var img, canvas, context, imgData;
    img = document.getElementById("cat");
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.drawImage( img, 0, 0 );
    imgData = context.multiplyChannels( 0, 0, img.width, img.height, 1, 2, .3, .3 );
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