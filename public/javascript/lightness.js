/* to be used with colors.js*/
/* simply provides a easy mechanism to deliver 4 distinct ranges of lightness*/

Utilities.lightness = {
	
	/*0 - .11*/
	darkest: function(){
		return Math.random() * .11;
	},
	
	/*.12 - .22*/
	darker: function(){
		return ( Math.random() * ( .22 - .11 ) ) + .11;
	},
	
	/*.23 - .33*/
	dark: function(){
		return ( Math.random() * ( .33 - .23 ) ) + .23;
	},
	
	/*.34 - .44*/
	mediumDark: function(){
		return ( Math.random() * ( .44 - .34 ) ) + .34;
	},
	
	/*.45 - .55*/
	medium: function(){
		return ( Math.random() * ( .55 - .45 ) ) + .45;
	},
	
	/*.56 - .66*/
	mediumLight: function(){
		return ( Math.random() * ( .66 - .56 ) ) + .56;
	},
	
	/*.67 - .77*/
	light: function(){
		return ( Math.random() * ( .77 - .67 ) ) + .67;
	},
	
	/*.78 - .88*/
	lighter: function(){
		return ( Math.random() * ( .88 - .78 ) ) + .78;
	},
	
	/*.89 - 1.0*/
	lightest: function(){
		return ( Math.random() * ( 1.0 - .89 ) ) + .89;
	}
}