$(document).ready(function(){
    $.getJSON('/api/view',function(d){
        var s=" ";
        $('.view_count').text(d.view);
    });
});