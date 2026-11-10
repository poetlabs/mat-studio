/*
	imagetracer.js version 1.2.6
	Simple raster image tracer and vectorizer written in JavaScript.
	andras@jankovics.net
*/

/*

The Unlicense / PUBLIC DOMAIN

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to http://unlicense.org/

*/

(function(){ 'use strict';

function ImageTracer(){
	var _this = this;

	this.versionnumber = '1.2.6',
	
	////////////////////////////////////////////////////////////
	//
	//  API
	//
	////////////////////////////////////////////////////////////
	
	// Loading an image from a URL, tracing when loaded,
	// then executing callback with the scaled svg string as argument
	this.imageToSVG = function( url, callback, options ){
		options = _this.checkoptions(options);
		// loading image, tracing and callback
		_this.loadImage(
			url,
			function(canvas){
				callback(
					_this.imagedataToSVG( _this.getImgdata(canvas), options )
				);
			},
			options
		);
	},// End of imageToSVG()
	
	// Tracing imagedata, then returning the scaled svg string
	this.imagedataToSVG = function( imgd, options ){
		options = _this.checkoptions(options);
		// tracing imagedata
		var td = _this.imagedataToTracedata( imgd, options );
		// returning SVG string
		return _this.getsvgstring(td, options);
	},// End of imagedataToSVG()
	
	// Loading an image from a URL, tracing when loaded,
	// then executing callback with tracedata as argument
	this.imageToTracedata = function( url, callback, options ){
		options = _this.checkoptions(options);
		// loading image, tracing and callback
		_this.loadImage(
				url,
				function(canvas){
					callback(
						_this.imagedataToTracedata( _this.getImgdata(canvas), options )
					);
				},
				options
		);
	},// End of imageToTracedata()
	
	// Tracing imagedata, then returning tracedata (layers with paths, palette, image size)
	this.imagedataToTracedata = function( imgd, options ){
		options = _this.checkoptions(options);
		
		// 1. Color quantization
		var ii = _this.colorquantization( imgd, options );
		
		if(options.layering === 0){// Sequential layering
			
			// create tracedata object
			var tracedata = {
				layers : [],
				palette : ii.palette,
				width : ii.array[0].length-2,
				height : ii.array.length-2
			};
			
			// Loop to trace each color layer
			for(var colornum=0; colornum<ii.palette.length; colornum++){
				
				// layeringstep -> pathscan -> internodes -> batchtracepaths
				var tracedlayer =
					_this.batchtracepaths(
							
						_this.internodes(
								
							_this.pathscan(
								_this.layeringstep( ii, colornum ),
								options.pathomit
							),
							
							options
							
						),
						
						options.ltres,
						options.qtres
						
					);
				
				// adding traced layer
				tracedata.layers.push(tracedlayer);
				
			}// End of color loop
			
		}else{// Parallel layering
			// 2. Layer separation and edge detection
			var ls = _this.layering( ii );
			
			// Optional edge node visualization
			if(options.layercontainerid){ _this.drawLayers( ls, _this.specpalette, options.scale, options.layercontainerid ); }
			
			// 3. Batch pathscan
			var bps = _this.batchpathscan( ls, options.pathomit );
			
			// 4. Batch interpollation
			var bis = _this.batchinternodes( bps, options );
			
			// 5. Batch tracing and creating tracedata object
			var tracedata = {
				layers : _this.batchtracelayers( bis, options.ltres, options.qtres ),
				palette : ii.palette,
				width : imgd.width,
				height : imgd.height
			};
			
		}// End of parallel layering
		
		// return tracedata
		return tracedata;
		
	},// End of imagedataToTracedata()
	
	this.optionpresets = {
		'default': {
			
			// Tracing
			corsenabled : false,
			ltres : 1,
			qtres : 1,
			pathomit : 8,
			rightangleenhance : true,
			
			// Color quantization
			colorsampling : 2,
			numberofcolors : 16,
			mincolorratio : 0,
			colorquantcycles : 3,
			
			// Layering method
			layering : 0,
			
			// SVG rendering
			strokewidth : 1,
			linefilter : false,
			scale : 1,
			roundcoords : 1,
			viewbox : false,
			desc : false,
			lcpr : 0,
			qcpr : 0,
			
			// Blur
			blurradius : 0,
			blurdelta : 20
			
		},
		'posterized1': { colorsampling:0, numberofcolors:2 },
		'posterized2': { numberofcolors:4, blurradius:5 },
		'curvy': { ltres:0.01, linefilter:true, rightangleenhance:false },
		'sharp': { qtres:0.01, linefilter:false },
		'detailed': { pathomit:0, roundcoords:2, ltres:0.5, qtres:0.5, numberofcolors:64 },
		'smoothed': { blurradius:5, blurdelta: 64 },
		'grayscale': { colorsampling:0, colorquantcycles:1, numberofcolors:7 },
		'fixedpalette': { colorsampling:0, colorquantcycles:1, numberofcolors:27 },
		'randomsampling1': { colorsampling:1, numberofcolors:8 },
		'randomsampling2': { colorsampling:1, numberofcolors:64 },
		'artistic1': { colorsampling:0, colorquantcycles:1, pathomit:0, blurradius:5, blurdelta: 64, ltres:0.01, linefilter:true, numberofcolors:16, strokewidth:2 },
		'artistic2': { qtres:0.01, colorsampling:0, colorquantcycles:1, numberofcolors:4, strokewidth:0 },
		'artistic3': { qtres:10, ltres:10, numberofcolors:8 },
		'artistic4': { qtres:10, ltres:10, numberofcolors:64, blurradius:5, blurdelta: 256, strokewidth:2 },
		'posterized3': { ltres: 1, qtres: 1, pathomit: 20, rightangleenhance: true, colorsampling: 0, numberofcolors: 3,
			mincolorratio: 0, colorquantcycles: 3, blurradius: 3, blurdelta: 20, strokewidth: 0, linefilter: false,
			roundcoords: 1, pal: [ { r: 0, g: 0, b: 100, a: 255 }, { r: 255, g: 255, b: 255, a: 255 } ] }
	},// End of optionpresets
	
	// creating options object, setting defaults for missing values
	this.checkoptions = function(options){
		options = options || {};
		// Option preset
		if(typeof options === 'string'){
			options = options.toLowerCase();
			if( _this.optionpresets[options] ){ options = _this.optionpresets[options]; }else{ options = {}; }
		}
		// Defaults
		var ok = Object.keys(_this.optionpresets['default']);
		for(var k=0; k<ok.length; k++){
			if(!options.hasOwnProperty(ok[k])){ options[ok[k]] = _this.optionpresets['default'][ok[k]]; }
		}
		// options.pal is not defined here, the custom palette should be added externally: options.pal = [ { 'r':0, 'g':0, 'b':0, 'a':255 }, {...}, ... ];
		// options.layercontainerid is not defined here, can be added externally: options.layercontainerid = 'mydiv'; ... <div id="mydiv"></div>
		return options;
	},// End of checkoptions()
	
	////////////////////////////////////////////////////////////
	//
	//  Vectorizing functions
	//
	////////////////////////////////////////////////////////////
	
	// 1. Color quantization
	// Using a form of k-means clustering repeatead options.colorquantcycles times. http://en.wikipedia.org/wiki/Color_quantization
	this.colorquantization = function( imgd, options ){
		var arr = [], idx=0, cd,cdl,ci, paletteacc = [], pixelnum = imgd.width * imgd.height, i, j, k, cnt, palette;
		
		// imgd.data must be RGBA, not just RGB
		if( imgd.data.length < pixelnum * 4 ){
			var newimgddata = new Uint8ClampedArray(pixelnum * 4);
			for(var pxcnt = 0; pxcnt < pixelnum ; pxcnt++){
				newimgddata[pxcnt*4  ] = imgd.data[pxcnt*3  ];
				newimgddata[pxcnt*4+1] = imgd.data[pxcnt*3+1];
				newimgddata[pxcnt*4+2] = imgd.data[pxcnt*3+2];
				newimgddata[pxcnt*4+3] = 255;
			}
			imgd.data = newimgddata;
		}// End of RGBA imgd.data check
		
		// Filling arr (color index array) with -1
		for( j=0; j<imgd.height+2; j++ ){ arr[j]=[]; for(i=0; i<imgd.width+2 ; i++){ arr[j][i] = -1; } }
		
		// Use custom palette if pal is defined or sample / generate custom length palette
		if(options.pal){
			palette = options.pal;
		}else if(options.colorsampling === 0){
			palette = _this.generatepalette(options.numberofcolors);
		}else if(options.colorsampling === 1){
			palette = _this.samplepalette( options.numberofcolors, imgd );
		}else{
			palette = _this.samplepalette2( options.numberofcolors, imgd );
		}
		
		// Selective Gaussian blur preprocessing
		if( options.blurradius > 0 ){ imgd = _this.blur( imgd, options.blurradius, options.blurdelta ); }
		
		// Repeat clustering step options.colorquantcycles times
		for( cnt=0; cnt < options.colorquantcycles; cnt++ ){
			
			// Average colors from the second iteration
			if(cnt>0){
				// averaging paletteacc for palette
				for( k=0; k < palette.length; k++ ){
					
					// averaging
					if( paletteacc[k].n > 0 ){
						palette[k] = {  r: Math.floor( paletteacc[k].r / paletteacc[k].n ),
										g: Math.floor( paletteacc[k].g / paletteacc[k].n ),
										b: Math.floor( paletteacc[k].b / paletteacc[k].n ),
										a:  Math.floor( paletteacc[k].a / paletteacc[k].n ) };
					}
					
					// Randomizing a color, if there are too few pixels and there will be a new cycle
					if( ( paletteacc[k].n/pixelnum < options.mincolorratio ) && ( cnt < options.colorquantcycles-1 ) ){
						palette[k] = {  r: Math.floor(Math.random()*255),
										g: Math.floor(Math.random()*255),
										b: Math.floor(Math.random()*255),
										a: Math.floor(Math.random()*255) };
					}
					
				}// End of palette loop
			}// End of Average colors from the second iteration
			
			// Reseting palette accumulator for averaging
			for( i=0; i < palette.length; i++ ){ paletteacc[i] = { r:0, g:0, b:0, a:0, n:0 }; }
			
			// loop through all pixels
			for( j=0; j < imgd.height; j++ ){
				for( i=0; i < imgd.width; i++ ){
					
					// pixel index
					idx = (j*imgd.width+i)*4;
					
					// find closest color from palette by measuring (rectilinear) color distance between this pixel and all palette colors
					ci=0; cdl = 1024; // 4 * 256 is the maximum RGBA distance
					for( k=0; k<palette.length; k++ ){
						
						// In my experience, https://en.wikipedia.org/wiki/Rectilinear_distance works better than https://en.wikipedia.org/wiki/Euclidean_distance
						cd = Math.abs(palette[k].r-imgd.data[idx]) + Math.abs(palette[k].g-imgd.data[idx+1]) + Math.abs(palette[k].b-imgd.data[idx+2]) + Math.abs(palette[k].a-imgd.data[idx+3]);
						
						// Remember this color if this is the closest yet
						if(cd<cdl){ cdl = cd; ci = k; }
						
					}// End of palette loop
					
					// add to palettacc
					paletteacc[ci].r += imgd.data[idx  ];
					paletteacc[ci].g += imgd.data[idx+1];
					paletteacc[ci].b += imgd.data[idx+2];
					paletteacc[ci].a += imgd.data[idx+3];
					paletteacc[ci].n++;
					
					// update the indexed color array
					arr[j+1][i+1] = ci;
					
				}// End of i loop
			}// End of j loop
			
		}// End of Repeat clustering step options.colorquantcycles times
		
		return { array:arr, palette:palette };
		
	},// End of colorquantization()
	
	// Sampling a palette from imagedata
	this.samplepalette = function( numberofcolors, imgd ){
		var idx, palette=[];
		for(var i=0; i<numberofcolors; i++){
			idx = Math.floor( Math.random() * imgd.data.length / 4 ) * 4;
			palette.push({ r:imgd.data[idx  ], g:imgd.data[idx+1], b:imgd.data[idx+2], a:imgd.data[idx+3] });
		}
		return palette;
	},// End of samplepalette()
	
	// Deterministic sampling a palette from imagedata: rectangular grid
	this.samplepalette2 = function( numberofcolors, imgd ){
		var idx, palette=[], ni = Math.ceil(Math.sqrt(numberofcolors)), nj = Math.ceil(numberofcolors/ni),
			vx = imgd.width / (ni+1), vy = imgd.height / (nj+1);
		for(var j=0; j<nj; j++){
			for(var i=0; i<ni; i++){
				if(palette.length === numberofcolors){
					break;
				}else{
					idx = Math.floor( ((j+1)*vy) * imgd.width + ((i+1)*vx) ) * 4;
					palette.push( { r:imgd.data[idx], g:imgd.data[idx+1], b:imgd.data[idx+2], a:imgd.data[idx+3] } );
				}
			}
		}
		return palette;
	},// End of samplepalette2()
	
	// Generating a palette with numberofcolors
	this.generatepalette = function(numberofcolors){
		var palette = [], rcnt, gcnt, bcnt;
		if(numberofcolors<8){
			
			// Grayscale
			var graystep = Math.floor(255/(numberofcolors-1));
			for(var i=0; i<numberofcolors; i++){ palette.push({ r:i*graystep, g:i*graystep, b:i*graystep, a:255 }); }
			
		}else{
			
			// RGB color cube
			var colorqnum = Math.floor(Math.pow(numberofcolors, 1/3)), // Number of points on each edge on the RGB color cube
				colorstep = Math.floor(255/(colorqnum-1)), // distance between points
				rndnum = numberofcolors - colorqnum*colorqnum*colorqnum; // number of random colors
			
			for(rcnt=0; rcnt<colorqnum; rcnt++){
				for(gcnt=0; gcnt<colorqnum; gcnt++){
					for(bcnt=0; bcnt<colorqnum; bcnt++){
						palette.push( { r:rcnt*colorstep, g:gcnt*colorstep, b:bcnt*colorstep, a:255 } );
					}// End of blue loop
				}// End of green loop
			}// End of red loop
			
			// Rest is random
			for(rcnt=0; rcnt<rndnum; rcnt++){ palette.push({ r:Math.floor(Math.random()*255), g:Math.floor(Math.random()*255), b:Math.floor(Math.random()*255), a:Math.floor(Math.random()*255) }); }

		}// End of numberofcolors check
		
		return palette;
	},// End of generatepalette()
		
	// 2. Layer separation and edge detection
	// Edge node types ( ▓: this layer or 1; ░: not this layer or 0 )
	// 12  ░░  ▓░  ░▓  ▓▓  ░░  ▓░  ░▓  ▓▓  ░░  ▓░  ░▓  ▓▓  ░░  ▓░  ░▓  ▓▓
	// 48  ░░  ░░  ░░  ░░  ░▓  ░▓  ░▓  ░▓  ▓░  ▓░  ▓░  ▓░  ▓▓  ▓▓  ▓▓  ▓▓
	//     0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
	this.layering = function(ii){
		// Creating layers for each indexed color in arr
		var layers = [], val=0, ah = ii.array.length, aw = ii.array[0].length, n1,n2,n3,n4,n5,n6,n7,n8, i, j, k;
		
		// Create layers
		for(k=0; k<ii.palette.length; k++){
			layers[k] = [];
			for(j=0; j<ah; j++){
				layers[k][j] = [];
				for(i=0; i<aw; i++){
					layers[k][j][i]=0;
				}
			}
		}
		
		// Looping through all pixels and calculating edge node type
		for(j=1; j<ah-1; j++){
			for(i=1; i<aw-1; i++){
				
				// This pixel's indexed color
				val = ii.array[j][i];
				
				// Are neighbor pixel colors the same?
				n1 = ii.array[j-1][i-1]===val ? 1 : 0;
				n2 = ii.array[j-1][i  ]===val ? 1 : 0;
				n3 = ii.array[j-1][i+1]===val ? 1 : 0;
				n4 = ii.array[j  ][i-1]===val ? 1 : 0;
				n5 = ii.array[j  ][i+1]===val ? 1 : 0;
				n6 = ii.array[j+1][i-1]===val ? 1 : 0;
				n7 = ii.array[j+1][i  ]===val ? 1 : 0;
				n8 = ii.array[j+1][i+1]===val ? 1 : 0;
				
				// this pixel's type and looking back on previous pixels
				layers[val][j+1][i+1] = 1 + n5 * 2 + n8 * 4 + n7 * 8 ;
				if(!n4){ layers[val][j+1][i  ] = 0 + 2 + n7 * 4 + n6 * 8 ; }
				if(!n2){ layers[val][j  ][i+1] = 0 + n3*2 + n5 * 4 + 8 ; }
				if(!n1){ layers[val][j  ][i  ] = 0 + n2*2 + 4 + n4 * 8 ; }
				
			}// End of i loop
		}// End of j loop
		
		return layers;
	},// End of layering()
	
	// 2. Layer separation and edge detection
	// Edge node types ( ▓: this layer or 1; ░: not this layer or 0 )
	// 12  ░░  ▓░  ░▓  ▓▓  ░░  ▓░  ░▓  ▓▓  ░░  ▓░  ░▓  ▓▓  ░░  ▓░  ░▓  ▓▓
	// 48  ░░  ░░  ░░  ░░  ░▓  ░▓  ░▓  ░▓  ▓░  ▓░  ▓░  ▓░  ▓▓  ▓▓  ▓▓  ▓▓
	//     0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
	this.layeringstep = function(ii,cnum){
		// Creating layers for each indexed color in arr
		var layer = [], val=0, ah = ii.array.length, aw = ii.array[0].length, n1,n2,n3,n4,n5,n6,n7,n8, i, j, k;
		
		// Create layer
		for(j=0; j<ah; j++){
			layer[j] = [];
			for(i=0; i<aw; i++){
				layer[j][i]=0;
			}
		}
		
		// Looping through all pixels and calculating edge node type
		for(j=1; j<ah; j++){
			for(i=1; i<aw; i++){
				layer[j][i] =
					( ii.array[j-1][i-1]===cnum ? 1 : 0 ) +
					( ii.array[j-1][i]===cnum ? 2 : 0 ) +
					( ii.array[j][i-1]===cnum ? 8 : 0 ) +
					( ii.array[j][i]===cnum ? 4 : 0 )
				;
			}// End of i loop
		}// End of j loop
			
		return layer;
	},// End of layeringstep()
	
	// Point in polygon test
	this.pointinpoly = function( p, pa ){
		var isin=false;

		for(var i=0,j=pa.length-1; i<pa.length; j=i++){
			isin =
				( ((pa[i].y > p.y) !== (pa[j].y > p.y)) && (p.x < (pa[j].x - pa[i].x) * (p.y - pa[i].y) / (pa[j].y - pa[i].y) + pa[i].x) )
				? !isin : isin;
		}

		return isin;
	},
	
	// Lookup tables for pathscan
	// pathscan_combined_lookup[ arr[py][px] ][ dir ] = [nextarrpypx, nextdir, deltapx, deltapy];
	this.pathscan_combined_lookup = [
		[[-1,-1,-1,-1], [-1,-1,-1,-1], [-1,-1,-1,-1], [-1,-1,-1,-1]],// arr[py][px]===0 is invalid
		[[ 0, 1, 0,-1], [-1,-1,-1,-1], [-1,-1,-1,-1], [ 0, 2,-1, 0]],
		[[-1,-1,-1,-1], [-1,-1,-1,-1], [ 0, 1, 0,-1], [ 0, 0, 1, 0]],
		[[ 0, 0, 1, 0], [-1,-1,-1,-1], [ 0, 2,-1, 0], [-1,-1,-1,-1]],
		
		[[-1,-1,-1,-1], [ 0, 0, 1, 0], [ 0, 3, 0, 1], [-1,-1,-1,-1]],
		[[13, 3, 0, 1], [13, 2,-1, 0], [ 7, 1, 0,-1], [ 7, 0, 1, 0]],
		[[-1,-1,-1,-1], [ 0, 1, 0,-1], [-1,-1,-1,-1], [ 0, 3, 0, 1]],
		[[ 0, 3, 0, 1], [ 0, 2,-1, 0], [-1,-1,-1,-1], [-1,-1,-1,-1]],
		
		[[ 0, 3, 0, 1], [ 0, 2,-1, 0], [-1,-1,-1,-1], [-1,-1,-1,-1]],
		[[-1,-1,-1,-1], [ 0, 1, 0,-1], [-1,-1,-1,-1], [ 0, 3, 0, 1]],
		[[11, 1, 0,-1], [14, 0, 1, 0], [14, 3, 0, 1], [11, 2,-1, 0]],
		[[-1,-1,-1,-1], [ 0, 0, 1, 0], [ 0, 3, 0, 1], [-1,-1,-1,-1]],
		
		[[ 0, 0, 1, 0], [-1,-1,-1,-1], [ 0, 2,-1, 0], [-1,-1,-1,-1]],
		[[-1,-1,-1,-1], [-1,-1,-1,-1], [ 0, 1, 0,-1], [ 0, 0, 1, 0]],
		[[ 0, 1, 0,-1], [-1,-1,-1,-1], [-1,-1,-1,-1], [ 0, 2,-1, 0]],
		[[-1,-1,-1,-1], [-1,-1,-1,-1], [-1,-1,-1,-1], [-1,-1,-1,-1]]// arr[py][px]===15 is invalid
	],

	// 3. Walking through an edge node array, discarding edge node types 0 and 15 and creating paths from the rest.
	// Walk directions (dir): 0 > ; 1 ^ ; 2 < ; 3 v 
	this.pathscan = function( arr, pathomit ){
		var paths=[], pacnt=0, pcnt=0, px=0, py=0, w = arr[0].length, h = arr.length,
			dir=0, pathfinished=true, holepath=false, lookuprow;
		
		for(var j=0; j<h; j++){
			for(var i=0; i<w; i++){
				if( (arr[j][i] == 4) || ( arr[j][i] == 11) ){ // Other values are not valid
					
					// Init
					px = i; py = j;
					paths[pacnt] = {};
					paths[pacnt].points = [];
					paths[pacnt].boundingbox = [px,py,px,py];
					paths[pacnt].holechildren = [];
					pathfinished = false;
					pcnt=0;
					holepath = (arr[j][i]==11);
					dir = 1;

					// Path points loop
					while(!pathfinished){
						
						// New path point
						paths[pacnt].points[pcnt] = {};
						paths[pacnt].points[pcnt].x = px-1;
						paths[pacnt].points[pcnt].y = py-1;
						paths[pacnt].points[pcnt].t = arr[py][px];
						
						// Bounding box
						if( (px-1) < paths[pacnt].boundingbox[0] ){ paths[pacnt].boundingbox[0] = px-1; }
						if( (px-1) > paths[pacnt].boundingbox[2] ){ paths[pacnt].boundingbox[2] = px-1; }
						if( (py-1) < paths[pacnt].boundingbox[1] ){ paths[pacnt].boundingbox[1] = py-1; }
						if( (py-1) > paths[pacnt].boundingbox[3] ){ paths[pacnt].boundingbox[3] = py-1; }
						
						// Next: look up the replacement, direction and coordinate changes = clear this cell, turn if required, walk forward
						lookuprow = _this.pathscan_combined_lookup[ arr[py][px] ][ dir ];
						arr[py][px] = lookuprow[0]; dir = lookuprow[1]; px += lookuprow[2]; py += lookuprow[3];

						// Close path
						if( (px-1 === paths[pacnt].points[0].x ) && ( py-1 === paths[pacnt].points[0].y ) ){
							pathfinished = true;
							
							// Discarding paths shorter than pathomit
							if( paths[pacnt].points.length < pathomit ){
								paths.pop();
							}else{
							
								paths[pacnt].isholepath = holepath ? true : false;
								
								// Finding the parent shape for this hole
								if(holepath){
									
									var parentidx = 0, parentbbox = [-1,-1,w+1,h+1];
									for(var parentcnt=0; parentcnt < pacnt; parentcnt++){
										if( (!paths[parentcnt].isholepath) &&
											_this.boundingboxincludes( paths[parentcnt].boundingbox , paths[pacnt].boundingbox ) &&
											_this.boundingboxincludes( parentbbox , paths[parentcnt].boundingbox ) &&
											_this.pointinpoly( paths[pacnt].points[0], paths[parentcnt].points )
										){
											parentidx = parentcnt;
											parentbbox = paths[parentcnt].boundingbox;
										}
									}
									
									paths[parentidx].holechildren.push( pacnt );
									
								}// End of holepath parent finding
								
								pacnt++;
							
							}
							
						}// End of Close path
						
						pcnt++;
						
					}// End of Path points loop
					
				}// End of Follow path
				
			}// End of i loop
		}// End of j loop
		
		return paths;
	},// End of pathscan()
	
	this.boundingboxincludes = function( parentbbox, childbbox ){
		return ( ( parentbbox[0] < childbbox[0] ) && ( parentbbox[1] < childbbox[1] ) && ( parentbbox[2] > childbbox[2] ) && ( parentbbox[3] > childbbox[3] ) );
	},// End of boundingboxincludes()
	
	// 3. Batch pathscan
	this.batchpathscan = function( layers, pathomit ){
		var bpaths = [];
		for(var k in layers){
			if(!layers.hasOwnProperty(k)){ continue; }
			bpaths[k] = _this.pathscan( layers[k], pathomit );
		}
		return bpaths;
	},
	
	// 4. interpollating between path points for nodes with 8 directions ( East, SouthEast, S, SW, W, NW, N, NE )
	this.internodes = function( paths, options ){
		var ins = [], palen=0, nextidx=0, nextidx2=0, previdx=0, previdx2=0, pacnt, pcnt;
		
		// paths loop
		for(pacnt=0; pacnt<paths.length; pacnt++){
			
			ins[pacnt] = {};
			ins[pacnt].points = [];
			ins[pacnt].boundingbox = paths[pacnt].boundingbox;
			ins[pacnt].holechildren = paths[pacnt].holechildren;
			ins[pacnt].isholepath = paths[pacnt].isholepath;
			palen = paths[pacnt].points.length;
			
			// pathpoints loop
			for(pcnt=0; pcnt<palen; pcnt++){
			
				// next and previous point indexes
				nextidx = (pcnt+1)%palen; nextidx2 = (pcnt+2)%palen; previdx = (pcnt-1+palen)%palen; previdx2 = (pcnt-2+palen)%palen;
				
				// right angle enhance
				if( options.rightangleenhance && _this.testrightangle( paths[pacnt], previdx2, previdx, pcnt, nextidx, nextidx2 ) ){
					
					// Fix previous direction
					if(ins[pacnt].points.length > 0){
						ins[pacnt].points[ ins[pacnt].points.length-1 ].linesegment = _this.getdirection(
								ins[pacnt].points[ ins[pacnt].points.length-1 ].x,
								ins[pacnt].points[ ins[pacnt].points.length-1 ].y,
								paths[pacnt].points[pcnt].x,
								paths[pacnt].points[pcnt].y
							);
					}
					
					// This corner point
					ins[pacnt].points.push({
						x : paths[pacnt].points[pcnt].x,
						y : paths[pacnt].points[pcnt].y,
						linesegment : _this.getdirection(
								paths[pacnt].points[pcnt].x,
								paths[pacnt].points[pcnt].y,
								(( paths[pacnt].points[pcnt].x + paths[pacnt].points[nextidx].x ) /2),
								(( paths[pacnt].points[pcnt].y + paths[pacnt].points[nextidx].y ) /2)
							)
					});
					
				}// End of right angle enhance
				
				// interpolate between two path points
				ins[pacnt].points.push({
					x : (( paths[pacnt].points[pcnt].x + paths[pacnt].points[nextidx].x ) /2),
					y : (( paths[pacnt].points[pcnt].y + paths[pacnt].points[nextidx].y ) /2),
					linesegment : _this.getdirection(
							(( paths[pacnt].points[pcnt].x + paths[pacnt].points[nextidx].x ) /2),
							(( paths[pacnt].points[pcnt].y + paths[pacnt].points[nextidx].y ) /2),
							(( paths[pacnt].points[nextidx].x + paths[pacnt].points[nextidx2].x ) /2),
							(( paths[pacnt].points[nextidx].y + paths[pacnt].points[nextidx2].y ) /2)
						)
				});
				
			}// End of pathpoints loop
						
		}// End of paths loop
		
		return ins;
	},// End of internodes()
	
	this.testrightangle = function( path, idx1, idx2, idx3, idx4, idx5 ){
		return ( (( path.points[idx3].x === path.points[idx1].x) &&
				  ( path.points[idx3].x === path.points[idx2].x) &&
				  ( path.points[idx3].y === path.points[idx4].y) &&
				  ( path.points[idx3].y === path.points[idx5].y)
				 ) ||
				 (( path.points[idx3].y === path.points[idx1].y) &&
				  ( path.points[idx3].y === path.points[idx2].y) &&
				  ( path.points[idx3].x === path.points[idx4].x) &&
				  ( path.points[idx3].x === path.points[idx5].x)
				 )
		);
	},// End of testrightangle()
	
	this.getdirection = function( x1, y1, x2, y2 ){
		var val = 8;
		if(x1 < x2){
			if     (y1 < y2){ val = 1; }// SouthEast
			else if(y1 > y2){ val = 7; }// NE
			else            { val = 0; }// E
		}else if(x1 > x2){
			if     (y1 < y2){ val = 3; }// SW
			else if(y1 > y2){ val = 5; }// NW
			else            { val = 4; }// W
		}else{
			if     (y1 < y2){ val = 2; }// S
			else if(y1 > y2){ val = 6; }// N
			else            { val = 8; }// center, this should not happen
		}
		return val;
	},// End of getdirection()
	
	// 4. Batch interpollation
	this.batchinternodes = function( bpaths, options ){
		var binternodes = [];
		for (var k in bpaths) {
			if(!bpaths.hasOwnProperty(k)){ continue; }
			binternodes[k] = _this.internodes(bpaths[k], options);
		}
		return binternodes;
	},
	
	// 5. tracepath() : recursively trying to fit straight and quadratic spline segments on the 8 direction internode path
	
	// 5.1. Find sequences of points with only 2 segment types
	// 5.2. Fit a straight line on the sequence
	// 5.3. If the straight line fails (distance error > ltres), find the point with the biggest error
	// 5.4. Fit a quadratic spline through errorpoint (project this to get controlpoint), then measure errors on every point in the sequence
	// 5.5. If the spline fails (distance error > qtres), find the point with the biggest error, set splitpoint = fitting point
	// 5.6. Split sequence and recursively apply 5.2. - 5.6. to startpoint-splitpoint and splitpoint-endpoint sequences
	
	this.tracepath = function( path, ltres, qtres ){
		var pcnt=0, segtype1, segtype2, seqend, smp = {};
		smp.segments = [];
		smp.boundingbox = path.boundingbox;
		smp.holechildren = path.holechildren;
		smp.isholepath = path.isholepath;
		
		while(pcnt < path.points.length){
			// 5.1. Find sequences of points with only 2 segment types
			segtype1 = path.points[pcnt].linesegment; segtype2 = -1; seqend=pcnt+1;
			while(
				((path.points[seqend].linesegment === segtype1) || (path.points[seqend].linesegment === segtype2) || (segtype2 === -1))
				&& (seqend < path.points.length-1) ){
				
				if((path.points[seqend].linesegment!==segtype1) && (segtype2===-1)){ segtype2 = path.points[seqend].linesegment; }
				seqend++;
				
			}
			if(seqend === path.points.length-1){ seqend = 0; }

			// 5.2. - 5.6. Split sequence and recursively apply 5.2. - 5.6. to startpoint-splitpoint and splitpoint-endpoint sequences
			smp.segments = smp.segments.concat( _this.fitseq(path, ltres, qtres, pcnt, seqend) );
			
			// forward pcnt;
			if(seqend>0){ pcnt = seqend; }else{ pcnt = path.points.length; }
			
		}// End of pcnt loop
		
		return smp;
	},// End of tracepath()
		
	// 5.2. - 5.6. recursively fitting a straight or quadratic line segment on this sequence of path nodes,
	// called from tracepath()
	this.fitseq = function( path, ltres, qtres, seqstart, seqend ){
		// return if invalid seqend
		if( (seqend>path.points.length) || (seqend<0) ){ return []; }
		// variables
		var errorpoint=seqstart, errorval=0, curvepass=true, px, py, dist2;
		var tl = (seqend-seqstart); if(tl<0){ tl += path.points.length; }
		var vx = (path.points[seqend].x-path.points[seqstart].x) / tl,
			vy = (path.points[seqend].y-path.points[seqstart].y) / tl;
		
		// 5.2. Fit a straight line on the sequence
		var pcnt = (seqstart+1) % path.points.length, pl;
		while(pcnt != seqend){
			pl = pcnt-seqstart; if(pl<0){ pl += path.points.length; }
			px = path.points[seqstart].x + vx * pl; py = path.points[seqstart].y + vy * pl;
			dist2 = (path.points[pcnt].x-px)*(path.points[pcnt].x-px) + (path.points[pcnt].y-py)*(path.points[pcnt].y-py);
			if(dist2>ltres){curvepass=false;}
			if(dist2>errorval){ errorpoint=pcnt; errorval=dist2; }
			pcnt = (pcnt+1)%path.points.length;
		}
		// return straight line if fits
		if(curvepass){ return [{ type:'L', x1:path.points[seqstart].x, y1:path.points[seqstart].y, x2:path.points[seqend].x, y2:path.points[seqend].y }]; }
		
		// 5.3. If the straight line fails (distance error>ltres), find the point with the biggest error
		var fitpoint = errorpoint; curvepass = true; errorval = 0;
		
		// 5.4. Fit a quadratic spline through this point, measure errors on every point in the sequence
		// helpers and projecting to get control point
		var t=(fitpoint-seqstart)/tl, t1=(1-t)*(1-t), t2=2*(1-t)*t, t3=t*t;
		var cpx = (t1*path.points[seqstart].x + t3*path.points[seqend].x - path.points[fitpoint].x)/-t2 ,
			cpy = (t1*path.points[seqstart].y + t3*path.points[seqend].y - path.points[fitpoint].y)/-t2 ;
		
		// Check every point
		pcnt = seqstart+1;
		while(pcnt != seqend){
			t=(pcnt-seqstart)/tl; t1=(1-t)*(1-t); t2=2*(1-t)*t; t3=t*t;
			px = t1 * path.points[seqstart].x + t2 * cpx + t3 * path.points[seqend].x;
			py = t1 * path.points[seqstart].y + t2 * cpy + t3 * path.points[seqend].y;
			
			dist2 = (path.points[pcnt].x-px)*(path.points[pcnt].x-px) + (path.points[pcnt].y-py)*(path.points[pcnt].y-py);
			
			if(dist2>qtres){curvepass=false;}
			if(dist2>errorval){ errorpoint=pcnt; errorval=dist2; }
			pcnt = (pcnt+1)%path.points.length;
		}
		// return spline if fits
		if(curvepass){ return [{ type:'Q', x1:path.points[seqstart].x, y1:path.points[seqstart].y, x2:cpx, y2:cpy, x3:path.points[seqend].x, y3:path.points[seqend].y }]; }
		// 5.5. If the spline fails (distance error>qtres), find the point with the biggest error
		var splitpoint = fitpoint; // Earlier: Math.floor((fitpoint + errorpoint)/2);
		
		// 5.6. Split sequence and recursively apply 5.2. - 5.6. to startpoint-splitpoint and splitpoint-endpoint sequences
		return _this.fitseq( path, ltres, qtres, seqstart, splitpoint ).concat(
				_this.fitseq( path, ltres, qtres, splitpoint, seqend ) );
		
	},// End of fitseq()
	
	// 5. Batch tracing paths
	this.batchtracepaths = function(internodepaths,ltres,qtres){
		var btracedpaths = [];
		for(var k in internodepaths){
			if(!internodepaths.hasOwnProperty(k)){ continue; }
			btracedpaths.push( _this.tracepath(internodepaths[k],ltres,qtres) );
		}
		return btracedpaths;
	},
	
	// 5. Batch tracing layers
	this.batchtracelayers = function(binternodes, ltres, qtres){
		var btbis = [];
		for(var k in binternodes){
			if(!binternodes.hasOwnProperty(k)){ continue; }
			btbis[k] = _this.batchtracepaths(binternodes[k], ltres, qtres);
		}
		return btbis;
	},
	
	////////////////////////////////////////////////////////////
	//
	//  SVG Drawing functions
	//
	////////////////////////////////////////////////////////////
	
	// Rounding to given decimals https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
	this.roundtodec = function(val,places){ return +val.toFixed(places); },
	
	// Getting SVG path element string from a traced path
	this.svgpathstring = function( tracedata, lnum, pathnum, options ){
		
		var layer = tracedata.layers[lnum], smp = layer[pathnum], str='', pcnt;
		
		// Line filter
		if(options.linefilter && (smp.segments.length < 3)){ return str; }
		
		// Starting path element, desc contains layer and path number
		str = '<path '+
			( options.desc ? ('desc="l '+lnum+' p '+pathnum+'" ') : '' ) +
			_this.tosvgcolorstr(tracedata.palette[lnum], options) +
			'd="';
		
		// Creating non-hole path string
		if( options.roundcoords === -1 ){
			str += 'M '+ smp.segments[0].x1 * options.scale +' '+ smp.segments[0].y1 * options.scale +' ';
			for(pcnt=0; pcnt<smp.segments.length; pcnt++){
				str += smp.segments[pcnt].type +' '+ smp.segments[pcnt].x2 * options.scale +' '+ smp.segments[pcnt].y2 * options.scale +' ';
				if(smp.segments[pcnt].hasOwnProperty('x3')){
					str += smp.segments[pcnt].x3 * options.scale +' '+ smp.segments[pcnt].y3 * options.scale +' ';
				}
			}
			str += 'Z ';
		}else{
			str += 'M '+ _this.roundtodec( smp.segments[0].x1 * options.scale, options.roundcoords ) +' '+ _this.roundtodec( smp.segments[0].y1 * options.scale, options.roundcoords ) +' ';
			for(pcnt=0; pcnt<smp.segments.length; pcnt++){
				str += smp.segments[pcnt].type +' '+ _this.roundtodec( smp.segments[pcnt].x2 * options.scale, options.roundcoords ) +' '+ _this.roundtodec( smp.segments[pcnt].y2 * options.scale, options.roundcoords ) +' ';
				if(smp.segments[pcnt].hasOwnProperty('x3')){
					str += _this.roundtodec( smp.segments[pcnt].x3 * options.scale, options.roundcoords ) +' '+ _this.roundtodec( smp.segments[pcnt].y3 * options.scale, options.roundcoords ) +' ';
				}
			}
			str += 'Z ';
		}// End of creating non-hole path string
		
		// Hole children
		for( var hcnt=0; hcnt < smp.holechildren.length; hcnt++){
			var hsmp = layer[ smp.holechildren[hcnt] ];
			// Creating hole path string
			if( options.roundcoords === -1 ){
				
				if(hsmp.segments[ hsmp.segments.length-1 ].hasOwnProperty('x3')){
					str += 'M '+ hsmp.segments[ hsmp.segments.length-1 ].x3 * options.scale +' '+ hsmp.segments[ hsmp.segments.length-1 ].y3 * options.scale +' ';
				}else{
					str += 'M '+ hsmp.segments[ hsmp.segments.length-1 ].x2 * options.scale +' '+ hsmp.segments[ hsmp.segments.length-1 ].y2 * options.scale +' ';
				}
				
				for(pcnt = hsmp.segments.length-1; pcnt >= 0; pcnt--){
					str += hsmp.segments[pcnt].type +' ';
					if(hsmp.segments[pcnt].hasOwnProperty('x3')){
						str += hsmp.segments[pcnt].x2 * options.scale +' '+ hsmp.segments[pcnt].y2 * options.scale +' ';
					}
					
					str += hsmp.segments[pcnt].x1 * options.scale +' '+ hsmp.segments[pcnt].y1 * options.scale +' ';
				}
				
			}else{
				
				if(hsmp.segments[ hsmp.segments.length-1 ].hasOwnProperty('x3')){
					str += 'M '+ _this.roundtodec( hsmp.segments[ hsmp.segments.length-1 ].x3 * options.scale ) +' '+ _this.roundtodec( hsmp.segments[ hsmp.segments.length-1 ].y3 * options.scale ) +' ';
				}else{
					str += 'M '+ _this.roundtodec( hsmp.segments[ hsmp.segments.length-1 ].x2 * options.scale ) +' '+ _this.roundtodec( hsmp.segments[ hsmp.segments.length-1 ].y2 * options.scale ) +' ';
				}
				
				for(pcnt = hsmp.segments.length-1; pcnt >= 0; pcnt--){
					str += hsmp.segments[pcnt].type +' ';
					if(hsmp.segments[pcnt].hasOwnProperty('x3')){
						str += _this.roundtodec( hsmp.segments[pcnt].x2 * options.scale ) +' '+ _this.roundtodec( hsmp.segments[pcnt].y2 * options.scale ) +' ';
					}
					str += _this.roundtodec( hsmp.segments[pcnt].x1 * options.scale ) +' '+ _this.roundtodec( hsmp.segments[pcnt].y1 * options.scale ) +' ';
				}
				
				
			}// End of creating hole path string
			
			str += 'Z '; // Close path
			
		}// End of holepath check
		
		// Closing path element
		str += '" />';
		
		// Rendering control points
		if(options.lcpr || options.qcpr){
			for(pcnt=0; pcnt<smp.segments.length; pcnt++){
				if( smp.segments[pcnt].hasOwnProperty('x3') && options.qcpr ){
					str += '<circle cx="'+ smp.segments[pcnt].x2 * options.scale +'" cy="'+ smp.segments[pcnt].y2 * options.scale +'" r="'+ options.qcpr +'" fill="cyan" stroke-width="'+ options.qcpr * 0.2 +'" stroke="black" />';
					str += '<circle cx="'+ smp.segments[pcnt].x3 * options.scale +'" cy="'+ smp.segments[pcnt].y3 * options.scale +'" r="'+ options.qcpr +'" fill="white" stroke-width="'+ options.qcpr * 0.2 +'" stroke="black" />';
					str += '<line x1="'+ smp.segments[pcnt].x1 * options.scale +'" y1="'+ smp.segments[pcnt].y1 * options.scale +'" x2="'+ smp.segments[pcnt].x2 * options.scale +'" y2="'+ smp.segments[pcnt].y2 * options.scale +'" stroke-width="'+ options.qcpr * 0.2 +'" stroke="cyan" />';
					str += '<line x1="'+ smp.segments[pcnt].x2 * options.scale +'" y1="'+ smp.segments[pcnt].y2 * options.scale +'" x2="'+ smp.segments[pcnt].x3 * options.scale +'" y2="'+ smp.segments[pcnt].y3 * options.scale +'" stroke-width="'+ options.qcpr * 0.2 +'" stroke="cyan" />';
				}
				if( (!smp.segments[pcnt].hasOwnProperty('x3')) && options.lcpr){
					str += '<circle cx="'+ smp.segments[pcnt].x2 * options.scale +'" cy="'+ smp.segments[pcnt].y2 * options.scale +'" r="'+ options.lcpr +'" fill="white" stroke-width="'+ options.lcpr * 0.2 +'" stroke="black" />';
				}
			}
			
			// Hole children control points
			for( var hcnt=0; hcnt < smp.holechildren.length; hcnt++){
				var hsmp = layer[ smp.holechildren[hcnt] ];
				for(pcnt=0; pcnt<hsmp.segments.length; pcnt++){
					if( hsmp.segments[pcnt].hasOwnProperty('x3') && options.qcpr ){
						str += '<circle cx="'+ hsmp.segments[pcnt].x2 * options.scale +'" cy="'+ hsmp.segments[pcnt].y2 * options.scale +'" r="'+ options.qcpr +'" fill="cyan" stroke-width="'+ options.qcpr * 0.2 +'" stroke="black" />';
						str += '<circle cx="'+ hsmp.segments[pcnt].x3 * options.scale +'" cy="'+ hsmp.segments[pcnt].y3 * options.scale +'" r="'+ options.qcpr +'" fill="white" stroke-width="'+ options.qcpr * 0.2 +'" stroke="black" />';
						str += '<line x1="'+ hsmp.segments[pcnt].x1 * options.scale +'" y1="'+ hsmp.segments[pcnt].y1 * options.scale +'" x2="'+ hsmp.segments[pcnt].x2 * options.scale +'" y2="'+ hsmp.segments[pcnt].y2 * options.scale +'" stroke-width="'+ options.qcpr * 0.2 +'" stroke="cyan" />';
						str += '<line x1="'+ hsmp.segments[pcnt].x2 * options.scale +'" y1="'+ hsmp.segments[pcnt].y2 * options.scale +'" x2="'+ hsmp.segments[pcnt].x3 * options.scale +'" y2="'+ hsmp.segments[pcnt].y3 * options.scale +'" stroke-width="'+ options.qcpr * 0.2 +'" stroke="cyan" />';
					}
					if( (!hsmp.segments[pcnt].hasOwnProperty('x3')) && options.lcpr){
						str += '<circle cx="'+ hsmp.segments[pcnt].x2 * options.scale +'" cy="'+ hsmp.segments[pcnt].y2 * options.scale +'" r="'+ options.lcpr +'" fill="white" stroke-width="'+ options.lcpr * 0.2 +'" stroke="black" />';
					}
				}
			}
		}// End of Rendering control points
			
		return str;
		
	},// End of svgpathstring()
	
	// Converting tracedata to an SVG string
	this.getsvgstring = function( tracedata, options ){
		
		options = _this.checkoptions(options);
		
		var w = tracedata.width * options.scale, h = tracedata.height * options.scale;
		
		// SVG start
		var svgstr = '<svg ' + (options.viewbox ? ('viewBox="0 0 '+w+' '+h+'" ') : ('width="'+w+'" height="'+h+'" ')) +
			'version="1.1" xmlns="http://www.w3.org/2000/svg" desc="Created with imagetracer.js version '+_this.versionnumber+'" >';

		// Drawing: Layers and Paths loops
		for(var lcnt=0; lcnt < tracedata.layers.length; lcnt++){
			for(var pcnt=0; pcnt < tracedata.layers[lcnt].length; pcnt++){
				
				// Adding SVG <path> string
				if( !tracedata.layers[lcnt][pcnt].isholepath ){
					svgstr += _this.svgpathstring( tracedata, lcnt, pcnt, options );
				}
					
			}// End of paths loop
		}// End of layers loop
		
		// SVG End
		svgstr+='</svg>';
		
		return svgstr;
		
	},// End of getsvgstring()
	
	// Comparator for numeric Array.sort
	this.compareNumbers = function(a,b){ return a - b; },
	
	// Convert color object to rgba string
	this.torgbastr = function(c){ return 'rgba('+c.r+','+c.g+','+c.b+','+c.a+')'; },
	
	// Convert color object to SVG color string
	this.tosvgcolorstr = function(c, options){
		return 'fill="rgb('+c.r+','+c.g+','+c.b+')" stroke="rgb('+c.r+','+c.g+','+c.b+')" stroke-width="'+options.strokewidth+'" opacity="'+c.a/255.0+'" ';
	},
	
	// Helper function: Appending an <svg> element to a container from an svgstring
	this.appendSVGString = function(svgstr,parentid){
		var div;
		if(parentid){
			div = document.getElementById(parentid);
			if(!div){
				div = document.createElement('div');
				div.id = parentid;
				document.body.appendChild(div);
			}
		}else{
			div = document.createElement('div');
			document.body.appendChild(div);
		}
		div.innerHTML += svgstr;
	},
	
	////////////////////////////////////////////////////////////
	//
	//  Canvas functions
	//
	////////////////////////////////////////////////////////////
	
	// Gaussian kernels for blur
	this.gks = [ [0.27901,0.44198,0.27901], [0.135336,0.228569,0.272192,0.228569,0.135336], [0.086776,0.136394,0.178908,0.195843,0.178908,0.136394,0.086776],
	             [0.063327,0.093095,0.122589,0.144599,0.152781,0.144599,0.122589,0.093095,0.063327], [0.049692,0.069304,0.089767,0.107988,0.120651,0.125194,0.120651,0.107988,0.089767,0.069304,0.049692] ],
	
	// Selective Gaussian blur for preprocessing
	this.blur = function(imgd,radius,delta){
		var i,j,k,d,idx,racc,gacc,bacc,aacc,wacc;
		
		// new ImageData
		var imgd2 = { width:imgd.width, height:imgd.height, data:[] };
		
		// radius and delta limits, this kernel
		radius = Math.floor(radius); if(radius<1){ return imgd; } if(radius>5){ radius = 5; } delta = Math.abs( delta ); if(delta>1024){ delta = 1024; }
		var thisgk = _this.gks[radius-1];
		
		// loop through all pixels, horizontal blur
		for( j=0; j < imgd.height; j++ ){
			for( i=0; i < imgd.width; i++ ){

				racc = 0; gacc = 0; bacc = 0; aacc = 0; wacc = 0;
				// gauss kernel loop
				for( k = -radius; k < radius+1; k++){
					// add weighted color values
					if( (i+k > 0) && (i+k < imgd.width) ){
						idx = (j*imgd.width+i+k)*4;
						racc += imgd.data[idx  ] * thisgk[k+radius];
						gacc += imgd.data[idx+1] * thisgk[k+radius];
						bacc += imgd.data[idx+2] * thisgk[k+radius];
						aacc += imgd.data[idx+3] * thisgk[k+radius];
						wacc += thisgk[k+radius];
					}
				}
				// The new pixel
				idx = (j*imgd.width+i)*4;
				imgd2.data[idx  ] = Math.floor(racc / wacc);
				imgd2.data[idx+1] = Math.floor(gacc / wacc);
				imgd2.data[idx+2] = Math.floor(bacc / wacc);
				imgd2.data[idx+3] = Math.floor(aacc / wacc);
				
			}// End of width loop
		}// End of horizontal blur
		
		// copying the half blurred imgd2
		var himgd = new Uint8ClampedArray(imgd2.data);
		
		// loop through all pixels, vertical blur
		for( j=0; j < imgd.height; j++ ){
			for( i=0; i < imgd.width; i++ ){

				racc = 0; gacc = 0; bacc = 0; aacc = 0; wacc = 0;
				// gauss kernel loop
				for( k = -radius; k < radius+1; k++){
					// add weighted color values
					if( (j+k > 0) && (j+k < imgd.height) ){
						idx = ((j+k)*imgd.width+i)*4;
						racc += himgd[idx  ] * thisgk[k+radius];
						gacc += himgd[idx+1] * thisgk[k+radius];
						bacc += himgd[idx+2] * thisgk[k+radius];
						aacc += himgd[idx+3] * thisgk[k+radius];
						wacc += thisgk[k+radius];
					}
				}
				// The new pixel
				idx = (j*imgd.width+i)*4;
				imgd2.data[idx  ] = Math.floor(racc / wacc);
				imgd2.data[idx+1] = Math.floor(gacc / wacc);
				imgd2.data[idx+2] = Math.floor(bacc / wacc);
				imgd2.data[idx+3] = Math.floor(aacc / wacc);
				
			}// End of width loop
		}// End of vertical blur
		
		// Selective blur: loop through all pixels
		for( j=0; j < imgd.height; j++ ){
			for( i=0; i < imgd.width; i++ ){
				
				idx = (j*imgd.width+i)*4;
				// d is the difference between the blurred and the original pixel
				d = Math.abs(imgd2.data[idx  ] - imgd.data[idx  ]) + Math.abs(imgd2.data[idx+1] - imgd.data[idx+1]) +
					Math.abs(imgd2.data[idx+2] - imgd.data[idx+2]) + Math.abs(imgd2.data[idx+3] - imgd.data[idx+3]);
				// selective blur: if d>delta, put the original pixel back
				if(d>delta){
					imgd2.data[idx  ] = imgd.data[idx  ];
					imgd2.data[idx+1] = imgd.data[idx+1];
					imgd2.data[idx+2] = imgd.data[idx+2];
					imgd2.data[idx+3] = imgd.data[idx+3];
				}
			}
		}// End of Selective blur
		
		return imgd2;
		
	},// End of blur()
	
	// Helper function: loading an image from a URL, then executing callback with canvas as argument
	this.loadImage = function(url,callback,options){
		var img = new Image();
		if(options && options.corsenabled){ img.crossOrigin = 'Anonymous'; }
		img.onload = function(){
			var canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;
			var context = canvas.getContext('2d');
			context.drawImage(img,0,0);
			callback(canvas);
		};
		img.src = url;
	},
	
	// Helper function: getting ImageData from a canvas
	this.getImgdata = function(canvas){
		var context = canvas.getContext('2d');
		return context.getImageData(0,0,canvas.width,canvas.height);
	},
	
	// Special palette to use with drawlayers()
	this.specpalette = [
		{r:0,g:0,b:0,a:255}, {r:128,g:128,b:128,a:255}, {r:0,g:0,b:128,a:255}, {r:64,g:64,b:128,a:255},
		{r:192,g:192,b:192,a:255}, {r:255,g:255,b:255,a:255}, {r:128,g:128,b:192,a:255}, {r:0,g:0,b:192,a:255},
		{r:128,g:0,b:0,a:255}, {r:128,g:64,b:64,a:255}, {r:128,g:0,b:128,a:255}, {r:168,g:168,b:168,a:255},
		{r:192,g:128,b:128,a:255}, {r:192,g:0,b:0,a:255}, {r:255,g:255,b:255,a:255}, {r:0,g:128,b:0,a:255}
	],
	
	// Helper function: Drawing all edge node layers into a container
	this.drawLayers = function(layers,palette,scale,parentid){
		scale = scale||1;
		var w,h,i,j,k;
		
		// Preparing container
		var div;
		if(parentid){
			div = document.getElementById(parentid);
			if(!div){
				div = document.createElement('div');
				div.id = parentid;
				document.body.appendChild(div);
			}
		}else{
			div = document.createElement('div');
			document.body.appendChild(div);
		}
		
		// Layers loop
		for (k in layers) {
			if(!layers.hasOwnProperty(k)){ continue; }
			
			// width, height
			w=layers[k][0].length; h=layers[k].length;
			
			// Creating new canvas for every layer
			var canvas = document.createElement('canvas'); canvas.width=w*scale; canvas.height=h*scale;
			var context = canvas.getContext('2d');
			
			// Drawing
			for(j=0; j<h; j++){
				for(i=0; i<w; i++){
					context.fillStyle = _this.torgbastr(palette[ layers[k][j][i]%palette.length ]);
					context.fillRect(i*scale,j*scale,scale,scale);
				}
			}
			
			// Appending canvas to container
			div.appendChild(canvas);
		}// End of Layers loop
	}// End of drawlayers
	
	;// End of function list
	
}// End of ImageTracer object

// export as AMD module / Node module / browser or worker variable
if(typeof define === 'function' && define.amd){
	define(function() { return new ImageTracer(); });
}else if(typeof module !== 'undefined'){
	module.exports = new ImageTracer();
}else if(typeof self !== 'undefined'){
	self.ImageTracer = new ImageTracer();
}else window.ImageTracer = new ImageTracer();

})();
/* Smooth outline fitting: corners kept sharp, everything else fitted with as few cubic Béziers as possible
   (Schneider's algorithm, as used by vector tracers). Input: closed list of pixel-edge points. */
var FIT = (function(){
  function V(x,y){ return {x:x,y:y}; }
  function add(a,b){ return V(a.x+b.x,a.y+b.y); } function sub(a,b){ return V(a.x-b.x,a.y-b.y); }
  function mul(a,s){ return V(a.x*s,a.y*s); } function dot(a,b){ return a.x*b.x+a.y*b.y; }
  function len(a){ return Math.sqrt(a.x*a.x+a.y*a.y); } function dist(a,b){ return len(sub(a,b)); }
  function norm(a){ var l=len(a); return l>1e-9? V(a.x/l,a.y/l) : V(0,0); }
  function bez(b,t){ var mt=1-t; return V(mt*mt*mt*b[0].x+3*mt*mt*t*b[1].x+3*mt*t*t*b[2].x+t*t*t*b[3].x, mt*mt*mt*b[0].y+3*mt*mt*t*b[1].y+3*mt*t*t*b[2].y+t*t*t*b[3].y); }
  function bezD1(b,t){ var mt=1-t; return V(3*mt*mt*(b[1].x-b[0].x)+6*mt*t*(b[2].x-b[1].x)+3*t*t*(b[3].x-b[2].x), 3*mt*mt*(b[1].y-b[0].y)+6*mt*t*(b[2].y-b[1].y)+3*t*t*(b[3].y-b[2].y)); }
  function bezD2(b,t){ var mt=1-t; return V(6*mt*(b[2].x-2*b[1].x+b[0].x)+6*t*(b[3].x-2*b[2].x+b[1].x), 6*mt*(b[2].y-2*b[1].y+b[0].y)+6*t*(b[3].y-2*b[2].y+b[1].y)); }

  function chordParams(d){ var u=[0]; for(var i=1;i<d.length;i++) u.push(u[i-1]+dist(d[i],d[i-1])); var L=u[u.length-1]||1; for(i=0;i<u.length;i++) u[i]/=L; return u; }
  function generate(d,u,t1,t2){
    var p0=d[0], p3=d[d.length-1], C=[[0,0],[0,0]], X=[0,0];
    for(var i=0;i<d.length;i++){ var t=u[i], mt=1-t, b1=3*t*mt*mt, b2=3*t*t*mt, a1=mul(t1,b1), a2=mul(t2,b2);
      C[0][0]+=dot(a1,a1); C[0][1]+=dot(a1,a2); C[1][1]+=dot(a2,a2);
      var tmp=sub(d[i], add(mul(p0,mt*mt*mt+b1), mul(p3,b2+t*t*t)));
      X[0]+=dot(a1,tmp); X[1]+=dot(a2,tmp); }
    C[1][0]=C[0][1];
    var det=C[0][0]*C[1][1]-C[1][0]*C[0][1], al=0, ar=0;
    if(Math.abs(det)>1e-12){ al=(X[0]*C[1][1]-X[1]*C[0][1])/det; ar=(C[0][0]*X[1]-C[1][0]*X[0])/det; }
    var seg=dist(p0,p3), eps=1e-6*seg;
    if(al<eps||ar<eps||al>seg*2||ar>seg*2){ al=ar=seg/3; }
    return [p0, add(p0,mul(t1,al)), add(p3,mul(t2,ar)), p3];
  }
  function maxErr(d,b,u){ var m=0, s=Math.floor(d.length/2); for(var i=1;i<d.length-1;i++){ var e=sub(bez(b,u[i]),d[i]), q=dot(e,e); if(q>=m){ m=q; s=i; } } return [m,s]; }
  function reparam(d,b,u){ return u.map(function(t,i){ var p=sub(bez(b,t),d[i]), d1=bezD1(b,t), d2=bezD2(b,t), den=dot(d1,d1)+dot(p,d2); if(Math.abs(den)<1e-12) return t; var n=t-dot(p,d1)/den; return n<0?0:n>1?1:n; }); }
  function fitCubic(d,t1,t2,err2,out,depth){
    if(d.length===2){ var s=dist(d[0],d[1])/3; out.push([d[0],add(d[0],mul(t1,s)),add(d[1],mul(t2,s)),d[1]]); return; }
    var u=chordParams(d), b=generate(d,u,t1,t2), r=maxErr(d,b,u);
    if(r[0]<err2){ out.push(b); return; }
    if(r[0]<err2*16){ for(var it=0;it<12;it++){ u=reparam(d,b,u); b=generate(d,u,t1,t2); r=maxErr(d,b,u); if(r[0]<err2){ out.push(b); return; } } }
    var sp=Math.max(1,Math.min(d.length-2,r[1]));
    if(depth>40){ for(var k=1;k<d.length;k++) out.push([d[k-1],d[k-1],d[k],d[k]]); return; }
    var tc=norm(sub(d[sp-1],d[sp+1]));
    if(len(tc)===0) tc=norm(sub(d[sp-1],d[sp]));
    fitCubic(d.slice(0,sp+1),t1,tc,err2,out,depth+1);
    fitCubic(d.slice(sp),mul(tc,-1),t2,err2,out,depth+1);
  }
  function endTangent(d,fromStart){ var n=Math.min(d.length-1,4), acc=V(0,0);
    for(var i=1;i<=n;i++) acc=add(acc, fromStart? sub(d[i],d[0]) : sub(d[d.length-1-i],d[d.length-1]));
    return norm(acc); }
  function isStraight(d,tol){ var a=d[0], b=d[d.length-1], ab=sub(b,a), L=len(ab); if(L<1e-9) return false;
    for(var i=1;i<d.length-1;i++){ var ap=sub(d[i],a), cr=Math.abs(ab.x*ap.y-ab.y*ap.x)/L; if(cr>tol) return false; } return true; }

  /* Split a span into straight runs (emitted as lines) and curved stretches (fitted as Béziers that join the lines smoothly). */
  var OPT=null;
  function pushLine(segs,p,q){ segs.push({type:'L',x1:p.x,y1:p.y,x2:q.x,y2:q.y}); }
  function pushCurves(segs,d,t1,t2){
    if(d.length<2) return;
    var chord=norm(sub(d[d.length-1],d[0]));
    var tangentsAlong = dot(t1,chord)>0.995 && dot(mul(t2,-1),chord)>0.995;
    if((d.length>3 && isStraight(d, OPT.lineTol*0.6)) || (d.length<=3 && tangentsAlong)){ pushLine(segs,d[0],d[d.length-1]); return; }
    if(d.length<=3){ var s3=dist(d[0],d[d.length-1])/3; var b3=[d[0],add(d[0],mul(t1,s3)),add(d[d.length-1],mul(t2,s3)),d[d.length-1]];
      segs.push({type:'C',x1:b3[0].x,y1:b3[0].y,x2:b3[1].x,y2:b3[1].y,x3:b3[2].x,y3:b3[2].y,x4:b3[3].x,y4:b3[3].y}); return; }
    var out=[]; fitCubic(d,t1,t2,OPT.tol*OPT.tol,out,0);
    for(var q=0;q<out.length;q++){ var b=out[q];
      if(isStraight([b[0],b[1],b[2],b[3]], OPT.tol*0.2)) pushLine(segs,b[0],b[3]);
      else segs.push({type:'C',x1:b[0].x,y1:b[0].y,x2:b[1].x,y2:b[1].y,x3:b[2].x,y3:b[2].y,x4:b[3].x,y4:b[3].y}); }
  }
  // A real straight edge only has pixel noise around its chord; an arc bulges consistently to one side.
  function isStraightRun(d,tol,bias){ var a=d[0], b=d[d.length-1], ab=sub(b,a), L=len(ab); if(L<1e-9) return false; var sum=0;
    var m=d.length-2, half=Math.floor(m/2), s1=0;
    for(var i=1;i<d.length-1;i++){ var ap=sub(d[i],a), cr=(ab.x*ap.y-ab.y*ap.x)/L; if(Math.abs(cr)>tol) return false; sum+=cr; if(i<=half) s1+=cr; }
    if(m<1) return true;
    // check each half too, so an S-shaped stretch (bulges cancel out) is not taken as straight
    return Math.abs(sum/m)<=bias && (half<4 || (Math.abs(s1/half)<=bias*1.5 && Math.abs((sum-s1)/(m-half))<=bias*1.5)); }
  function fitSpan(d,t1,t2,segs){
    var n=d.length, runs=[], i=0;
    while(i<n-2){ var best=-1, j=i+2;
      while(j<n && isStraightRun(d.slice(i,j+1),OPT.lineTol,OPT.lineBias)){ best=j; j++; }
      if(best>=0 && dist(d[i],d[best])>=OPT.minLine){ runs.push([i,best]); i=best; } else i++; }
    // Pull each run back from neighbouring curves so the curve starts on the straight part (no kink at the join).
    var trim=OPT.trim||3;
    runs=runs.map(function(r){ var a=r[0], b=r[1]; if(a>0) a=Math.min(b,a+trim); if(b<n-1) b=Math.max(a,b-trim); return [a,b]; })
             .filter(function(r){ return dist(d[r[0]],d[r[1]])>=OPT.minLine*0.6; });
    if(!runs.length){ pushCurves(segs,d,t1,t2); return; }
    var pos=0, tin=t1;
    for(var r=0;r<runs.length;r++){ var a=runs[r][0], b=runs[r][1], dir=norm(sub(d[b],d[a]));
      if(a>pos) pushCurves(segs,d.slice(pos,a+1), pos===0? t1 : tin, mul(dir,-1));
      pushLine(segs,d[a],d[b]); pos=b; tin=dir; }
    if(pos<n-1) pushCurves(segs,d.slice(pos), tin, t2);
  }

  // A real corner: the outline passes through the point where the incoming and outgoing edges meet.
  // A rounded join (serif bracket, bowl) cuts inside that point; those stay one continuous curve.
  function lineDir(pts,from,to,n){ var acc=V(0,0), c=0; for(var j=from;j<to;j++){ acc=add(acc,sub(pts[((j+1)%n+n)%n],pts[((j)%n+n)%n])); c++; } return norm(acc); }
  function isSharp(pts,i,K,n,cut){
    var a=pts[((i-K)%n+n)%n], b=pts[(i+K)%n];
    var d1=lineDir(pts,i-2*K,i-K,n), d2=lineDir(pts,i+K,i+2*K,n);
    var den=d1.x*d2.y-d1.y*d2.x; if(Math.abs(den)<1e-6) return false;
    var ab=sub(b,a), t=(ab.x*d2.y-ab.y*d2.x)/den; var X=add(a,mul(d1,t));
    var best=1e9; for(var j=-K;j<=K;j++){ var q=pts[((i+j)%n+n)%n]; best=Math.min(best,dist(q,X)); }
    return best<=cut;
  }
  /* pts: closed contour (no repeated end point). Returns segments [{type:'C'|'L', x1,y1,...}] */
  function fitClosed(pts, opt){
    var n=pts.length; if(n<3) return null;
    // Size rounding to the shape: a contour's typical stroke width is about 2 x area / perimeter. Small lettering gets
    // only a light touch, and crisp artwork keeps its flat stroke ends and sharp corners (round ends are only added when
    // the source was blurry and enlarged).
    var ar=0, pr=0; for(var q=0;q<n;q++){ var P0=pts[q], P1=pts[(q+1)%n]; ar+=P0.x*P1.y-P1.x*P0.y; pr+=Math.hypot(P1.x-P0.x,P1.y-P0.y); }
    var sw=pr>0? Math.abs(ar)/pr : 0; // = half the stroke width
    var o2={}; for(var kk in opt) o2[kk]=opt[kk];
    o2.capLen = opt.sharp? 0 : Math.min(opt.capLen, 2.6*sw);
    o2.round = Math.min(opt.round, (opt.sharp? 0.12 : 0.5)*sw);
    opt=o2;
    // Stroke ends: where the outline reverses direction within a short distance (a serif or stroke end),
    // replace the end with a semicircle so it finishes as a round "U" instead of a flat or pointed end.
    if(opt.capLen>0 && n>4*opt.capLen){
      pts=pts.map(function(p){ return V(p.x,p.y); });
      var W=Math.max(2,Math.round(opt.capLen/2)), isEnd=new Uint8Array(n);
      var tan=function(i){ return norm(sub(pts[(i+1)%n],pts[((i-1)%n+n)%n])); };
      var Wmax=Math.max(W+1,Math.round(opt.capLen));
      for(var i0=0;i0<n;i0++){ for(var Wt=W;Wt<=Wmax;Wt++){ var ia=((i0-Wt)%n+n)%n, ib=(i0+Wt)%n;
        if(dot(tan(ia),tan(ib))<-0.8 && dist(pts[ia],pts[ib])<=opt.capLen*1.1){
          var mid0=mul(add(pts[ia],pts[ib]),0.5), out0=sub(pts[i0],mid0); var tA=tan(ia);
          // convex end only: the tip lies ahead of the incoming direction
          if(dot(out0,tA)>0){ isEnd[i0]=Wt; break; } } } }
      var done=new Uint8Array(n);
      for(var s0=0;s0<n;s0++){ if(!isEnd[s0]||isEnd[(s0-1+n)%n]) continue; var e0=s0, cnt0=0; while(isEnd[(e0+1)%n]&&cnt0<n){ e0=(e0+1)%n; cnt0++; }
        var ic=(s0+Math.floor(cnt0/2))%n; if(done[ic]) continue;
        var Wc=isEnd[ic]||W, A0=((ic-Wc)%n+n)%n, B0=(ic+Wc)%n, Pa0=pts[A0], Pb0=pts[B0], M0=mul(add(Pa0,Pb0),0.5), r0=dist(Pa0,Pb0)/2; if(r0<0.5) continue;
        var e10=norm(sub(Pa0,M0)), u0=sub(pts[ic],M0); u0=norm(sub(u0,mul(e10,dot(u0,e10)))); if(len(u0)===0) continue;
        var depth0=dot(sub(pts[ic],M0),u0), ry0=Math.max(r0*0.7,Math.min(r0*1.15,depth0));
        for(var t0=1;t0<2*Wc;t0++){ var ph0=Math.PI*t0/(2*Wc); pts[(A0+t0)%n]=add(M0, add(mul(e10,r0*Math.cos(ph0)), mul(u0,ry0*Math.sin(ph0)))); done[(A0+t0)%n]=1; } }
    }
    OPT=opt; var tol=opt.tol, K=Math.max(2,Math.min(opt.k, Math.floor(n/4)));
    // corner detection on raw points
    var ang=new Float64Array(n);
    for(var i=0;i<n;i++){ var a=pts[(i-K+n)%n], p=pts[i], c=pts[(i+K)%n]; var v1=norm(sub(p,a)), v2=norm(sub(c,p)); var cs=dot(v1,v2); ang[i]=Math.acos(Math.max(-1,Math.min(1,cs))); }
    var corners=[];
    for(i=0;i<n;i++){ if(ang[i]<opt.cornerAngle) continue; var isMax=true;
      for(var j=1;j<=K;j++){ if(ang[(i+j)%n]>ang[i] || ang[(i-j+n)%n]>ang[i]){ isMax=false; break; } }
      if(isMax && opt.cornerCut>0 && !isSharp(pts,i,K,n,opt.cornerCut)) isMax=false;
      if(isMax && (!corners.length || i-corners[corners.length-1]>K)) corners.push(i); }
    if(corners.length>1 && (corners[0]+n)-corners[corners.length-1]<=K) corners.pop();
    // Round corners: replace the points around each corner by a smooth arc (quadratic Bézier through the corner),
    // so tips come out rounded like the original lettering and like a tufted mat can actually make.
    if(opt.round>0 && corners.length){
      pts=pts.map(function(p){ return V(p.x,p.y); });
      var cum=new Float64Array(n+1); for(i=1;i<=n;i++) cum[i]=cum[i-1]+dist(pts[i-1],pts[i%n]); var per=cum[n];
      var arcLen=function(i0,i1){ var d=cum[i1]-cum[i0]; return d<0? d+per : d; };
      var kept=[], used=new Uint8Array(corners.length);
      // Two corners close together = the flat end of a serif/stroke. Replace the whole end with one semicircle (a "U" end).
      if(opt.capLen>0 && corners.length>1){
        for(var pi=0;pi<corners.length;pi++){ var pj=(pi+1)%corners.length; if(used[pi]||used[pj]||pi===pj) continue;
          var c1=corners[pi], c2=corners[pj], gap=arcLen(c1,c2); if(gap>opt.capLen) continue;
          var back=Math.min(opt.round*0.6, arcLen(corners[(pi-1+corners.length)%corners.length],c1)*0.4);
          var fwd=Math.min(opt.round*0.6, arcLen(c2,corners[(pj+1)%corners.length])*0.4);
          var A=c1, B=c2, st=0; while(arcLen(A,c1)<back && st<n/4){ A=(A-1+n)%n; st++; } st=0; while(arcLen(c2,B)<fwd && st<n/4){ B=(B+1)%n; st++; }
          var mm=((B-A+n)%n); if(mm<3) continue;
          var Pa=pts[A], Pb=pts[B], M=mul(add(Pa,Pb),0.5), r=dist(Pa,Pb)/2; if(r<0.5) continue;
          var e1=norm(sub(Pa,M)), mid=mul(add(pts[c1],pts[c2]),0.5), u2=sub(mid,M); u2=norm(sub(u2,mul(e1,dot(u2,e1)))); if(len(u2)===0) continue;
          var depth=Math.max(dot(sub(pts[c1],M),u2), dot(sub(pts[c2],M),u2)); var ry=Math.min(r, Math.max(depth, r*0.6));
          for(var t=1;t<mm;t++){ var ph=Math.PI*t/mm; pts[(A+t)%n]=add(M, add(mul(e1,r*Math.cos(ph)), mul(u2,ry*Math.sin(ph)))); }
          used[pi]=used[pj]=1; }
      }
      for(var ci=0;ci<corners.length;ci++){ if(used[ci]) continue; var c=corners[ci];
        var prevC=corners[(ci-1+corners.length)%corners.length], nextC=corners[(ci+1)%corners.length];
        var lim=corners.length>1? Math.min(arcLen(prevC,c),arcLen(c,nextC))*0.45 : per*0.2;
        var R=Math.min(opt.round, lim);
        if(R<1){ kept.push(c); continue; }
        var a=c, b=c, steps=0;
        if(ang[c]>opt.capAngle){
          // Narrow tip (serif end): step back along both sides until they are 2R apart, then close with a semicircle — a "U" end, not a "V".
          var limA=Math.min(arcLen(prevC,c),per/2)*0.5, limB=Math.min(arcLen(c,nextC),per/2)*0.5;
          while(dist(pts[a],pts[b])<2*R && steps<n/2){
            var canA=arcLen(a,c)<limA, canB=arcLen(c,b)<limB; if(!canA&&!canB) break;
            if(canA && (!canB || arcLen(a,c)<=arcLen(c,b))) a=(a-1+n)%n; else b=(b+1)%n; steps++; }
          var m=((b-a+n)%n); if(m<2){ kept.push(c); continue; }
          var Pa=pts[a], Pb=pts[b], M=mul(add(Pa,Pb),0.5), r=dist(Pa,Pb)/2; if(r<0.5){ kept.push(c); continue; }
          var e1=norm(sub(Pa,M)), u2=sub(pts[c],M); u2=norm(sub(u2,mul(e1,dot(u2,e1)))); if(len(u2)===0){ kept.push(c); continue; }
          for(var t=1;t<m;t++){ var ph=Math.PI*t/m; pts[(a+t)%n]=add(M, add(mul(e1,r*Math.cos(ph)), mul(u2,r*Math.sin(ph)))); }
          continue;
        }
        while(arcLen(a,c)<R && steps<n/2){ a=(a-1+n)%n; steps++; }
        steps=0; while(arcLen(c,b)<R && steps<n/2){ b=(b+1)%n; steps++; }
        var m=((b-a+n)%n); if(m<2){ kept.push(c); continue; }
        var P0=pts[a], P1=pts[c], P2=pts[b];
        for(var t=1;t<m;t++){ var u=t/m, mu=1-u; pts[(a+t)%n]=V(mu*mu*P0.x+2*mu*u*P1.x+u*u*P2.x, mu*mu*P0.y+2*mu*u*P1.y+u*u*P2.y); }
      }
      corners=kept;
    }
    // smooth points, keeping corners fixed
    var isC=new Uint8Array(n); for(i=0;i<corners.length;i++) isC[corners[i]]=1;
    var sm=pts.map(function(p){ return V(p.x,p.y); });
    for(var pass=0;pass<opt.smoothPasses;pass++){ var nx=sm.map(function(p){ return V(p.x,p.y); });
      for(i=0;i<n;i++){ if(isC[i] || (opt.keepAngle && ang[i]>opt.keepAngle)) continue; var pa=sm[(i-1+n)%n], pb=sm[(i+1)%n]; nx[i]=V((pa.x+2*sm[i].x+pb.x)/4,(pa.y+2*sm[i].y+pb.y)/4); }
      sm=nx; }
    var breaks=corners.slice(), smoothJoin=false;
    if(breaks.length===0){ breaks=[0, Math.floor(n/2)]; smoothJoin=true; }
    else if(breaks.length===1){ breaks.push((breaks[0]+Math.floor(n/2))%n); breaks.sort(function(a,b){return a-b;}); smoothJoin='one'; }
    var segs=[];
    for(var bI=0;bI<breaks.length;bI++){
      var s0=breaks[bI], s1=breaks[(bI+1)%breaks.length], span=[];
      var cnt=((s1-s0+n)%n)||n; for(i=0;i<=cnt;i++) span.push(sm[(s0+i)%n]);
      if(span.length<2) continue;
      var joinStart = smoothJoin===true || (smoothJoin==='one' && !isC[s0]);
      var joinEnd = smoothJoin===true || (smoothJoin==='one' && !isC[s1]);
      var t1 = joinStart ? norm(sub(sm[(s0+1)%n], sm[(s0-1+n)%n])) : endTangent(span,true);
      var t2 = joinEnd ? norm(sub(sm[(s1-1+n)%n], sm[(s1+1)%n])) : endTangent(span,false);
      fitSpan(span,t1,t2,segs);
    }
    // merge consecutive collinear lines
    var merged=[]; for(i=0;i<segs.length;i++){ var sg=segs[i], pv=merged[merged.length-1];
      if(pv && pv.type==='L' && sg.type==='L'){ var d1=norm(V(pv.x2-pv.x1,pv.y2-pv.y1)), d2=norm(V(sg.x2-sg.x1,sg.y2-sg.y1)); if(dot(d1,d2)>0.9995){ pv.x2=sg.x2; pv.y2=sg.y2; continue; } }
      merged.push(sg); }
    return merged;
  }
  return {fitClosed:fitClosed};
})();


  self.onmessage=function(e){ var m=e.data, T=self.ImageTracer, w=m.w, h=m.h, out=[];
    var o=T.checkoptions(m.opts);
    function fitLayer(ins){ return ins.map(function(p){ var pts=p.points.map(function(q){ return {x:q.x,y:q.y}; });
        var segs=FIT.fitClosed(pts,m.fit)||[]; return {segments:segs,isholepath:p.isholepath,holechildren:p.holechildren}; }); }
    for(var L=0;L<m.masks.length;L++){ var mk=m.masks[L], arr=new Array(h+2);
      for(var j=0;j<h+2;j++){ var row=new Array(w+2); row.fill(-1); if(j>0&&j<=h){ var off=(j-1)*w; for(var i=0;i<w;i++) row[i+1]=mk[off+i]; } arr[j]=row; }
      var ii={array:arr,palette:[{r:0,g:0,b:0,a:255},{r:255,g:255,b:255,a:255}]};
      out.push(fitLayer(T.internodes(T.pathscan(T.layeringstep(ii,1),o.pathomit),o)));
      self.postMessage({job:m.job,progress:L+1,of:m.masks.length}); }
    self.postMessage({job:m.job,layers:out}); };