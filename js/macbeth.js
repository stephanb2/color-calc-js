var SB = SB || {};



/*----------------------------------------------------------------------------
 * math functions and colorimetric transforms
 *----------------------------------------------------------------------------
 */

SB.calc = (function ($) {
    'use strict';

	/*
	 * WARNING: this implementation provides no interpolation
	 * @requires: seriesA.step == seriesB.step
	 * @requires: (seriesB.start > seriesA.start) 
	 *               => exists i in NAT, seriesB.start == seriesA.start + i * seriesA.step
	 */
    function sumProduct2f(seriesA, idA, seriesB, idB){
        var i = 0, 
            x = 0,
            start = Math.max(seriesA.start, seriesB.start),
            end = Math.min(seriesA.end, seriesB.end), 
            step = seriesA.step, 
            offsetA = (start - seriesA.start) / step, 
            offsetB = (start - seriesB.start) / step,
            sum = 0;
            
        //FIXME: chrome specific
        //console.assert(seriesA.step === seriesB.step, "series must have equal steps");
        
        for (x = start; x <= end; x += step) {
            sum += seriesA[idA][offsetA + i] * seriesB[idB][offsetB + i];
            i += 1;
        }
        
        return sum;
    }

	/*
	 * Integral of inner Product of n series.
	 * USAGE: sumProduct(series1, var1, series2, var2, ... , seriesN, varN)
	 * @returns: sum(i, series1.var1[i]*series2.var2[i]* ... seriesN.var2[N])
	 *
	 * WARNING: this implementation provides no interpolation
	 * @requires: even number of arguments
	 * @requires: series[0].step == series[i].step
	 * @requires: (series[i].start > series[j].start) 
	 *               => exists k in NAT, series[j].start == series[i].start + k * seriesA.step
	 */
    function sumProduct(){
        var i, j, x,
            series = [],
            ids = [],
            start, end, step, 
            offset = [],
            prod, sum;
               
        for(i = 0; i<arguments.length; i+=1) {
        	series.push(arguments[i]);
        	i+=1;
        	//FIXME: chrome specific
        	//console.assert(i<arguments.length, "sumProduct requires even number of arguments");
        	ids.push(arguments[i]);
        }
        
        start = Math.max.apply(Math, jQuery.map(series, function(n, i){
                return n.start;
            })
        );
        end = Math.min.apply(Math, jQuery.map(series, function(n, i){
                return n.end;
            })
        );
        step = series[0].step;
        
        //FIXME: chrome specific
        //console.assert(seriesA.step === seriesB.step, "series must have equal steps");
        
        offset = jQuery.map(series, function(n, i){
                return (start - n.start)/step;
        });

        
        i = 0;
        sum = 0;
        /* in this loop i is the index, x is the guard */
        for (x = start; x <= end; x += step) {
            prod = 1;
            for (j = 0; j < series.length; j += 1) {
               /* we need: seriesJ.idJ[offsetJ + i]
                * using object as associative array syntax: seriesJ[idJ][offsetJ + i]
                */
               prod *= series[j][ ids[j] ][offset[j] + i];
            }
            sum += prod;
            i += 1;
        }
        
        return sum;
    }


    /*
     * returns 2D matrix product: vector*matrix, matrix1*matrix2 or matrix*vector
     */
    function matrixMult(left, right) {
        var i, j, k,
            leftheight, rightwidth,
            nright,
            sum, row, result,
            lvec = ! jQuery.isArray(left[0]), 
            rvec = ! jQuery.isArray(right[0]);
        
        result = [];
        
        if (lvec) { left = [ left ]; }
        
        // if right factor is a vector, it needs to be transposed
        if (rvec) { 
            right = jQuery.map(right, function(n, i){
                return [[n]];
            });
        };
        
        leftheight = left.length;
        rightwidth = right[0].length;


        for (i = 0; i < leftheight; i += 1) {
            row = [];
            for (j = 0; j < rightwidth; j += 1) {
                sum = 0;
                for (k = 0; k < right.length; k += 1) {
                    sum += left[i][k] * right[k][j];
                }
                if (rvec) { row = sum; } else { row.push(sum); }
            }
            result.push(row);
        };
        
        return lvec ? result[0] : result;
    }
    
    /*
     * returns a diagonal matrix from values of vector vec.
     */
    function diagMatrix(vec) {
        return jQuery.map(vec, function(n, i){
            var row = [], k;
            for (k = 0; k < vec.length; k += 1){
                row.push( (i === k) ? n : 0 );
            }
            return [row];
        });
    }


    /*----- colorimetric transforms ------------------*/

    function specToXYZ(series, id, illum, observ) {
        var x,y,z,n;
        
        x = sumProduct(SB.data[observ], "x", series, id, SB.data.CIEil, illum);
        y = sumProduct(SB.data[observ], "y", series, id, SB.data.CIEil, illum);
        z = sumProduct(SB.data[observ], "z", series, id, SB.data.CIEil, illum);
        n = sumProduct(SB.data[observ], "y", SB.data.CIEil,illum);
        //n = sumProduct(SB.data[observ], "y", SB.data.GMCCavg30, "W", SB.data.CIEil,illum);
        
        return [x/n, y/n, z/n];
    }


    function XYZtoxyY (XYZ) {
        var sum = XYZ[0] + XYZ[1] + XYZ[2];
        
        if (sum === 0) {
            /* TODO: set x and y to the chromaticity coordinates of the reference white */
            return [0, 0, 0];
        }
        return [ XYZ[0]/sum, XYZ[1]/sum, XYZ[1] ];
    }
    
    
    function XYZtoLab (XYZ, refWhite, observ) {
        var xyz_r, f_xyz,
            inv3 = 1/3,
            epsilon = 216/24389,
            kappa = 24389/27;
        
        xyz_r = jQuery.map(XYZ, function(val, i){
            return val / SB.data[observ][refWhite][i];
        });
        
        f_xyz = jQuery.map(xyz_r, function(val, i){
            if (val > epsilon) {
                return Math.pow(val, inv3);
            }
            return (kappa*val + 16) / 116;
        });
        
        return [ 116*f_xyz[1] - 16, 500*(f_xyz[0]-f_xyz[1]), 200*(f_xyz[1]-f_xyz[2]) ];     
    }
    
    
    function XYZtoLuv (XYZ, refWhite, observ) {
        var XYZ_r, uv, uv_r, yr, L,
            inv3 = 1/3,
            epsilon = 216/24389,
            kappa = 24389/27;
            
        function XYZtoUV (XYZ) {
            var sum = XYZ[0] + 15*XYZ[1] + 3*XYZ[2];
            if (sum === 0) { return [0, 0]; };
            return [4*XYZ[0]/sum, 9*XYZ[1]/sum]
        }
        
        XYZ_r = SB.data[observ][refWhite];
        
        uv = XYZtoUV(XYZ);
        uv_r = XYZtoUV(XYZ_r);
        yr = XYZ[1]/XYZ_r[1];
        
        L = (yr > epsilon) ? 116*Math.pow(yr, inv3) - 16 : kappa*yr;
        
        return [ L, 13*L*(uv[0]-uv_r[0]), 13*L*(uv[1]-uv_r[1]) ]
    }
    
    
    function adaptMatrix(sourceW, destW, observ, method) {
        var XYZ_S, XYZ_D, rhoS, rhoD, Scaling, Mat;
        
        if (method === "None") {
            return diagMatrix([1, 1, 1]);
        };
        
        //FIXME: Fluorescents don't match well the tabulated XYZ white points
        //use this if SB.data[observ][sourceW] or SB.data[observ][destW] is undefined
        
        XYZ_S = specToXYZ(SB.data.GMCCavg30, "W", sourceW, observ);
        XYZ_D = specToXYZ(SB.data.GMCCavg30, "W", destW, observ);
        
        rhoS = matrixMult(SB.data[method].MA, XYZ_S);
        rhoD = matrixMult(SB.data[method].MA, XYZ_D);  
        
        // rho coefficients retrieved from tabulated XYZ values
        //rhoS = matrixMult(SB.data[method].MA, SB.data[observ][sourceW]);
        //rhoD = matrixMult(SB.data[method].MA, SB.data[observ][destW]);
        
        Scaling = diagMatrix([rhoD[0]/rhoS[0], rhoD[1]/rhoS[1], rhoD[2]/rhoS[2]]);
        
        Mat = matrixMult(SB.data[method].MAinv, Scaling);
        Mat = matrixMult(Mat, SB.data[method].MA);
        
        return Mat;
    }
    
    
    function XYZtoRGB (XYZ, refWhite, RGBspace) {
        var RGB, invGamma;
        
        invGamma = 1 / SB.data[RGBspace].gamma;
        RGB = matrixMult(SB.data[RGBspace].Minv, XYZ);
        
        if (RGBspace === "sRGB" ) {
            RGB = jQuery.map(RGB, function(val, i){
                var epsilon = 0.0031308,
                    sign = val >= 0 ? 1 : -1;
                return (val <= epsilon) ? 12.92*val 
                    : 1.055 * sign * Math.pow(Math.abs(val), invGamma) - 0.055;
            });
        } else {
            RGB = jQuery.map(RGB, function(val, i){
                var sign = val >= 0 ? 1 : -1;
                return sign * Math.pow(Math.abs(val), invGamma);
            });
        }
        
        return RGB;
    }

    
    function RGBto8Bits (RGB) { 
        return jQuery.map(RGB, function(val,i) { 
            return Math.max(0, Math.min(255, Math.round(255 * val)));
            });
    }
    
    function isRGBclip (RGB) {
        var result = false;
        jQuery.each(RGB, function(i, val) {
            if (val < 0 || val > 1) { result = true };
        });
        
        return result;
    }
    
    return {
        sumProduct: sumProduct, //exposed for testing
	    specToXYZ: specToXYZ,
	    XYZtoxyY:  XYZtoxyY,
        XYZtoLab: XYZtoLab,
        XYZtoLuv: XYZtoLuv,
        XYZtoRGB: XYZtoRGB,
        adaptMatrix: adaptMatrix,
        RGBto8Bits:RGBto8Bits,
        isRGBclip: isRGBclip,
        matrixMult: matrixMult,
        diagMatrix: diagMatrix
	};
    
}(jQuery));


/*----------------------------------------------------------------------------
 *  User interface
 *----------------------------------------------------------------------------
 */

/*----- configuration data----------------------------------------*/

SB.conf = {
    "CCTABLE_ID": "#colorTable",
    "XYZ_ID": "#XYZ",
    "XYY_ID": "#xyY",
    "LAB_ID": "#Lab",
    "LUV_ID": "#Luv",
    "DATALABEL_CLASS": "dataLabel",
    "PLOT_ID": "#plotLab",
    "ILLUM_SELECT_ID": "#illumRef",
    "OBSERV_SELECT_ID": "#observRef",
    "RGB_SPACE_ID": "#RGBspace",
    "ADAPTATION_ID": "#Adapt",
    "TABS_CLASS": ".tabs",
    "TABS_CONTENT_CLASS": ".tabs-content"
};


/*----- tabs  --------------------------------------------------*/
SB.tabs = (function ($) {
    'use strict';
    
    function init() {
        $(SB.conf.TABS_CLASS + ' li a:not(:first)').addClass('inactive');
        $(SB.conf.TABS_CONTENT_CLASS).hide();
        $(SB.conf.TABS_CONTENT_CLASS+':first').show();
    }
    
    function onTabClick() {
        var tab_id = $(this).attr('id');
        if ($(this).hasClass('inactive')) { 
            $('.tabs li a').addClass('inactive');           
            $(this).removeClass('inactive');
            $('.tabs-content').hide();
            // $('#'+ tab_id + 'C').fadeIn('slow');
            $('#'+ tab_id + 'C').show();
        }
    }
    
    return {
        init: init,
        onTabClick: onTabClick
    };
    
}(jQuery));


/*----- canvas  --------------------------------------------------*/

SB.canvas = (function() {
    'use strict';
    var canvas, context;
    
    function init(canvas_id) {
        canvas = document.getElementById(canvas_id);
        context = canvas.getContext("2d");

    //rounded rectangle method
    if (!context.constructor.prototype.fillRoundedRect) {
      // Extend the canvaseContext class with a fillRoundedRect method
      context.constructor.prototype.fillRoundedRect = 
        function (x, y, w, h, rad, fill, stroke) {
          if (typeof(rad) == "undefined") rad = 0;
          this.beginPath();
          this.moveTo(x+rad, y);
          this.arcTo(x+w, y,   x+w, y+h, rad);
          this.arcTo(x+w, y+h, x,   y+h, rad);
          this.arcTo(x,   y+h, x,   y,   rad);
          this.arcTo(x,   y,   x+w, y,   rad);
          if (stroke) this.stroke();  // Default to no stroke
          if (fill || typeof(fill)=="undefined") this.fill();  // Default to fill
      }; // end of fillRoundedRect method
    }; //endif
    
    } //init function
    
    
    /*
     * colors: a 2D array of [R, G, B] array triplets in [0..1] range
     * width: width of output in pixels
     */
    function drawColArray(width, colors) {
        var rows, cols,
            i, j, x, y, rsize, gap, height, RGB;
        
        rows = colors.length;
        cols = colors[0].length;
        gap = width * 0.02;
        
        rsize = (width - (cols + 2) * gap) / cols;
        height = rows * (gap + rsize) + 2 * gap;
        
        context.fillStyle = "rgb(32, 32, 32)"
        context.fillRoundedRect(0, 0, width, height, gap);
        
        y = 1.5*gap;
        for (i = 0; i < rows; i += 1) {
            x = 1.5*gap;
            for (j = 0; j < cols; j += 1) {
                RGB = SB.calc.RGBto8Bits(colors[i][j]);
                //square colour patch
                context.fillStyle = "rgb(" + RGB[0] + ", " + RGB[1] + ", " + RGB[2] + ")";
                context.fillRect(x, y, rsize, rsize);
                
                //clipping indicator
                if ( SB.calc.isRGBclip(colors[i][j]) ) {
                    context.fillStyle = "rgb(255,255,0)";
                    context.beginPath();
                    context.moveTo(x,y);
                    context.lineTo(x+gap,y);
                    context.lineTo(x,y+gap);
                    context.closePath();
                    context.fill();
                };
                x += rsize + gap;
            } //row
            y += rsize + gap;
        }
    }
    
    
    function dummyArray(rows, cols) {
        var i, j, rgb, row, value;
        
        value = [];

        for (i = 0; i < rows; i += 1) {
            row = [];
            for (j = 0; j < cols; j += 1) {
                row.push( [0.5, 1/(rows-1)*i, 1/(cols-1)*j] );
            } // row i
            value.push( row );
        }
        
        return value;
    }
    
    
    function drawTest() {
        var colors;
        
        colors = dummyArray(4, 6);
        drawColArray(canvas.width, colors);
    }
    
    
    return {
        init:init,
        drawColArray:drawColArray,
        drawTest:drawTest
    }
}());


/*----- UI functions, DOM manipulation  ---------------------------*/

SB.macbeth = (function ($) {
    'use strict';
    
    var currentCell, illumRef, observRef, RGBspace, adaptation, currentPlot;
    
    /* both are unsupported by IE8
    var CCIds = Object.keys(SB.data.CCdisplay);
    var CCIds = [index for (index in SB.data.CCdisplay)];
    */
    var CCIds = jQuery.map(SB.data.CCdisplay, function(val, key) {
        return key;
    });    
    /* CCIds = ["A1", "A2", "A3", "A4", "A5", "A6", ... "D6"] */
    
    
    /*
     * builds ColorChecker table in DOM
     */
    function buildCCTable(table_id) {
        var j, row, cell, cellcolor,
            ncols = 6;

        jQuery.each (['A','B','C','D'], function(i, value) {
            row = $("<tr>");
            
            for (j = 0; j < ncols; j+=1) {
                cellcolor = SB.data.CCdisplay[value + (j+1)];
                cell = $("<td>").text(value + (j+1));
                cell.css({"background":cellcolor, "color":cellcolor});
                cell.appendTo(row);
            };
             
            $(table_id).append(row);
        });
    }
    
    /*
     * calculates RGB values for ColorChecker, to be drawn with canvas
     * returns 2D array of RGB triplets as expected by SB.canvas.drawColArray
     *@requires: global variables: illumRef, observRef, adaptation, RGBspace
     */
    function buildRGBcolors() {
        var j, row, cell_id, XYZ, RGB, adaptMat, result,
            ncols = 6;
        
        // compute Chromatic adaptation matrix
        adaptMat = SB.calc.adaptMatrix(illumRef, SB.data[RGBspace].RefWhite, observRef, adaptation);
          
        result = []; 
        jQuery.each (['A','B','C','D'], function(i, value) {
            row = [];
            for (j = 0; j < ncols; j+=1) {
                cell_id = value + (j+1);
                // compute XYZ from spectral data
                XYZ = SB.calc.specToXYZ(SB.data.GMCCavg30, cell_id, illumRef, observRef);
                // Chromatic adaptation
                XYZ = SB.calc.matrixMult(adaptMat, XYZ);
                // convert to RGB
                RGB = SB.calc.XYZtoRGB(XYZ, illumRef, RGBspace);
                row.push(RGB);
            }; //row j loop
            result.push(row);
        });
        
        return result;
    }
    
    
    function CCtoCanvas() {
        var colors = [];
        
        colors = buildRGBcolors();
        SB.canvas.drawColArray(400, colors);
    }
    
    /*
     * displays numeric data in DOM
     *@requires: global variables: illumRef, observRef
     */
    function showResults(CC_Id) {

        $(SB.conf.XYZ_ID).html($("<td>").text("XYZ").addClass("dataLabel"));
        $(SB.conf.XYY_ID).html($("<td>").text("xyY").addClass("dataLabel"));
        $(SB.conf.LAB_ID).html($("<td>").text("Lab").addClass("dataLabel"));
        $(SB.conf.LUV_ID).html($("<td>").text("Luv").addClass("dataLabel"));
        
        var XYZ = SB.calc.specToXYZ(SB.data.GMCCavg30, CC_Id, illumRef, observRef); 
        $.each(XYZ, function(i, elm) {
            $(SB.conf.XYZ_ID).append($("<td>").text( elm.toFixed(4) ));
        });
        
        var xyY = SB.calc.XYZtoxyY(XYZ);
        $.each(xyY, function(i, elm) {
            $(SB.conf.XYY_ID).append($("<td>").text( elm.toFixed(4) ));
        });


        var Lab = SB.calc.XYZtoLab(XYZ, illumRef, observRef);
        $.each(Lab, function(i, elm) {
            $(SB.conf.LAB_ID).append($("<td>").text( elm.toFixed(2) ));
        });
        
        var Luv = SB.calc.XYZtoLuv(XYZ, illumRef, observRef);
        $.each(Luv, function(i, elm) {
            $(SB.conf.LUV_ID).append($("<td>").text( elm.toFixed(2) ));
        });
    }
    
    
    function buildLabplot(placeholder) {
        var vals = [],
            ccColors = [],
            options, plot;
        
        ccColors = $.map(CCIds, function(elm, i) {
            return SB.data.CCdisplay[ elm ];
        });
        
        options = {
            series: {
                lines: { show: false },
                points: { show: true, radius: 5 }
            },
            xaxis: { min: -75, max: 75 },
            yaxis: { min: -85, max: 85, position: "left" },
            colors: ccColors
        };
        
        $.each(CCIds, function(i, elm) {
            var XYZ = SB.calc.specToXYZ(SB.data.GMCCavg30, elm, illumRef, observRef);
            var Lab = SB.calc.XYZtoLab(XYZ, illumRef, observRef);
            vals.push([[Lab[1], Lab[2]]]);
        });
        
        return $.plot(placeholder, vals, options);
    }
    
    
    function init() {
        $(SB.conf.CCTABLE_ID + " tr td:contains('A1')").toggleClass("active");
        currentCell = "A1";
        illumRef = $(SB.conf.ILLUM_SELECT_ID).val();
        observRef = $(SB.conf.OBSERV_SELECT_ID).val();
        RGBspace = $(SB.conf.RGB_SPACE_ID).val();
        adaptation = $(SB.conf.ADAPTATION_ID).val();
        showResults("A1");
        currentPlot = buildLabplot(SB.conf.PLOT_ID);
        currentPlot.highlight(0,0);
    }


    function onCellClick(event) {
        $(SB.conf.CCTABLE_ID + " .active").toggleClass("active");
        $(this).toggleClass("active");
        /* highlight and unhighlight method calls with parameters don't work in IE8
        currentPlot.unhighlight(CCIds.indexOf(currentCell), 0);
         */
		currentPlot.unhighlight();
        currentCell = $(this).text();    
        showResults(currentCell);
        currentPlot.highlight(CCIds.indexOf(currentCell), 0);
    }
    
    function setIllum(event) {
        illumRef = $(SB.conf.ILLUM_SELECT_ID).val();
        showResults(currentCell);
        currentPlot = buildLabplot(SB.conf.PLOT_ID);
        currentPlot.highlight(CCIds.indexOf(currentCell), 0);
        CCtoCanvas();
    } 
    
    function setObserv(event) {
        observRef = $(SB.conf.OBSERV_SELECT_ID).val();
        showResults(currentCell);
        currentPlot = buildLabplot(SB.conf.PLOT_ID);
        currentPlot.highlight(CCIds.indexOf(currentCell), 0);
        CCtoCanvas();
    } 
    
    function setRGB(event) {
        RGBspace = $(SB.conf.RGB_SPACE_ID).val();
        CCtoCanvas();
    }
    
    function setAdapt(event) {
        adaptation = $(SB.conf.ADAPTATION_ID).val();
        CCtoCanvas();
    }
	
	return {
	    buildCCTable: buildCCTable,
	    onCellClick:  onCellClick,
        setIllum: setIllum,
        setObserv: setObserv,
        setRGB: setRGB,
        setAdapt: setAdapt,
        buildLabplot: buildLabplot,
        CCtoCanvas: CCtoCanvas,
	    init: init
	};
	
}(jQuery));




window.onload = function () {
   SB.macbeth.buildCCTable(SB.conf.CCTABLE_ID);
   SB.macbeth.init();
   
   SB.tabs.init();
   $(".tabs li a").on("click", SB.tabs.onTabClick);
   
   $(SB.conf.CCTABLE_ID + " tr td").on("click", SB.macbeth.onCellClick);
   $(SB.conf.ILLUM_SELECT_ID).on("change", SB.macbeth.setIllum);
   $(SB.conf.OBSERV_SELECT_ID).on("change", SB.macbeth.setObserv);
   $(SB.conf.RGB_SPACE_ID).on("change", SB.macbeth.setRGB);
   $(SB.conf.ADAPTATION_ID).on("change", SB.macbeth.setAdapt);
   
   SB.canvas.init("canvasCC");
   // SB.canvas.drawTest();
   SB.macbeth.CCtoCanvas();
}
   

