describe( "canvasEnhanced", function(){
  
  var CanvasEnhanced;
  var cur = 255;
  var interval = -1;
  var target;
  
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
    /*document.getElementById("stuff").appendChild( arr[0] );//testing
    document.getElementById("stuff").appendChild( arr[1] );//testing
    document.getElementById("stuff").appendChild( arr[2] );//testing
    document.getElementById("stuff").appendChild( arr[3] );//testing*/
  } )
  
  it("inverts the colors in an image", function(){
    var img = document.getElementById("cat");
    var enhanced = new CanvasEnhanced();
    var c = enhanced.invert( img, 0, 10 );
    console.log( "enhancedSet", enhancedSet );
    window.setInterval( enhancedSet, 10 );
    document.getElementById("stuff").appendChild( c );
  })
  
  var enhancedSet = function(){
    console.log( "enhanced", enhanced );
    var img = document.getElementById("cat");
    var enhanced = new CanvasEnhanced();
    var c = enhanced.invert( img, 3, cur, target );
    if( target == undefined ){ target = c; }
    cur = cur + interval;
    if( c ) { document.getElementById("stuff").appendChild( c ) };
  }
  
})