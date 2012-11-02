define([
  "demos/mask/views/paneView",
  "graphics/CanvasRenderingContext2D/filters/monochrome",
  "graphics/CanvasRenderingContext2D/filters/invert"
  ], function( PaneView ){
  
  /* mask an image */
  var Mask = Backbone.View.extend({
    
    events:{
      'mousemove': 'handleMouseMove'
    },
    
    initialize: function(){
      _.bindAll( this );
      
      this.model = new Backbone.Model();
      this.model.set( { 'radius': 300 } );
      this.model.on( 'change:radius', this.render )
      
      this.paneview = new PaneView({model: this.model});
      
      this.image = new Image();
      this.image.onload = this.imageloaded;
      this.image_bw, this.image_invert;
      this.image.src = '/javascript/oonn/src/demos/mask/resources/images/constable.jpeg'
    },
    
    render: function(){
      
      this.context.save();
      this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
      
      var radius;
      radius = this.model.get( 'radius' );
      this.context.beginPath();
      this.context.arc( window.innerWidth/2, window.innerHeight/2, radius, 0, Math.PI * 2 );
      this.context.clip();
      
      console.log( 'this.image_bw', this.image_bw );
      this.context.putImageData( this.image_invert,
        0, 0
      );
      
      this.context.drawImage( this.image,
        0, 0
      );
      this.context.restore();
    },
    
    imageloaded: function( e ){
      
      this.canvas = this.createCanvas( this.image.width, this.image.height );
      this.context = this.canvas.getContext("2d");
      this.$el.append( this.canvas );
      //this.$el.append( this.paneview.render() );
      
      var canvas, context;
      canvas = this.createCanvas( this.image.width, this.image.height );
      context = canvas.getContext( '2d' );
      context.drawImage( this.image, 0, 0 );
      this.image_bw = context.monochrome( 0, 0, this.image.width, this.image.height, 129 );
      this.image_invert = context.invertColors( 0, 0, this.image.width, this.image.height );
      this.image_screen = context.screen( 0, 0, this.image.width, this.image.height );
      this.render();
    },
    
    handleMouseMove: function( e ){
      console.log( 'e', e );
      var valToSet = e.offsetX;
      this.model.set( { 'radius': valToSet } );
    },
    
    createCanvas: function( w, h ){
      var canvas;
      canvas = document.createElement('canvas');
      canvas.width = w || window.innerWidth;
      canvas.height = h || window.innerHeight;
      return canvas;
    }
    
  });
  
  return Mask;
  
});