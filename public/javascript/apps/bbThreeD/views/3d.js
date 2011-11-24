BBThreeD.Views.ThreeD = Backbone.View.extend({
	
	id: "container",
	
	initialize: function(){
		
		_.bindAll( this );
		
		this.camera, this.scene, this.projector, this.renderer;
		this.plane, this.planes;
		this.rotateItems;
	
		this.windowHalfX = window.innerWidth / 2;
		this.windowHalfY = window.innerHeight / 2;
		
		$(document).bind( "click", this.onDocumentMouseDown );
					
	},
	
	render: function(){
		
		this.grid = [
		
			[ { x:0, y:0 }, { x:50, y:0 }, { x:100, y:0 }, { x:150, y:0 }, { x:200, y:0 } ],
			[ { x:0, y:50 }, { x:50, y:50 }, { x:100, y:50 }, { x:150, y:50 }, { x:200, y:50 } ],
			[ { x:0, y:100 }, { x:50, y:100 }, { x:100, y:100 }, { x:150, y:100 }, { x:200, y:100 } ],
			[ { x:0, y:150 }, { x:50, y:150 }, { x:100, y:150 }, { x:150, y:150 }, { x:200, y:150 } ],
			[ { x:0, y:200 }, { x:50, y:200 }, { x:100, y:200 }, { x:150, y:200 }, { x:200, y:200 } ]
		];
		
		this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		this.camera.position.y = 0;
		this.camera.position.z = 300;
		
		this.scene = new THREE.Scene();
		
		this.projector = new THREE.Projector();
		
		this.renderer = new THREE.CanvasRenderer();
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
				this.grid[i][j].x += offsetX; this.grid[i][j].y += offsetY;
				plane = new BBThreeD.Views.Plane( { position: this.grid[i][j] } ).render();
				$( plane ).bind( "hello", this.hello3DWorld );
				this.scene.add( plane );
				this.planes.push( plane );
			}
		}

		return this.renderer.domElement;
	},
	
	hello3DWorld: function( event, obj, two ){
		obj.object.materials[ 0 ].color.setHex( Math.random() * 0xffffff );
		this.rotateItems.push( obj.object );
		console.log("obj.object.materials[ 0 ].color",obj.object.materials[ 0 ].color);
	},
	
	animate: function() {
		window.requestAnimationFrame( this.animate );
		this.render3d();
	},
	
	render3d: function () {
		var i, l;
		l = this.rotateItems.length;
		//this.camera.rotation.y += .05;
		for( i = 0; i < l; i++ ){
			this.rotateItems[ i ].rotation.y += .05;
		}
		//this.plane.rotation.y += .00;
		this.renderer.render( this.scene, this.camera );
	},
	
	onDocumentMouseDown: function( event ) {

		event.preventDefault();

		var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
		this.projector.unprojectVector( vector, this.camera );

		var ray = new THREE.Ray( this.camera.position, vector.subSelf( this.camera.position ).normalize() );
		
		var intersects = ray.intersectObjects( this.planes );
		
		if ( intersects.length > 0 ) {
			
			$( intersects[0].object ).trigger( "hello", [ intersects[0] ] );

		}

	}
})