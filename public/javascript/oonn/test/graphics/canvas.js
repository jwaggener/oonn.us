describe( 'canvas', function(){
  
  var Canvas;
  
  beforeEach(function(){
    Canvas = window.Canvas;
  })
  
  it( "an instance of a canvas object should have a property named canvas", function(){
    var canvas = new Canvas();
    expect(canvas.canvas).toBeDefined();
    expect( canvas.canvas.getContext ).toBeDefined();
  });
  
  it( "if an image or a canvas is passed, the image data should be stored in the var, origImgData", function(){
    var c = document.createElement("canvas");
    var canvas = new Canvas( c );
    expect(canvas.origImgData).toBeDefined();
  });
  
})