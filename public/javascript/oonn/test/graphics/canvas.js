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
  
})