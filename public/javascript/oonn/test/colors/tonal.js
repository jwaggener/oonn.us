describe('tonal', function() {
  
  var tonal;
  
  beforeEach(function() {
    tonal = window.tonal;
  });
  
  it( "Random Tone randomTone( flr, ceil ) - Should return a Value between Floor and Ceiling", function(){
    var flr, ceil;
    var val;
    flr = 0;
    ceil = 1;
    val = tonal.randomTone( flr, ceil );
    expect(val).toBeGreaterThan(flr);
    expect(val).toBeLessThan(ceil);
  } )
  
});