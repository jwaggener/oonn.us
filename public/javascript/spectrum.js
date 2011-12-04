/* this little diddy is meant to be used with color.js
it returns a number in the hue, saturation, value color space
representing red, orange, yellow, green, blue, indigo, violet
*/

Utilities.spectrum = {
	
	/*0.95 - 0.05*/
	red: function( shift ){
		var r = ( Math.random() > .5 ) ? 1 - Math.random() * .05 : Math.random() * .05;
		return r;
	},
	
	/*0.05 - 0.10*/
	orange: function( shift ){
		var s = ( shift == undefined ) ? 0 : shift;
		return ( ( Math.random() * ( .10 - .06 ) ) + .06 + s );
	},
	
	/*0.10 - 0.18*/
	yellow: function( shift ){
		var s = ( shift == undefined ) ? 0 : shift;
		return ( ( Math.random() * ( .18 - .10 ) ) + .10 + s);
	},
	
	/*0.18 - 0.48*/
	green: function( shift ){
		var s = ( shift == undefined ) ? 0 : shift;
		return ( ( Math.random() * ( .44 - .18 ) ) + .18 + s);
	},
	
	/*0.49 - 0.72*/
	blue: function( shift ){
		var s = ( shift == undefined ) ? 0 : shift;
		return ( ( Math.random() * ( .72 - .49 ) ) + .49 + s );
	},
	
	/*0.73 - 0.80*/
	indigo: function( shift ){
		var s = ( shift == undefined ) ? 0 : shift;
		return ( ( Math.random() * ( .80 - .73 ) ) + .73 + s);
	},
	
	/*0.80 - 1.0*/
	violet: function( shift ){
		var s = ( shift == undefined ) ? 0 : shift;
		return ( ( Math.random() * ( 1.0 - .80 ) ) + .80 + s);
	}
}