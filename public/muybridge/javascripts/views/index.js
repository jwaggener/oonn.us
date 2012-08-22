define([
  'libs/state-machine',
  'text!resources/templates/cat.html'
], function( StateMachine, TemplateCat ){
    
    var Index = Backbone.View.extend({
      
      events:{
        "change .rangeSelector" : "handleRangeChange",
        "change input[name='state']" : "handleRadioSelect"
      },
      
      initialize: function(){
        _.bindAll(this);
        this.catImagesLength = 10;
        this.cats;
        this.animationInterval;
        this.fsm = StateMachine.create({
          
          initial: 'userControl',
          
          events: [
            { name: 'userControlState',  from: [ 'play', 'rewind' ],  to: 'userControl' },
            { name: 'playState',  from: [ 'rewind', 'userControl' ],  to: 'play' },
            { name: 'rewindState',  from: [ 'play', 'userControl' ],  to: 'rewind' },
          ],
          
          callbacks: {
            onuserControl: this.onUserControl,
            onplay: this.onPlay,
            onrewind: this.onRewind
          }
          
        })
        this.render();
      },
      
      onUserControl: function( e ){
        clearInterval( this.animationInterval );
        $("input[value='userControl']").attr('checked', true);
      },
      
      onPlay: function( e ){
        clearInterval( this.animationInterval );
        this.play();
      },
      
      onRewind: function( e ){
        clearInterval( this.animationInterval );
        this.rewind();
      },
      
      render: function(){
        var cat
        cat = _.template( TemplateCat );
        this.$el.append( "<h1>Muybridge's Cat</h1>" );
        this.$el.append( cat );
        this.catImagesLength = this.$el.find( ".cat" ).length - 1;
        this.cats = this.$el.find( ".cat");
        this.frameIndex = 0;
      },
      
      handleRangeChange: function( e ){
        if( this.fsm.current != 'userControl' ) this.fsm.userControlState();
        this.frameIndex = Math.floor( this.catImagesLength * e.currentTarget.value/100 );
        this.setFrame( this.frameIndex );
      },
      
      handleRadioSelect: function( e ){
        console.log( "handleRadioSelect e", e );
        var value = e.currentTarget.value;
        console.log( "value", value );
        switch( value ){
          
          case( 'userControl'):
          if( this.fsm.current != 'userControl' ) this.fsm.userControlState();
          break;
          
          case( 'play' ):
          console.log('case play is true')
          this.fsm.playState();
          break;
          
          case( 'rewind' ):
          this.fsm.rewindState();
          break;
          
        }
      },
      
      setFrame: function( frame ){
        var cat;
        this.$el.find( ".cat" ).addClass("hide");
        cat = this.cats[ frame ];
        $( cat ).removeClass("hide");
      },
      
      advance: function(){
        var val;
        this.frameIndex = ( this.frameIndex >= this.catImagesLength ) ? 0 : this.frameIndex + 1;
        this.setFrame( this.frameIndex );
        this.setRangeValue( this.frameIndex/this.catImagesLength * 100 );
      },
      
      regress: function(){
        this.frameIndex = ( this.frameIndex <= 0 ) ? this.catImagesLength : this.frameIndex - 1;
        this.setFrame( this.frameIndex );
        this.setRangeValue( this.frameIndex/this.catImagesLength * 100 )
      },
      
      play: function(){
        this.animationInterval = setInterval( this.advance, 50 );
      },
      
      rewind: function(){
        this.animationInterval = setInterval( this.regress, 50 );
      },
      
      setRangeValue: function( val ){
        $('.rangeSelector').val( val );
      }
      
    });
    
    return Index;
});