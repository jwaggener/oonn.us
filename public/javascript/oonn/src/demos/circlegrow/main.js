define([
  "demos/circlegrow/views/paneView",
  ], function( PaneView ){
  
  /* 4 examples of creating a circle */
  var Circles = Backbone.View.extend({
    
    initialize: function(){
      _.bindAll( this );
      this.canvas = this.createCanvas();
      this.context = this.canvas.getContext("2d");
      
      this.model = new Backbone.Model();
      this.model.set( { 'degrees': 360 } );
      this.model.on( 'change:degrees', this.handleChangeDegrees )
      
      this.$el.append( this.canvas );
      
      this.paneview = new PaneView({model: this.model});
      this.$el.append( this.paneview.render() );
      
      this.render();
    },
    
    render: function(){
      var half, fourth;
      var x, y, radius;
      radius = ( window.innerWidth < window.innerHeight ) ? window.innerWidth/2: window.innerHeight/2;
      radius *= .9;
      this.context.arc( window.innerWidth/2, window.innerHeight/2, radius, 0, Math.PI * 2 );
      this.context.stroke();
    },
    
    handleChangeDegrees: function( model, val ){
      var radius, rads;
      radius = ( window.innerWidth < window.innerHeight ) ? window.innerWidth/2: window.innerHeight/2;
      radius *= .9;
      rads = ( val * Math.PI )/180;
      rads -= Math.PI/2;
      this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
      this.context.beginPath();
      this.context.arc( window.innerWidth/2, window.innerHeight/2, radius, -Math.PI/2, rads );
      this.context.stroke();
      this.context.fillStyle = "purple";
      this.context.fill();
    },
    
    createCanvas: function(){
      var canvas;
      canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      return canvas;
    }
    
  });
  
  var Point = function( x, y ){
    this.x = x;
    this.y = y;
  };
  
  var Polygon = function( centerX, centerY, radius, sides, startAngle, strokeStyle, fillStyle, filled ){
    
    this.x = centerX;
    this.y = centerY;
    this.radius = radius;
    this.sides = sides;
    this.startAngle = startAngle;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.filled = filled;
  };
  
  Polygon.prototype = {
    
    getPoints: function(){
      
      var points = [],
          angle = this.startAngle || 0;
          
      for(var i=0; i < this.sides; i++ ){
        points.push(new Point( this.x + this.radius * Math.sin(angle),
                              this.y - this.radius * Math.cos(angle)));
        angle += 2*Math.PI/this.sides;
      }
      return points;
    },
    
    createPath: function( context ){
      var points = this.getPoints();
      context.beginPath();
      context.moveTo( points[0].x, points[0].y );
      for( var i=1; i<this.sides; i++ ){
        context.lineTo(points[i].x,points[i].y );
      }
      context.closePath();
    },
    
    stroke: function(context){
      context.save();
      this.createPath(context);
      context.strokeStyle = this.strokeStyle;
      context.stroke();
      context.restore();
    },
    
    fill: function(context){
      context.save();
      this.createPath(context);
      context.fillStyle = this.fillStyle;
      context.fill();
      context.restore();
    },
    
    move: function(x, y){
      this.x = x;
      this.y = y;
    }
  }
  
  return Circles;
  
});