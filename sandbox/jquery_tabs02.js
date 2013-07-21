var SB = SB || {};

SB.tabs = (function ($) {
    'use strict';
    
    function init() {
        $('.tabs li a:not(:first)').addClass('inactive');
        $('.tabs-content').hide();
        $('.tabs-content:first').show();
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


SB.canvas = (function() {
    'use strict';
    var canvas = document.getElementById("testCanvas");
    var context = canvas.getContext("2d");
    var cwidth = canvas.width;
    var cheight = canvas.height;
    
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
    
    
    function drawCC() {
        var rows = 4,
            cols = 6,
            i, j, x, y, rsize, gap, height, rgb;
            
        gap = cwidth * 0.02;
        rsize = (cwidth - (cols + 2) * gap) / cols;
        height = rows * (gap + rsize) + 2 * gap;
        
        context.fillStyle = "rgb(32, 32, 32)"
        context.fillRoundedRect(0, 0, cwidth, height, gap);
        
        y = 1.5*gap;
        for (i = 0; i < rows; i += 1) {
            x = 1.5*gap;
            for (j = 0; j < cols; j += 1) {
                rgb = [0, 255/(rows-1)*i, 255/(cols-1)*j];
                context.fillStyle = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
                context.fillRect(x, y, rsize, rsize);
                x += rsize + gap;
            } //row
            y += rsize + gap;
        }
    }
    
    
    function drawColArray(width, colors) {
        var rows, cols,
            i, j, x, y, rsize, gap, height;
        
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
                context.fillStyle = "rgb(" 
                    + Math.round(colors[i][j].r) + ", " 
                    + Math.round(colors[i][j].g) + ", " 
                    + Math.round(colors[i][j].b) + ")";
                context.fillRect(x, y, rsize, rsize);
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
                row.push( {
                    "r": 0, 
                    "g": 255/(rows-1)*i,
                    "b": 255/(cols-1)*j } );
            } // row i
            value.push( row );
        }
        
        return value;
    }
    
    
    function drawTest() {
        var colors;
        
        colors = dummyArray(5, 8);
        drawColArray(canvas.width, colors);
    }
    
    
    return {
        drawCC:drawCC,
        drawTest:drawTest
    }
}());


window.onload = function () {
   SB.tabs.init();
   SB.canvas.drawTest();
   $(".tabs li a").on("click", SB.tabs.onTabClick);
};

