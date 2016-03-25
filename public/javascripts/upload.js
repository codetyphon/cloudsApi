$(document).ready(function(){
    $('#upimg').on('change', function () {
        var data = new FormData();
        var files = $("#upimg")[0].files;
        if (files) {
            for (i = 0; i < files.length; i++) {
                console.log(files[i]);
                data.append("file_" + i, files[i]);
            }
        }
        console.log('正在上传中...');
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '/api/uploadimg',
            data: data,
            contentType: false,
            processData: false,
            success: function (d) {
                console.log(d);
                /*
                for (v in d) {
                    //insertImage(document.location.href.split('admin')[0] + 'upload/' + d[v]);
                    console.log(d[v]);
                }*/
                d.map(function(v,index,d){
                    console.log(v);
                });
            }
        });
    });
});