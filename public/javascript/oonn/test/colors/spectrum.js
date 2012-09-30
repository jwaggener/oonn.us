describe('spectrum', function() {
  
  var spectrum;
  
  beforeEach(function() {
    spectrum = window.spectrum;
  });
  
  it( "Red should return a value from 0.95 - 1.0. , 0.0 - 0.05", function(){
    var val, bool;
    val = spectrum.red();
    bool = ( val > 0 && val < .05 ) || ( val > .95 && val < 1 );
    expect( bool ).toBeTruthy();
  });
  
  it( "Orange should return a value from 0.05 - 0.10", function(){
    var val, bool;
    val = spectrum.orange();
    bool = ( val > 0.05 && val < .1 );
    expect( bool ).toBeTruthy();
  });
  
  it( "Yellow should return a value from 0.1 - 0.18", function(){
    var val, bool;
    val = spectrum.yellow();
    bool = ( val > 0.1 && val < .18 );
    expect( bool ).toBeTruthy();
  });
  
  it( "Green should return a value from 0.18 - 0.48", function(){
    var val, bool;
    val = spectrum.green();
    bool = ( val > 0.18 && val < .48 );
    expect( bool ).toBeTruthy();
  });
  
  it( "Blue should return a value from 0.49 - 0.72", function(){
    var val, bool;
    val = spectrum.blue();
    bool = ( val > 0.49 && val < .72 );
    expect( bool ).toBeTruthy();
  });
  
  it( "Indigo should return a value from 0.73 - 0.8", function(){
    var val, bool;
    val = spectrum.indigo();
    bool = ( val > 0.73 && val < .8 );
    expect( bool ).toBeTruthy();
  });
  
  it( "Violet should return a value from 0.8 - .95", function(){
    var val, bool;
    val = spectrum.violet();
    bool = ( val > 0.8 && val < .95 );
    expect( bool ).toBeTruthy();
  });

});