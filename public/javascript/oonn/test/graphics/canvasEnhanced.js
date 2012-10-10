describe( "canvasEnhanced", function(){
  
  var CanvasEnhanced;
  
  beforeEach( function(){
    CanvasEnhanced = window.CanvasEnhanced;
  });
  
  it( "rgbks returns an array of 4 canvases, describing r, g, b, and k", function(){
    var img = document.getElementById("cat");
    var enhanced = new CanvasEnhanced();
    var arr = enhanced.rgbks( img );
    expect(arr).toBeDefined();
    expect(arr.length).toEqual(4);
    expect(arr[0].getContext).toBeDefined();
    expect(arr[1].getContext).toBeDefined();
    expect(arr[2].getContext).toBeDefined();
    expect(arr[3].getContext).toBeDefined();
    /*attach to the DOM to take a looksee*/
    document.getElementById("stuff").appendChild( arr[0] );//testing
    document.getElementById("stuff").appendChild( arr[1] );//testing
    document.getElementById("stuff").appendChild( arr[2] );//testing
    document.getElementById("stuff").appendChild( arr[3] );//testing
  } )
  
  it("multiplies a specified channel -r, g, b, or alpha", function(){
    var img = document.getElementById("cat");
    var enhanced = new CanvasEnhanced( img );
    var c = enhanced.multiplyChannel( null, .2 );
    c = enhanced.multiplyChannel( img, null, null, [ 1, 1, .3, 1 ] );
    document.getElementById("stuff").appendChild( c );
  })

  
})