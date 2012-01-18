jQuery(function($){
window.rothko02 = {};
window.rothko02.total = 6;
window.rothko02.loadImages = function(){
	
	window.rothko02.ground;
	window.rothko02.blob1;
	window.rothko02.blob2;
	window.rothko02.blob3;
	window.rothko02.mask2;
	window.rothko02.painting2mask;
	
	window.rothko02.ground = new Image();
	window.rothko02.ground.onload = window.rothko02.imagesLoaded;
	window.rothko02.ground.src = "textures/rothko/painting1Ground.png";
	
	window.rothko02.blob1 = new Image();
	window.rothko02.blob1.onload = window.rothko02.imagesLoaded;
	window.rothko02.blob1.src = "textures/rothko/painting2blob1.png";
	
	window.rothko02.blob2 = new Image();
	window.rothko02.blob2.onload = window.rothko02.imagesLoaded;
	window.rothko02.blob2.src = "textures/rothko/painting2blob2.png";
	
	window.rothko02.blob3 = new Image();
	window.rothko02.blob3.onload = window.rothko02.imagesLoaded;
	window.rothko02.blob3.src = "textures/rothko/painting2blob3.png";
	
	window.rothko02.mask2 = new Image();
	window.rothko02.mask2.onload = window.rothko02.imagesLoaded;
	window.rothko02.mask2.src = "textures/mask2.png";
	
	window.rothko02.painting2mask = new Image();
	window.rothko02.painting2mask.onload = window.rothko02.imagesLoaded;
	window.rothko02.painting2mask.src = "textures/painting2mask.png";
	
}

window.rothko02.imagesLoaded = function( result ){
	
	if( !window.rothko02.i ){
		 window.rothko02.i = 1
	}else{
		window.rothko02.i++;
	}
	if( window.rothko02.i == window.rothko02.total ){
		window.rothko02.render();
	}
}

window.rothko02.render = function(){
	
	var colors = [ Utilities.spectrum.red, Utilities.spectrum.orange, Utilities.spectrum.yellow, Utilities.spectrum.green, Utilities.spectrum.blue, Utilities.spectrum.indigo, Utilities.spectrum.violet ];
	
	var ground, color1, color2, color3;
	ground = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color1 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color2 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color3 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	
	window.rothko02.groundColor = Utilities.colorUtils.hslToRgb( ground, 1, .2 + ( Math.random() * .5 ) );
	window.rothko02.blobColor1 = Utilities.colorUtils.hslToRgb( color1, 1, .5 );
	window.rothko02.blobColor2 = Utilities.colorUtils.hslToRgb( color2, 1, Math.random() );
	window.rothko02.blobColor3 = Utilities.colorUtils.hslToRgb( color3, 1, Math.random() );
	
	var painting2 = $("#painting2")[0];
	var ctx = painting2.getContext("2d");
	var rgbks;
	
	rgbks = generateRGBKs( window.rothko02.ground );
	window.rothko02.groundtint = generateTintImage( window.rothko02.ground, rgbks, window.rothko02.groundColor.r * 255, window.rothko02.groundColor.g * 255, window.rothko02.groundColor.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko02.blob1 );
	window.rothko02.blob1tint = generateTintImage( window.rothko02.blob1, rgbks, window.rothko02.blobColor1.r * 255, window.rothko02.blobColor1.g * 255, window.rothko02.blobColor1.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko02.blob2 );
	window.rothko02.blob2tint = generateTintImage( window.rothko02.blob2, rgbks, window.rothko02.blobColor2.r * 255, window.rothko02.blobColor2.g * 255, window.rothko02.blobColor2.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko02.blob3 );
	window.rothko02.blob3tint = generateTintImage( window.rothko02.blob3, rgbks, window.rothko02.blobColor3.r * 255, window.rothko02.blobColor3.g * 255, window.rothko02.blobColor3.b * 255 );//returns a canvas object
	
	var str = "rgb("+Math.floor(window.rothko02.groundColor.r*255)+","+Math.floor(window.rothko02.groundColor.g*255)+","+Math.floor(window.rothko02.groundColor.b*255)+")";
	ctx.fillStyle = str;
	ctx.fillRect( 0, 0, 283, 364 );
	
	//ctx.drawImage( window.rothko02.groundtint, 0, 0 );

	ctx.drawImage( window.rothko02.blob1tint, 4, 3 );
	
	ctx.drawImage( window.rothko02.blob2tint, 6, 174 );
	
	ctx.drawImage( window.rothko02.blob3tint, 10, 202 );
	
	
	var painting2mask = applyCanvasMask( painting2, window.rothko02.painting2mask, 283, 375);//returns data
	ctx.putImageData( painting2mask, 0, 0 );
	
	var masked = applyCanvasMask( painting2, window.rothko02.mask2, 283, 375);//returns data
	ctx = $("#reflection2")[0].getContext('2d');
	ctx.putImageData( masked, 0, 0 );
	
}
})