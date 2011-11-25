BBThreeD.Views.Plane = Backbone.View.extend({
	
	/* backbone view object for a simple double-sided plane*/
	
	initialize: function(){
		_.bindAll( this );
		this.position = this.options.position || { x:0, y:0, z:0 };
		this.dimensions = this.options.dimensions || { width:50, height:50 };
		this.plane;
		this.materialsPos = 4;
	},
	
	render: function(){
		
		var geom, materials;
		
		geom = new THREE.PlaneGeometry( this.dimensions.width, this.dimensions.height );
		geom = new THREE.CubeGeometry( this.dimensions.width, this.dimensions.height, 10 );
		materials = [ ];
		materials = [
			new THREE.MeshBasicMaterial( { color: 0xcccccc, shininess:0, opacity:1 } ), //right
			new THREE.MeshBasicMaterial( { color: 0xcccccc, shininess:0, opacity:1 } ), //left
			new THREE.MeshBasicMaterial( { color: 0xcccccc, shininess:0, opacity:1 } ), //top
			new THREE.MeshBasicMaterial( { color: 0xcccccc, shininess:0, opacity:1 } ), //bottom
			new THREE.MeshBasicMaterial( { color: 0x000000, shininess:0, opacity:1 } ), //front
			new THREE.MeshBasicMaterial( { color: 0xff00ff, shininess:0, opacity:1 } ) //back
		]
		
		geom = new THREE.CubeGeometry( this.dimensions.width, this.dimensions.height, 0, 1, 1, 1, materials );
		
		this.plane = new THREE.Mesh( geom, new THREE.MeshFaceMaterial() );
		//MeshNormalMaterial handles shaders
		//, map: THREE.ImageUtils.loadTexture( '/javascript/apps/bbThreeD/resources/cat2.jpg' )
		//this.plane.rotation.x = - 90 * ( Math.PI / 180 );
		this.plane.position.x = this.position.x;
		this.plane.position.y = this.position.y;
		//this.plane.doubleSided = true;
		this.plane.overdraw = true;
		
		$( this.plane ).bind( "hello", this.hello3DWorld );
		
		return this.plane;
	},
	
	hello3DWorld: function(){
		console.log("hello 3d from the plane");
		var targetY = this.plane.rotation.y + 180 * Math.PI/180;
		new TWEEN.Tween( this.plane.rotation ).to( {//rotation is in radians; radToUse = degree * PI / 180
			x: 0,
			y: targetY,
			z: 0 }, 600 )
		.easing( TWEEN.Easing.Linear.EaseNone).start();
		//TWEEN.Easing.Quartic.EaseOut
		this.materialsPos = ( this.materialsPos == 5 ) ? 4 : 5;
		new TWEEN.Tween( this.plane.geometry.materials[ this.materialsPos ].color ).to( {
			b: Math.random() * 1,
			g: Math.random() * 1,
			r: Math.random() * 1
		}, 600
		).easing( TWEEN.Easing.Linear.EaseNone).start();
		//obj.object.geometry.materials[ 5 ].color.setHex( Math.random() * 0xffffff );
		console.log( "this.plane.geometry.materials[ 5 ].color", this.plane.geometry.materials[ 5 ].color );
		
	}
	
})