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


window.onload = function () {
   SB.tabs.init();
   $(".tabs li a").on("click", SB.tabs.onTabClick);
};

