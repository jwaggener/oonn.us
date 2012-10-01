/*
  a singleton class dealing with converting from different color spaces
*/
define([], function(){
  
  var instance;
  
  function init(){
    
    /* hue saturation lightness to red green blue */
    /* takes the arguments hue saturation lightness and returns an object */
    /* returns { r:, g:, b: } */
  	function _hslToRgb (h, s, l){
  	    var r, g, b;

  	    if(s == 0){
  	        r = g = b = l; // achromatic
  	    }else{
  	        function hue2rgb(p, q, t){
  	            if(t < 0) t += 1;
  	            if(t > 1) t -= 1;
  	            if(t < 1/6) return p + (q - p) * 6 * t;
  	            if(t < 1/2) return q;
  	            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  	            return p;
  	        }

  	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  	        var p = 2 * l - q;
  	        r = hue2rgb(p, q, h + 1/3);
  	        g = hue2rgb(p, q, h);
  	        b = hue2rgb(p, q, h - 1/3);
  	    }

  	    return { r: r * 1.0, g: g * 1.0, b: b * 1.0 };
  	}
  	
  	/* hue saturation lightness to a hex number */
  	/* hue saturation lightness to #nnnnnn */
  	function _hslToHex( h, s, l ){
  	  var rgb;
  	  //convert to rgb
  		rgb = _hslToRgb( h, s, l );
  		//convert to hex
		  return _rgbToHex( rgb.r, rgb.g, rgb.b );// {r: , g: , b: }
  	}
  	
  	/* takes r g b */
  	/* returns #nnnnnn */
  	function _rgbToHex( r, g, b ){
  	  var rhex, ghex, bhex, rgbhex;
  	  rhex = _decimalToHex( Math.round(r),2);
  		ghex = _decimalToHex(Math.round(g),2);
  		bhex = _decimalToHex(Math.round(b),2);
  		rgbhex = rhex.toString() + ghex.toString() + bhex.toString();
  		return "#" + rgbhex;//return a string #nnnnnn
  	}
  	
  	/* takes a string hex value #000000 */
  	/* returns a hash { r: red, g: green, b: blue }*/
  	function _hexToRgb( hex ){
  	  hex = ( hex.charAt(0) == "#" ) ? hex.substring(1,7) : hex;
  	  var rgb = { r : null, g : null, b : null };
  	  rgb.r = parseInt( hex.substring( 0, 2 ), 16 );
			rgb.g = parseInt( hex.substring( 2, 4 ), 16 );
			rgb.b = parseInt( hex.substring( 4, 6 ), 16 );
			return rgb;
  	}
  	
  	/* takes ( r, g, b ) */
  	/* returns - { hue: , saturation: , lightness: } */
  	function _rgbToHsl( r, g, b ){
  	  var min, max, delMax;
  	  var del_r, del_g, del_b;
  	  var h, s, l;
  	  
  	  min = Math.min(r,g,b);
  		max = Math.max(r,g,b);
  		delMax = max - min;
  		
  		l = (max + min) / 2;
  		
  		if (max == 0){
  			h = 0;
  			s = 0;
  		}else{
  			if ( l < 0.5 ){
  				s = delMax / (max + min);
  			}else{
  				s = delMax / (2 - max - min);
  			};

  			del_r = (((max - r) / 6) + (delMax / 2)) / delMax;
  			del_g = (((max - g) / 6) + (delMax / 2)) / delMax;
  			del_b = (((max - b) / 6) + (delMax / 2)) / delMax;

  			if (r == max){
  				h = del_b - del_g;
  			}else if (g == max){
  				h = (1 / 3) + del_r - del_b;
  			}else if (b == max){
  				h = (2 / 3) + del_g - del_r;
  			};
  			if (h < 0){
  				h += 1;
  			};
  			if (h > 1){
  				h -= 1;
  			};
  		};
  		
  		return { hue: h , saturation: s , lightness: l }; //{ hue: 1, saturation: .5 , lightness: .5 } for example
  	}
  	
  	/* takes a string like this rgb(255,0,0) */
  	/* returns a hash { r: red, g: green, b: blue } */
  	function _rgbShorthandToRgbHash( str ){
  	  var digits, rgb;
  	  digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec( str );
  	  rgb = { r: parseInt(digits[2]), g: parseInt(digits[3]), b: parseInt(digits[4]) }
			return rgb;
  	}
  	
  	/* Utility */
  	/* uses the JavaaScript toString(16) function for conversion*/
  	/* in addtition it adds padding and returns a string of length 2*/
  	function _decimalToHex( num, padding ){
  	  var hex = Number(num).toString(16);
	    padding = padding || 2;
	    while (hex.length < padding) {
	        hex = "0" + hex;
	    }
	    return hex;
  	}
    
    return{
      hslToRgb : _hslToRgb, // takes ( hue(0-1), saturation(0-1), lightness(0-1) ) returns { r: red (0-255), g: green (0-255), b: blue(0-255) }
      hslToHex : _hslToHex, //  takes ( hue(0-1), saturation(0-1), lightness(0-1) ) returns #nnnnnn
      rgbToHex : _rgbToHex, //  takes ( r(0-255), g(0-255), b(0-255) ) returns #nnnnnn
      rgbToHsl : _rgbToHsl, // takes ( r(0-255), g(0-255), b(0-255) ) returns { hue(0-1), saturation(0-1), lightness(0-1) }
      hexToRgb : _hexToRgb, // takes a string hex value #000000 returns { r: red(0-255), g: green(0-255), b: blue(0-255) }
      rgbShorthandToRgbHash: _rgbShorthandToRgbHash // takes a string rgb(255,0,0) returns { r: red(0-255), g: green(0-255), b: blue(0-255) }
    }
  }
  
  return{
    getInstance: function(){
      if( !instance ){
        instance = init();
      }
      return instance;
    }
  }
  
})