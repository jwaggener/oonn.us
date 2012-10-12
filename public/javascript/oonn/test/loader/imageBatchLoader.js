describe( "imageBatchLoader", function(){
  
  var ImageBatchLoader;
  
  beforeEach( function(){
    ImageBatchLoader = window.ImageBatchLoader;
  });
  
  it( "should load a list of uris", function(){
    var arr = [ "cat.jpg", "cat_small.jpg", "zzz.png" ];
    var bl = new ImageBatchLoader(); 
    $(bl).bind( "complete", function(){ console.log( "loaded" ); } );
    bl.loadImages( arr );
  });
  
})