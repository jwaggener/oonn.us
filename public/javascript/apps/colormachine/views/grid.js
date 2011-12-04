var Grid = {
	
	/* returns something like 
	[
		[ {x:0 , y:0}, {x:50 , y:0}, {x:100 , y:0} ],
		[ {x:0 , y:50}, {x:50 , y:50}, {x:100 , y:50} ],
		[ {x:0 , y:100}, {x:50 , y:100}, {x:100 , y:100} ]
	]
	*/
	array: function(opts){
		var grid = [];
		var unit, gutter, totalWidth, totalHeight, offsetX, offfsetY,
		rows, columns,
		 i, j, a;
		
		unit = opts.unit || 50;
		gutter = opts.gutter || 0;
		totalWidth = opts.totalWidth || 300;
		totalHeight = opts.totalHeight || 300;
		offsetX = totalWidth/2;
		offsetY = totalHeight/2;
		rows = Math.floor( totalHeight / ( unit + gutter ) );
		columns = Math.floor( totalWidth / ( unit + gutter ) );
		
		console.log( "rows", rows );
		console.log( "columns", columns );
		
		for ( i = 0; i < rows; i++ ){
			a = new Array();
			for ( j = 0; j < columns; j++ ){
				a.push( { x: j * ( unit + gutter ) - offsetX , y: i * ( unit + gutter ) - offsetY } );
			}
			grid.push( a );
		}
		return grid;
	}
};