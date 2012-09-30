/*
  a singleton class dealing with tonality in the HSL, Hue, Saturation, Lighness color model
*/
define([], function(){
  
  var instance;
  
  function init(){
    
    /*
    returns a random value within a range
    */
    function _randomTone( floor, ceiling ){
      return Math.random() * ( ceiling - floor ) + floor;
    }
    
    /*
    public methods
    */
    return{
      randomTone:   _randomTone,
      lightest:     _randomTone( .89, 1.0 ),
      lighter:      _randomTone( .78, .88 ),
      light:        _randomTone( .67, .77 ),
      mediumLight:  _randomTone( .56, .66 ),
      medium:       _randomTone( .45, .55 ),
      mediumDark:   _randomTone( .34, .44 ),
      dark:         _randomTone( .23, .33 ),
      darker:       _randomTone( .11, .22 ),
      darkest:      _randomTone(   0, .11 )
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