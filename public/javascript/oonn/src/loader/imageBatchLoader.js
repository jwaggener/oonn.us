define([], function(){
  
  var ImagesLoader = function( arrOfUris ){
    this.initialize.apply(this, arguments);
  }
  
  _.extend( ImagesLoader.prototype, {
    
    initialize: function( arrOfUris ){
      _.bindAll( this );
      this.images = [];
      this.loaded = 0; //integer that indicates how many have loaded
      if( arrOfUris ){
        this.loadImages( this.queue );
      }
      
    },
    
    loadImages: function( arrOfUris ){
      this.queue = arrOfUris;
      this.loaded = 0; //integer that indicates how many have loaded
      var img;
      var i;
      for( i=0; i<arrOfUris.length; i++ ){
        img = new Image();
        img.onload = this.imageLoaded;
        img.onerror = this.imageLoaded;
        this.images.push( img )
        img.src = arrOfUris[i];
      }
    },
    
    imageLoaded: function( e ){
      this.loaded++;
      this.batchloaded();
    },
    
    batchloaded: function(){
      if( this.loaded == this.queue.length ){
        $(this).trigger( "complete" );
      }
    },
    
    onerror: function( e ){
      this.loaded++;
      this.batchloaded();
    },
    
    checkStatus: function(){
      return this.loaded/this.queue.length;
    },
    
    /* retrieves a file by its name cat01.jpg for example. In the case of multiples, retrieves the first */
    retriveBySrc: function( src ){
      return _.find( this.images, function( img ){ return  img.src === src } )
    },
    
    /* retrieves a file by its name cat01.jpg for example. In the case of multiples, retrieves the first */
    retriveByFileName: function( name ){
      return _.find( this.images, function( img ){ var src = img.src; var strs = src.split("/"); return  strs[strs.length-1] === name } )
    }
    
  });
  
  return ImagesLoader;
  
})