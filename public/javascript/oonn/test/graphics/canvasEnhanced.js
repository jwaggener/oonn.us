describe( "canvasEnhanced", function(){
  
  var CanvasEnhanced;
  
  beforeEach( function(){
    CanvasEnhanced = window.CanvasEnhanced;
  });
  
  it("multiplies a specified channel -r, g, b, or alpha", function(){
    var img = document.getElementById("cat");
    var enhanced = new CanvasEnhanced( img );
    var c = enhanced.multiplyChannel( null, .2 );
    c = enhanced.multiplyChannel( img, null, null, [ 1, 1, .3, 1 ] );
    document.getElementById("stuff").appendChild( c );
  })

  
})