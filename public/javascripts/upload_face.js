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
                if(d.err){
                    console.log(d.msg);
                }else{
                    d.imgs.map(function(v,index,imgs){
                        console.log(v);
                        var face_url='/upload/'+v;
                        $('.user_face').attr('src','/upload/'+v);
                        $.post('/api/change_user_face',{face_url:face_url},function(d){
                            if(d.err){
                            }else{
                                console.log('up face success');
                            }
                        });
                        
                    });
                }
            }
        });
    });
});