/*
https://github.com/codetyphon/jquery.backtotop
*/
;(function($){
    $.fn.extend({
        imgloader:function(){
            $(this).each(function(index,item){
                var img=$(item).attr('src',$(item).attr('low_src'));
                $(item).attr('type','low');
                $('<img>').attr('src',$(this).attr('middle_src')).bind('load',function(){
                    if(img.attr('type')==='low'){
                        img.attr('src',$(this).attr('src'));
                        img.attr('type','middle');
                    }
                });
                $('<img>').attr('src',$(this).attr('high_src')).bind('load',function(){
                    img.attr('src',$(this).attr('src'));
                    img.attr('type','high');
                });
            });
        }
    })
})(jQuery);