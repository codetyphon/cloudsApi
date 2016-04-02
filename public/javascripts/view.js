$(document).ready(function(){
    $.getJSON('/api/view',function(d){
        var s=' 已有'+d.view+'人次访问';
        $('.view_count').text(s);
    });
    $.getJSON('/api/user_all_count',function(d){
        var s=' 已有'+d.view+'个用户';
        $('.user_count').text(s);
    });
    $.getJSON('/api/switch_all_count',function(d){
        var s=d.view+'个云开关';
        $('.switch_count').text(s);
    });
});