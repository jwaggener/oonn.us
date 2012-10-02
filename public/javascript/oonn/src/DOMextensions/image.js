/*maybe this should reside in a class called CanvasUtilities*/
/*or a class just dealing with pixels*/
Image.prototype.rgbks = function(){
  
  //check to see if the canvas element exists
  //currently, using a canvas object is the only way to get image data
  //image data can only be obtained within the security context ( i.e. same domain )
  if( !( document.createElement("canvas").getContext ) ) return undefined;
  
  var w, h;// width and height of the image
  var rgbks;// an array of objects describing r, g, b, k
  var canvas;// a canvas element
  var context;// the current canvas context
  var pixels;//pixels from the canvas
  var to, toData;
  
  rgbks = [];// array that holds rs, gs, bs, ks;
  canvas = document.createElement("canvas");
  canvas.width = this.width;
	canvas.height = this.height;
	
	console.log( "this.width", this.width );
	console.log( "this.height", this.height );
	context = canvas.getContext("2d");
	context.drawImage( this, 0, 0 );
	console.log( "context", context );
	pixels = context.getImageData( 0, 0, this.width, this.height ).data;
	
	// 4 is used to ask for 3 images: red, green, blue and
	// black in that order.
	for ( var rgbI = 0; rgbI < 4; rgbI++ ) {
	  canvas = document.createElement("canvas");
	  canvas.width  = this.width;
  	canvas.height = this.height;
  	context = canvas.getContext('2d');
  	context.drawImage( this, 0, 0 );
  	to = context.getImageData( 0, 0, this.width, this.height );
  	toData = to.data;
  	for ( var i = 0, len = pixels.length; i < len; i += 4 ) {
			toData[i  ] = (rgbI === 0) ? pixels[i  ] : 0;
 			toData[i+1] = (rgbI === 1) ? pixels[i+1] : 0;
			toData[i+2] = (rgbI === 2) ? pixels[i+2] : 0;
			toData[i+3] =                pixels[i+3]    ;
		}
		context.putImageData( to, 0, 0 );
		rgbks.push( canvas );
		document.getElementById("stuff").appendChild( canvas );
	}
	return rgbks;

}