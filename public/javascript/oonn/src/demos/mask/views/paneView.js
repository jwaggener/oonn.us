define([
  "text!demos/mask/resources/templates/pane.html"
], function( Template ){
  
  var PaneView = Backbone.View.extend({
    
    initialize: function(){
      this.model = this.options.model;
    },
    
    render: function(){
      _.bindAll( this );
      this.el;
      var body;
      var obj;
      obj = {
        
        title: "Grid",
        
        inputs:[
          {
            id: "Radius",
            name: "Radius",
            type: "range",
            range: [0,1000],
            value: 360
          }
        ]
      }
      this.el = document.createElement('div');
      $( this.el ).attr( { "class": "pane"} );
      body = _.template( Template, obj );
      $( this.el ).append( body );
      this.listen( );
      return this.el;
    },
    
    listen: function( ){
      $(this.el).find("input[type=range]").change( this.handleValueChange );
      $(this.el).find("#update").bind( 'click', this.handleUpdate );
      $(this.el).find("#clear").bind( 'click', this.handleClear );
    },
    
    handleValueChange: function( e ){
      var str, val;
      str = '#' + $(e.currentTarget).attr('name') + "-print-value";
      val = $(e.currentTarget).val();
      $(this.el).find( str ).html(  val );
      
      switch( $(e.currentTarget).attr('name') ){
        
        case ( 'Radius' ):
        this.model.set( { "radius": val } );
        break;
        
      }
    },
      
    handleUpdate: function( e ){
      $(this).trigger("update");
    },
    
    handleClear: function( e ){
      $(this).trigger("clear");
    }
    
  });
  
  return PaneView;
  
});