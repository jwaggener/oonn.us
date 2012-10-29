define([
  'graphics/CanvasRenderingContext2D/rgbks',//extending CanvasRenderingContext2D
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
      this.rgbks, this.r, this.b, this.g, this.k;
      var context;
      var imgdata;
      var arr, rgbkcontext;
      
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
      
      this.rgbks = this.createCanvas();
      this.rgbks.width = this.image.width; this.rgbks.height = this.image.height;
      arr = context.getRGBKs( 0, 0, this.image.width, this.image.height );
      
      this.r = this.createCanvas();
      this.r.width = this.image.width; this.r.height = this.image.height;
      rgbkcontext = this.r.getContext('2d');
      rgbkcontext.putImageData( arr[0], 0, 0 );
      
      this.g = this.createCanvas();
      this.g.width = this.image.width; this.g.height = this.image.height;
      rgbkcontext = this.g.getContext('2d');
      rgbkcontext.putImageData( arr[1], 0, 0 );
      
      this.b = this.createCanvas();
      this.b.width = this.image.width; this.b.height = this.image.height;
      rgbkcontext = this.b.getContext('2d');
      rgbkcontext.putImageData( arr[2], 0, 0 );
      
      this.k = this.createCanvas();
      this.k.width = this.image.width; this.k.height = this.image.height;
      rgbkcontext = this.k.getContext('2d');
      rgbkcontext.putImageData( arr[3], 0, 0 );
      
      this.$el.append( this.original );
      this.$el.append( this.b_w );
      this.$el.append( this.multiplyChannel );
      this.$el.append( this.invert );
      this.$el.append( this.r );
      this.$el.append( this.g );
      this.$el.append( this.b );
      this.$el.append( this.k );
      
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