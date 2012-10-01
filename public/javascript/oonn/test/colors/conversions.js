describe('conversions', function() {
  
  var conversions;
  
  beforeEach(function() {
    conversions = window.conversions;
  });
  
  //hslToRgb
  it( "takes ( hue (0-1), saturation(0-1), lightness(0-1) ) returns { r: red(0-255), g: green(0-255), b: blue(-255) }", function(){
    var output;
    output = conversions.hslToRgb( 1, 1, 1 );
    expect(output.r).toBeDefined();
    expect(output.g).toBeDefined();
    expect(output.b).toBeDefined();
  });
  
  //hslToHex
  it( "takes ( hue(0-1), saturation(0-1), lightness(0-1) ) returns #nnnnnn", function(){
    //what would be a regex to define a hex value against?
    //output = conversions.hslToHex( 1, 1, 1 );
  });
  
  //rgbToHex
  it( "takes ( r(0-255), g(0-255), b(0-255) ) returns #nnnnnn", function(){
    //what would be a regex to define a hex value against?
    //output = conversions.rgbToHex( r, g, b );
  });
  
  //rgbToHsl
  it( "takes ( r(0-255), g(0-255), b(0-255) ) returns #nnnnnn", function(){
    //what would be a regex to define a hex value against?
    //output = conversions.rgbToHsl( r, g, b );
  });
  
  //hexToRgb
  it( "takes ( #nnnnnn ) returns { r: red(0-255), g: green(0-255), b: blue(-255) }", function(){
    //what would be a regex to define a hex value against?
    //output = conversions.hexToRgb( #nnnnnn );
  });
  
  //rgbShorthandToRgbHash
  it( "takes rgb( 0-255, 0-255, 0-255 ) returns { r: red(0-255), g: green(0-255), b: blue(-255) }", function(){
    //what would be a regex to define a hex value against?
    //output = conversions.rgbShorthandToRgbHash( rgb( 0-255, 0-255, 0-255 ) );
  });
  
})