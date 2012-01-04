jQuery.fn.onImagesLoaded = function(_cb) { 
  return this.each(function() {
 
    var $imgs = (this.tagName.toLowerCase()==='img')?$(this):$('img',this),
        _cont = this,
            i = 0,
    _done=function() {
      if( typeof _cb === 'function' ) _cb(_cont);
    };
 
    if( $imgs.length ) {
      $imgs.each(function() {
        var _img = this,
        _checki=function(e) {
          if((_img.complete) || (_img.readyState=='complete'&&e.type=='readystatechange') )
          {
            if( ++i===$imgs.length ) _done();
          }
          else if( _img.readyState === undefined ) // dont for IE
          {
            $(_img).attr('src',$(_img).attr('src')); // re-fire load event
          }
        }; // _checki \\
 
        $(_img).bind('load readystatechange', function(e){_checki(e);});
        _checki({type:'readystatechange'}); // bind to 'load' event...
      });
    } else _done();
  });
};