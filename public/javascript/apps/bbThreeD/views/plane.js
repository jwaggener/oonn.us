BBThreeD.Views.Plane = Backbone.View.extend({
	
	/* backbone view object for a simple double-sided plane*/
	
	initialize: function(){
		_.bindAll( this );
		console.log( "this.options.position", this.options.position );
		this.position = this.options.position || { x:0, y:0, z:0 };
		this.dimensions = this.options.dimensions || { width:48, height:48 };
		this.plane;
	},
	
	render: function(){
		
		this.plane = new THREE.Mesh( new THREE.PlaneGeometry( this.dimensions.width, this.dimensions.height ), new THREE.MeshBasicMaterial( { color: 0xcccccc, shininess:0, opacity:1 } ) );
		//this.plane.rotation.x = - 90 * ( Math.PI / 180 );
		this.plane.position.x = this.position.x;
		this.plane.position.y = this.position.y;
		this.plane.doubleSided = true;
		this.plane.overdraw = true;
		
		$( this.plane ).bind( "hello", this.hello3DWorld );
		
		return this.plane;
	},
	
	hello3DWorld: function(){
		console.log("hello 3d from the plane");
		//set a target property
	}
	
})