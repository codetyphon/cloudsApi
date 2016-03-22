$(document).ready(function(){
    $.getJSON('/api/view',function(d){
        var s=' 已有'+d.view+'人次访问';
        $('.view_count').text(s);
    });
});