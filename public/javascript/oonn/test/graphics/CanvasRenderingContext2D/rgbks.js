describe( "CanvasRenderingContext2D.js", function(){
  
  var CanvasRenderingContext2D;
  
  it( "rgbks returns an array of 4 imgDatas, describing r, g, b, and k", function(){
    var img, canvas, context, arr;
    img = document.getElementById("cat");
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.drawImage( img, 0, 0 );
    arr = context.getRGBKs( 0, 0, img.width, img.height );
    expect(arr[0]).toBeDefined();
    expect(arr[0].data).toBeDefined();
    expect(arr[1]).toBeDefined();
    expect(arr[1].data).toBeDefined();
    expect(arr[2]).toBeDefined();
    expect(arr[2].data).toBeDefined();
    expect(arr[3]).toBeDefined();
    expect(arr[3].data).toBeDefined();
    
    /* write rgbk out to canvas elements in the browser */
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.putImageData( arr[0], 0, 0 );
    document.getElementById("stuff").appendChild( canvas );//testing
    
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.putImageData( arr[1], 0, 0 );
    document.getElementById("stuff").appendChild( canvas );//testing
    
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.putImageData( arr[2], 0, 0 );
    document.getElementById("stuff").appendChild( canvas );//testing
    
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    context = canvas.getContext("2d");
    context.putImageData( arr[3], 0, 0 );
    document.getElementById("stuff").appendChild( canvas );//testing
    
  });
  
})