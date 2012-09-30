/*
  a singleton class dealing with converting from different color spaces
*/
define([], function(){
  
  var instance;
  
  function init(){
    
    /* hue saturation lightness to red green blue */
    /* takes the arguments hue saturation lightness and returns an object */
    /* { r:, g:, b: } */
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
  	  
  	  var r, g, b;
  	  var rgb;
		  var $var_1, $var_2;
		  
		  //convert this back to RGB ex. 0.5, 1, .8
		  var $var_1, $var_2
  		if (s == 0){
  			r = l * 255;
  			g = l * 255;
  			b = l * 255;
  		}else{
  			if (l < 0.5){
  				$var_2 = l * (1 + s);
  			}else{
  				$var_2 = (l + s) - (s * l);
  			};

  			$var_1 = 2 * l - $var_2;
  			r = 255 * Utilities.colorUtils.hue_2_rgb($var_1,$var_2,h + (1 / 3));
  			g = 255 * Utilities.colorUtils.hue_2_rgb($var_1,$var_2,h);
  			b = 255 * Utilities.colorUtils.hue_2_rgb($var_1,$var_2,h - (1 / 3));
  		};
  		
  		rgb = _hslToRgb( h, s, l );
		
  		//then back to hex
  		var rhex, ghex, bhex, rgbhex

  		rhex = Utilities.colorUtils.decimalToHex( Math.round(r),2)
  		ghex = Utilities.colorUtils.decimalToHex(Math.round(g),2)
  		bhex = Utilities.colorUtils.decimalToHex(Math.round(b),2)

  		rgbhex = rhex.toString() + ghex.toString() + bhex.toString();
		
  		return "#" + rgbhex;
  		
  	}
    
    return{
      hslToRgb : _hslToRgb,
      hslToHex : _hslToHex
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