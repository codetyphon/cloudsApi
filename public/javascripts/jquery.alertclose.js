/*
 https://github.com/codetyphon/alertClose
 */
;
(function ($) {
    $.fn.extend({
        alertClose: function (callback) {
            if (typeof callback === "function") {
                $(this).bind('click', function () {
                    $(this).parent().hide();
                    callback();
                });
            } else {
                $(this).bind('click', function () {
                    $(this).parent().hide();
                });
            }
        }
    })
})(jQuery);