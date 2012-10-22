define([
  "text!demos/grid/resources/templates/pane.html"
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
            id: "HorizontalTickSpacing",
            name: "Horizontal Tick Spacing",
            type: "range",
            range: [0,20],
            value: 5
          },
          
          {
            id: "VerticalTickSpacing",
            name: "Vertical Tick Spacing",
            type: "range",
            range: [0,20],
            value: 5
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
        
        case ( 'HorizontalTickSpacing' ):
        this.model.set( { "stepx": val } );
        break;
        
        case ( 'VerticalTickSpacing' ):
        this.model.set( { "stepy": val } );
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