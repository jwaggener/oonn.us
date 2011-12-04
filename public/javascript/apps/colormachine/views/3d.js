ColorMachine.Views.ThreeD = Backbone.View.extend({
	
	id: "container",
	
	initialize: function(){
		
		_.bindAll( this );
		
		this.camera, this.scene, this.projector, this.renderer;
		this.plane, this.planes;
		this.rotateItems;
	
		this.windowHalfX = window.innerWidth / 2;
		this.windowHalfY = window.innerHeight / 2;
		
		$(document).bind( "click", this.onDocumentMouseDown );
		$(document).bind( "touchstart", this.onDocumentMouseDown );
					
	},
	
	render: function(){
		
		this.grid = Grid.array( { unit: 250/16, gutter: 0, totalWidth: 250, totalHeight: 250 } );
		
		this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );//OrthographicCamera( -150, 150, -150, 50, -100, 500);
		this.camera.position.y = 0;
		this.camera.position.z = 300;
		
		this.scene = new THREE.Scene();
		
		this.projector = new THREE.Projector();
		
		this.renderer = new THREE.WebGLRenderer();//CanvasRenderer works on iPad, WebGLRenderer works in Chrome
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		
		var i, j, l1, l2;
		var plane;
		var offsetX, offsetY;
		this.planes = [];
		this.rotateItems = [];
		offsetX = -125;
		offsetY = -125;
		l1 = this.grid.length;
		for ( i = 0; i < l1; i++ ){
			l2 = this.grid[i].length;
			for( j = 0; j < l2; j++ ){
				this.grid[i][j].x; this.grid[i][j].y;
				plane = new ColorMachine.Views.Plane( { position: this.grid[i][j], dimensions:{ width: 250/16, height: 250/16 } } );
				this.scene.add( plane.render() );
				this.planes.push( plane );
			}
		}
		
		setInterval( this.flipCard, 300 );
		
		return this.renderer.domElement;
		
		
	},
	
	animate: function() {
		window.requestAnimationFrame( this.animate );
		this.render3d();
	},
	
	render3d: function () {
		TWEEN.update();
		this.renderer.render( this.scene, this.camera );
	},
	
	flipCard: function(){
		var plane = this.planes[ Math.floor( Math.random() * this.planes.length ) ];
		plane.hello3DWorld();
	},
	
	onDocumentMouseDown: function( event ) {
		
		var e;
		var x, y;
		var vector, ray, intersects;
		
		event.preventDefault();
		
		e = event.originalEvent;
		if( e.touches ){
			x = e.touches[0].pageX;
			y = e.touches[0].pageY;
		}else{
			x = event.clientX;
			y = event.clientY;
		}
		
		vector = new THREE.Vector3( ( x / window.innerWidth ) * 2 - 1, - ( y / window.innerHeight ) * 2 + 1, 0.5 );
		this.projector.unprojectVector( vector, this.camera );

		ray = new THREE.Ray( this.camera.position, vector.subSelf( this.camera.position ).normalize() );
		
		intersects = ray.intersectObjects( this.planes );
		
		if ( intersects.length > 0 ) {
			
			$( intersects[0].object ).trigger( "hello", [ intersects[0] ] );

		}

	}
})