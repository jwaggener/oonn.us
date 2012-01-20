jQuery(function($){
window.rothko04 = {};
window.rothko04.total = 8;
window.rothko04.loadImages = function(){
	
	window.rothko04.blob1;
	window.rothko04.blob2;
	window.rothko04.blob3;
	window.rothko04.blob4;
	window.rothko04.blob5;
	window.rothko04.blob6;
	
	window.rothko04.mask2;
	window.rothko04.painting2mask;
	
	window.rothko04.blob1 = new Image();
	window.rothko04.blob1.onload = window.rothko04.imagesLoaded;
	window.rothko04.blob1.src = "textures/rothko/paintin4blob2.png";
	
	window.rothko04.blob2 = new Image();
	window.rothko04.blob2.onload = window.rothko04.imagesLoaded;
	window.rothko04.blob2.src = "textures/rothko/paintin4blob3.png";
	
	window.rothko04.blob3 = new Image();
	window.rothko04.blob3.onload = window.rothko04.imagesLoaded;
	window.rothko04.blob3.src = "textures/rothko/paintin4blob4.png";
	
	window.rothko04.blob4 = new Image();
	window.rothko04.blob4.onload = window.rothko04.imagesLoaded;
	window.rothko04.blob4.src = "textures/rothko/paintin4blob5.png";
	
	window.rothko04.blob5 = new Image();
	window.rothko04.blob5.onload = window.rothko04.imagesLoaded;
	window.rothko04.blob5.src = "textures/rothko/paintin4blob6.png";
	
	window.rothko04.blob6 = new Image();
	window.rothko04.blob6.onload = window.rothko04.imagesLoaded;
	window.rothko04.blob6.src = "textures/rothko/paintin4blob7.png";
	
	window.rothko04.mask2 = new Image();
	window.rothko04.mask2.onload = window.rothko04.imagesLoaded;
	window.rothko04.mask2.src = "textures/mask2.png";
	
	window.rothko04.painting2mask = new Image();
	window.rothko04.painting2mask.onload = window.rothko04.imagesLoaded;
	window.rothko04.painting2mask.src = "textures/painting2mask.png";
	
}

window.rothko04.imagesLoaded = function( result ){
	
	if( !window.rothko04.i ){
		 window.rothko04.i = 1
	}else{
		window.rothko04.i++;
	}
	if( window.rothko04.i == window.rothko04.total ){
		window.rothko04.render();
	}
}

window.rothko04.render = function(){
	
	console.log( "here in render" );
	
	var colors = [ Utilities.spectrum.red, Utilities.spectrum.orange, Utilities.spectrum.yellow, Utilities.spectrum.green, Utilities.spectrum.blue, Utilities.spectrum.indigo, Utilities.spectrum.violet ];
	
	var ground, color1, color2, color3, color4, color5, color6;
	ground = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color1 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color2 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color3 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color4 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color5 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	color6 = colors[ Math.floor( Math.random() * colors.length ) ](0);
	
	window.rothko04.groundColor = Utilities.colorUtils.hslToRgb( ground, 1, .2 + ( Math.random() * .5 ) );
	window.rothko04.blobColor1 = Utilities.colorUtils.hslToRgb( color1, 1, .5 );
	window.rothko04.blobColor2 = Utilities.colorUtils.hslToRgb( color2, 1, Math.random() );
	window.rothko04.blobColor3 = Utilities.colorUtils.hslToRgb( color3, 1, Math.random() );
	window.rothko04.blobColor4 = Utilities.colorUtils.hslToRgb( color4, 1, Math.random() );
	window.rothko04.blobColor5 = Utilities.colorUtils.hslToRgb( color5, 1, Math.random() );
	window.rothko04.blobColor6 = Utilities.colorUtils.hslToRgb( color6, 1, Math.random() );
	
	var painting2 = $("#painting2")[0];
	var ctx = painting2.getContext("2d");
	var rgbks;
	
	rgbks = generateRGBKs( window.rothko04.blob1 );
	window.rothko04.blob1tint = generateTintImage( window.rothko04.blob1, rgbks, window.rothko04.blobColor1.r * 255, window.rothko04.blobColor1.g * 255, window.rothko04.blobColor1.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko04.blob2 );
	window.rothko04.blob2tint = generateTintImage( window.rothko04.blob2, rgbks, window.rothko04.blobColor2.r * 255, window.rothko04.blobColor2.g * 255, window.rothko04.blobColor2.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko04.blob3 );
	window.rothko04.blob3tint = generateTintImage( window.rothko04.blob3, rgbks, window.rothko04.blobColor3.r * 255, window.rothko04.blobColor3.g * 255, window.rothko04.blobColor3.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko04.blob4 );
	window.rothko04.blob4tint = generateTintImage( window.rothko04.blob4, rgbks, window.rothko04.blobColor4.r * 255, window.rothko04.blobColor4.g * 255, window.rothko04.blobColor4.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko04.blob5 );
	window.rothko04.blob5tint = generateTintImage( window.rothko04.blob5, rgbks, window.rothko04.blobColor5.r * 255, window.rothko04.blobColor5.g * 255, window.rothko04.blobColor5.b * 255 );//returns a canvas object
	
	rgbks = generateRGBKs( window.rothko04.blob6 );
	window.rothko04.blob6tint = generateTintImage( window.rothko04.blob6, rgbks, window.rothko04.blobColor6.r * 255, window.rothko04.blobColor6.g * 255, window.rothko04.blobColor6.b * 255 );//returns a canvas object
	
	var str = "rgb("+Math.floor(window.rothko04.groundColor.r*255)+","+Math.floor(window.rothko04.groundColor.g*255)+","+Math.floor(window.rothko04.groundColor.b*255)+")";
	ctx.fillStyle = str;
	ctx.fillRect( 0, 0, 283, 364 );

	ctx.drawImage( window.rothko04.blob1tint, 4, 3 );
	
	ctx.drawImage( window.rothko04.blob2tint, 6, 4 );
	
	ctx.drawImage( window.rothko04.blob3tint, 10, 95 );
	
	ctx.drawImage( window.rothko04.blob4tint, 4, 100 );
	
	ctx.drawImage( window.rothko04.blob5tint, 4, 200 );
	
	ctx.drawImage( window.rothko04.blob6tint, 4, 205 );
	
	var painting2mask = applyCanvasMask( painting2, window.rothko04.painting2mask, 283, 375);//returns data
	ctx.putImageData( painting2mask, 0, 0 );
	
	var masked = applyCanvasMask( painting2, window.rothko04.mask2, 283, 375);//returns data
	ctx = $("#reflection2")[0].getContext('2d');
	ctx.putImageData( masked, 0, 0 );
	
}
})