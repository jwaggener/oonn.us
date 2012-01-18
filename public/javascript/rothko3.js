jQuery(function($){
window.rothko03 = {};
window.rothko03.total = 7;
window.rothko03.loadImages = function(){
	
	window.rothko03.ground;
	window.rothko03.blob1;
	window.rothko03.blob2;
	window.rothko03.blob3;
	window.rothko03.blob4;
	window.rothko03.mask2;
	window.rothko03.painting2mask;
	
	window.rothko03.ground = new Image();
	window.rothko03.ground.onload = window.rothko03.imagesLoaded;
	window.rothko03.ground.src = "textures/rothko/painting1Ground.png";
	
	window.rothko03.blob1 = new Image();
	window.rothko03.blob1.onload = window.rothko03.imagesLoaded;
	window.rothko03.blob1.src = "textures/rothko/painting3blob1.png";
	
	window.rothko03.blob2 = new Image();
	window.rothko03.blob2.onload = window.rothko03.imagesLoaded;
	window.rothko03.blob2.src = "textures/rothko/painting3blob2.png";
	
	window.rothko03.blob3 = new Image();
	window.rothko03.blob3.onload = window.rothko03.imagesLoaded;
	window.rothko03.blob3.src = "textures/rothko/painting3blob3.png";
	
	window.rothko03.blob4 = new Image();
	window.rothko03.blob4.onload = window.rothko03.imagesLoaded;
	window.rothko03.blob4.src = "textures/rothko/painting3blob4.png";
	
	window.rothko03.mask2 = new Image();
	window.rothko03.mask2.onload = window.rothko03.imagesLoaded;
	window.rothko03.mask2.src = "textures/mask2.png";
	
	window.rothko03.painting2mask = new Image();
	window.rothko03.painting2mask.onload = window.rothko03.imagesLoaded;
	window.rothko03.painting2mask.src = "textures/painting2mask.png";
	
}

window.rothko03.imagesLoaded = function( result ){
	
	if( !window.rothko03.i ){
		 window.rothko03.i = 1
	}else{
		window.rothko03.i++;
	}
	if( window.rothko03.i == window.rothko03.total ){
		window.rothko03.render();
	}
}

window.rothko03.render = function(){
	
	var colors = [ Utilities.spectrum.red, Utilities.spectrum.orange, Utilities.spectrum.yellow, Utilities.spectrum.green, Utilities.spectrum.blue, Utilities.spectrum.indigo, Utilities.spectrum.violet ];
	
	var ground, color1, color2, color3;
	ground = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color1 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color2 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color3 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color4 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	
	window.rothko03.groundColor = Utilities.colorUtils.hslToRgb( ground, 1, .2 + ( Math.random() * .5 ) );
	window.rothko03.blobColor1 = Utilities.colorUtils.hslToRgb( color1, 1, .5 );
	window.rothko03.blobColor2 = Utilities.colorUtils.hslToRgb( color2, 1, Math.random() );
	window.rothko03.blobColor3 = Utilities.colorUtils.hslToRgb( color3, 1, Math.random() );
	window.rothko03.blobColor4 = Utilities.colorUtils.hslToRgb( color3, 1, Math.random() );
	
	var painting2 = $("#painting2")[0];
	var ctx = painting2.getContext("2d");
	var rgbks;
	
	rgbks = generateRGBKs( window.rothko03.ground );
	window.rothko03.groundtint = generateTintImage( window.rothko03.ground, rgbks, window.rothko03.groundColor.r * 255, window.rothko03.groundColor.g * 255, window.rothko03.groundColor.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko03.blob1 );
	window.rothko03.blob1tint = generateTintImage( window.rothko03.blob1, rgbks, window.rothko03.blobColor1.r * 255, window.rothko03.blobColor1.g * 255, window.rothko03.blobColor1.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko03.blob2 );
	window.rothko03.blob2tint = generateTintImage( window.rothko03.blob2, rgbks, window.rothko03.blobColor2.r * 255, window.rothko03.blobColor2.g * 255, window.rothko03.blobColor2.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko03.blob3 );
	window.rothko03.blob3tint = generateTintImage( window.rothko03.blob3, rgbks, window.rothko03.blobColor3.r * 255, window.rothko03.blobColor3.g * 255, window.rothko03.blobColor3.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko03.blob4 );
	window.rothko03.blob4tint = generateTintImage( window.rothko03.blob4, rgbks, window.rothko03.blobColor4.r * 255, window.rothko03.blobColor4.g * 255, window.rothko03.blobColor4.b * 255 );//returns a canvas object
	
	var str = "rgb("+Math.floor(window.rothko03.groundColor.r*255)+","+Math.floor(window.rothko03.groundColor.g*255)+","+Math.floor(window.rothko03.groundColor.b*255)+")";
	ctx.fillStyle = str;
	ctx.fillRect( 0, 0, 283, 364 );
	
	//ctx.drawImage( window.rothko03.groundtint, 0, 0 );

	ctx.drawImage( window.rothko03.blob1tint, 4, 3 );
	
	ctx.drawImage( window.rothko03.blob2tint, 6, 195 );
	
	ctx.drawImage( window.rothko03.blob3tint, 10, 200 );
	
	ctx.drawImage( window.rothko03.blob3tint, 4, 3 );
	
	var painting2mask = applyCanvasMask( painting2, window.rothko03.painting2mask, 283, 375);//returns data
	ctx.putImageData( painting2mask, 0, 0 );
	
	var masked = applyCanvasMask( painting2, window.rothko03.mask2, 283, 375);//returns data
	ctx = $("#reflection2")[0].getContext('2d');
	ctx.putImageData( masked, 0, 0 );
	
}
})