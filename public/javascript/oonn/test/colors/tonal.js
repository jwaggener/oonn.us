describe('tonal', function() {
  
  var tonal;
  
  beforeEach(function() {
    tonal = window.tonal;
    console.log( "in beforeEach window.tonal",  window.tonal );
    console.log( "window.tonal",  window.tonal );
  });
  
  it( "a Spec", function(){
    console.log( "tonal.dark", tonal.dark );
    console.log( "here we are in a spec" );
  } )
  
  
});