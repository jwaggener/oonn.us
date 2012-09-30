/*
  a singleton class dealing with color in the HSL, Hue, Saturation, Lighness color model
*/
define([], function(){
  
  var instance;
  
  function init(){
    
    /*0.95 - 0.05*/
  	function _red( shift ){
  	  var s = shift || 0;
  		var r = ( Math.random() > .5 ) ? 1 - Math.random() * .05 : Math.random() * .05;
  		return r;
  	}
	
  	/*0.05 - 0.10*/
  	function _orange( shift ){
  		var s = shift || 0;
  		return ( ( Math.random() * ( .10 - .06 ) ) + .06 + s );
  	}
	
  	/*0.10 - 0.18*/
  	function _yellow( shift ){
  		var s = shift || 0;
  		return ( ( Math.random() * ( .18 - .10 ) ) + .10 + s);
  	}
	
  	/*0.18 - 0.48*/
  	function _green( shift ){
  		var s = shift || 0;
  		return ( ( Math.random() * ( .44 - .18 ) ) + .18 + s);
  	}
	
  	/*0.49 - 0.72*/
  	function _blue( shift ){
  		var s = shift || 0;
  		return ( ( Math.random() * ( .72 - .49 ) ) + .49 + s );
  	}
	
  	/*0.73 - 0.80*/
  	function _indigo( shift ){
  		var s = shift || 0;
  		return ( ( Math.random() * ( .80 - .73 ) ) + .73 + s);
  	}
	
  	/*0.80 - 0.95*/
  	function _violet( shift ){
  		var s = shift || 0;
  		return ( ( Math.random() * ( .95 - .80 ) ) + .80 + s);
  	}
    
    /*
    public methods
    */
    return{
      red:      _red,
      orange:   _orange,
      yellow:   _yellow,
      green:    _green,
      blue:     _blue,
      indigo:   _indigo,
      violet:   _violet
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
  
});