define([
  "demos/polygons/views/paneView",
  ], function( PaneView ){
  
  var Polygons = Backbone.View.extend({
    
    initialize: function(){
      _.bindAll( this );
      //create a canvas
      this.canvas = this.createCanvas();
      this.context = this.canvas.getContext("2d");
      //model contains one property 'sides'
      this.model = new Backbone.Model();
      this.model.set({ 'sides': 3 });
      this.model.on( 'change:sides', this.render );
      //attach canvas
      this.$el.append( this.canvas );
      //create pane
      this.paneview = new PaneView({model: this.model});
      this.$el.append( this.paneview.render() );
      //render!!
      this.render();
    },
    
    render: function(){
      var x, y, radius;
      x = window.innerWidth/2;
      y = window.innerHeight/2;
      radius = ( window.innerWidth > window.innerHeight ) ? (window.innerHeight/2) * .9: (window.innerWidth/2) * .9;
      this.polygon = new Polygon( x, y, radius, this.model.get('sides'), 0, 'blue', 'blue' );
      //this.polygon.stroke( this.context );
      this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
      this.polygon.fill( this.context );
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
  
  return Polygons;
  
});