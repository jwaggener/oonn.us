//singleton that provides 2 functions, addLanguage and translate
var locales = function(){
  
  var instance;

  function init(){
    var _defaultLanguage;
    var _languages;
    
    _defaultLanguage = "en-us";
    
    function _addLanguage( hash ){
      //initialize the _languages hash
      _languages = _languages || {}
      //the argument has the form { "en_us" : { "heading": "Heading" } }
      for (var locale in hash) {
        _languages[ locale ] = hash[ locale ];
		  }
    }
    
    function _translate( key, lang ){
      var language;
      var error;
      language = lang || _defaultLanguage;
      if( !_languages[ language ] ){
        error = "Language is not found."
      }
      if( !_languages[ language ][ key ] ){
        error = "Text is not found."
      }
      if( error ){
        throw error;
      }else{
        return _languages[ language ][ key ];
      }
    }
  
    return{
      addLanguage: _addLanguage,
      translate: _translate
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
  
}()