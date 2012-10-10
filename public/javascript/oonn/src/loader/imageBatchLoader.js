define([], function(){
  
  var ImagesLoader = function(){
    this.initialize.apply(this, arguments);
  }
  
  _.extend( ImagesLoader.prototype, {
    
    initialize: function( arrOfUris ){
      this.queue = arrOfUris;
      this.images = [];
      this.loadImages( this.queue );
    },
    
    loadImages: function( arrOfUris ){
      var img;
      var i;
      for( i=0; i<arrOfUris.length; i++ ){
        img = new Image();
        img.onload = this.imageLoaded;
        this.images.push( img )
        img.src = arrOfUris[i];
      }
    },
    
    loadImage: function( ){},
    
    imageLoaded: function( e ){},
    
    checkStatus: function(){}
    
  });
  
  return ImagesLoader;
  
})