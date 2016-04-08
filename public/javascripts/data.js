$(document).ready(function(){
    console.log(data);
    var all_pv=data.length;
    
    //平台
    var ios_pv=0;
    var android_pv=0;
    var unknow_pv=0;
    
    //客户端
    var wx_pv=0;
    var dd_pv=0;
    var qq_pv=0;
    
    var Mobile_pv=0;
    var PC_pv=0;
    
    var max_pv=0;
    
    data.map(function(one,index,arr){
        var ua=one.ua;
        if(ua.indexOf('iPhone')!=-1){
            ios_pv+=1;
        }
        if(ua.indexOf('Android')!=-1){
            android_pv+=1;
        }
        if(ua.indexOf('MicroMessenger')!=-1){
            wx_pv+=1;
        }
        if(ua.indexOf('QQBrowser')!=-1){
            qq_pv+=1;
        }
        if(ua.indexOf('DingTalk')!=-1){
            dd_pv+=1;
        }
        if(ua.indexOf('Mobile')!=-1){
            Mobile_pv+=1;
        }
    });
    
    unknow_pv=all_pv-ios_pv-android_pv;    
    
    PC_pv=all_pv-Mobile_pv;
    if(max_pv<ios_pv){
        max_pv=ios_pv;
    }
    if(max_pv<android_pv){
        max_pv=android_pv;
    }
    if(max_pv<unknow_pv){
        max_pv=unknow_pv;
    }
    
    console.log(max_pv);
    var min_radius=0;
    var max_radius=90;
    
    $('.all_pv').text(all_pv);
    $('.ios_pv').text(ios_pv);
    $('.android_pv').text(android_pv);
    //
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart_os = ec.init(document.getElementById('Chart_os')); 
                var myChart_pc_mobile = ec.init(document.getElementById('Chart_pc_mobile')); 
                var myChart_app = ec.init(document.getElementById('Chart_app')); 
                
                var dataStyle = {
                normal: {
                    label: {show:false},
                    labelLine: {show:false}
                }
            };
            
            //
            option_os = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show : false
                },
                calculable : false,
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['ios:'+ios_pv,'安卓:'+android_pv,'未知:'+unknow_pv]
                },
                series : [
                    {
                        name:'app',
                        type:'pie',
                        radius : [min_radius, max_radius],

                        // for funnel
                        x: '60%',
                        width: '35%',
                        funnelAlign: 'left',
                        max: 0,

                        data:[
                            {value:ios_pv, name:'ios'},
                            {value:android_pv, name:'安卓'},
                            {value:unknow_pv, name:'未知'}
                        ]
                    }
                ]
            };

                          
            //
            // 为echarts对象加载数据 
            myChart_os.setOption(option_os); 
                
            //
            option_pc_mobile = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show : false
                },
                calculable : false,
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['移动端:'+Mobile_pv,'PC端:'+PC_pv]
                },
                series : [
                    {
                        name:'平台',
                        type:'pie',
                        radius : [min_radius, max_radius],

                        // for funnel
                        x: '60%',
                        width: '35%',
                        funnelAlign: 'left',
                        max: 0,

                        data:[
                            {value:Mobile_pv, name:'移动端'},
                            {value:PC_pv, name:'PC端'}
                        ]
                    }
                ]
            };    
            //
            myChart_pc_mobile.setOption(option_pc_mobile); 
            //
            option_app = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show : false
                },
                calculable : false,
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['微信:'+wx_pv,'QQ浏览器:'+qq_pv,'钉钉:'+dd_pv]
                },
                series : [
                    {
                        name:'app',
                        type:'pie',
                        radius : [min_radius, max_radius],

                        // for funnel
                        x: '60%',
                        width: '35%',
                        funnelAlign: 'left',
                        max: 0,

                        data:[
                            {value:wx_pv, name:'微信'},
                            {value:qq_pv, name:'QQ浏览器'},
                            {value:dd_pv, name:'钉钉'}
                        ]
                    }
                ]
            };  
            //
            myChart_app.setOption(option_app); 
        }
    );
    //
});