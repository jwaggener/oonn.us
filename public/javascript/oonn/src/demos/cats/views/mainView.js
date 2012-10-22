define([
  '../../../loader/imageBatchLoader',
  'demos/cats/views/paneView',
  ], function( ImageBatchLoader, PaneView ){
  
  var MainView = Backbone.View.extend({
    
    initialize: function(){
      _.bindAll( this );
      this.canvas = this.createCanvas();
      this.context = this.canvas.getContext( '2d' );
      this.frame = 0;
      this.fpsModel = new Backbone.Model();
      this.fpsModel.set( { 'fps': 5 } );
      this.render();
      //load the images
      this.imageBatchLoader = new ImageBatchLoader();
      $(this.imageBatchLoader).on( 'complete', this.handleImagesLoaded );
      this.imageBatchLoader.loadImages( this.images );
    },
    
    render: function(){
      this.$el.html( this.canvas );
      this.paneview = new PaneView({ model: this.fpsModel });
      this.$el.append( this.paneview.render() );
    },
    
    draw: function(){
      setTimeout( this.renderFrame, 1000/this.fpsModel.get( "fps" ) );
    },
    
    renderFrame: function(){
      requestAnimationFrame(this.draw);
      this.context.drawImage( this.imageBatchLoader.images[ this.frame ], 0, 0 );
      this.frame = ( this.frame == this.imageBatchLoader.images.length -1 ) ? 0: this.frame + 1;
      //this.frame = Math.floor(Math.random( this.imageBatchLoader.images.length -1 ) * 10 );
    },
    
    handleImagesLoaded: function( e ){
      this.draw();
    },
    
    createCanvas: function(){
      var canvas;
      canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      return canvas;
    },
  
    /* from, to - canvas */
    copy: function( from, to ){
      var context;
      context = to.getContext('2d');
      context.drawImage( from, 0, 0 );
    },
    
    images: [
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0818.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0819.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0820.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0821.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0822.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0823.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0824.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0825.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0826.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0827.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0828.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0829.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0830.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0831.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0832.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0833.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0834.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0835.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0836.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0837.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0838.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0839.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0840.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0841.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0842.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0843.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0844.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0845.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0846.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0847.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0848.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0850.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0851.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0852.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0853.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0854.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0855.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0856.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0857.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0858.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0859.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0860.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0861.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0862.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0863.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0864.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0865.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0866.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0867.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0868.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0869.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0870.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0871.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0872.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0873.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0874.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0875.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0876.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0877.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0878.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0879.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0880.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0881.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0882.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0883.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0884.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0885.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0886.jpg',
      '/javascript/oonn/src/demos/cats/resources/images/' + 'IMG_0887.jpg'
    ]
    
  });

  return MainView;
  
})