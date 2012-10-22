define([
  'graphics/CanvasRenderingContext2D/multiplyChannels',//extending CanvasRenderingContext2D
  'graphics/CanvasRenderingContext2D/filters/grayscale',//extending CanvasRenderingContext2D
  'graphics/CanvasRenderingContext2D/filters/invert'//extending CanvasRenderingContext2D
  ], function(){
  
  var MainView = Backbone.View.extend({
    
    initialize: function(){
      _.bindAll( this );
      this.canvas = this.createCanvas();
      this.image = new Image;
      this.image.onload = this.handleOnload;
      this.image.src = '/javascript/oonn/src/demos/filters/' + 'resources/cat.jpg';
    },

    render: function(){
      
      this.original, this.b_w, this.multiplyChannel, this.invert;
      this.r, this.b, this.g;
      var context;
      var imgdata;
      
      this.original = this.createCanvas();
      this.original.width = this.image.width; this.original.height = this.image.height;
      context = this.original.getContext("2d");
      context.drawImage( this.image, 0, 0 );
      
      this.b_w = this.createCanvas();
      this.b_w.width = this.image.width; this.b_w.height = this.image.height;
      imgdata = context.grayscale( 0, 0, this.image.width, this.image.height );
      this.b_w.getContext("2d").putImageData( imgdata, 0, 0 );
      
      this.multiplyChannel = this.createCanvas();
      this.multiplyChannel.width = this.image.width; this.multiplyChannel.height = this.image.height;
      imgdata = context.multiplyChannels( 0, 0, this.image.width, this.image.height, 1, 2, .3, .3 );
      this.multiplyChannel.getContext("2d").putImageData( imgdata, 0, 0 );
      
      this.invert = this.createCanvas();
      this.invert.width = this.image.width; this.invert.height = this.image.height;
      imgdata = context.invertColors( 0, 0, this.image.width, this.image.height );
      this.invert.getContext("2d").putImageData( imgdata, 0, 0 );
      
      this.$el.append( this.original );
      this.$el.append( this.b_w );
      this.$el.append( this.multiplyChannel );
      this.$el.append( this.invert );
      
    },
    
    createCanvas: function(){
      return document.createElement('canvas');
    },
    
    handleOnload: function( e ){
      this.render();
    }
    
  });
  
  return MainView;
  
})