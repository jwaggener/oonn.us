describe( 'invert', function(){
  
  var Canvas;
  var Invert;
  
  beforeEach( function(){
    Canvas = window.Canvas;
    Invert = window.Invert;
  });
  
  it( "inverts the colors in an image. If an image is passed in to the Canvas constructor, that data is used. Otherwise, an image or canvas can be passed to invert()", function(){
    var canvas, image;
    var inverted;
    canvas = new Canvas();
    image = document.getElementById("cat");
    canvas.invert = Invert;
    inverted = canvas.invert( image );
    expect(inverted.getContext).toBeDefined();
    document.getElementById("stuff").appendChild( inverted );
    
    /* passing the image to the new canvas object's constructor */
    canvas = new Canvas( image );
    canvas.invert = Invert;
    inverted = canvas.invert();
    expect(inverted.getContext).toBeDefined();
    document.getElementById("stuff").appendChild( inverted );
    
  });
  
})