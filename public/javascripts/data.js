$(document).ready(function(){
    console.log(data);
    
    var min_radius=40;
    var max_radius=70;
    
    var all_pv=data.length;
    
    //平台
    var ios_pv=0;
    var android_pv=0;
    var unknow_pv=0;
    var iphone_pv=0;
    var windows_pv=0;
    var Mac_pv=0;
    var linux_pv=0;
    
    //客户端
    var wx_pv=0;
    var dd_pv=0;
    var qq_pv=0;
    
    var Mobile_pv=0;
    var PC_pv=0;
    
    //pinpai
    var HUAWEI_pv=0;
    var OPPO_pv=0;
    var Nexus_pv=0;
    var vivo_pv=0;
    var one_pv=0;
    var mi_pv=0;
    var letv_pv=0;
    var sanxing_pv=0;
    
    
    //xinghao
    
    var R7Plus_pv=0;//oppo r7plus
    var ONE_A2003_pv=0;//one 一加手机
    var R831S_pv=0;//oppe
    var SM_G900K_pv=0;//sanxing
    
    
    
    //NetType
    var NetType_WIFI_pv=0;
    var max_pv=0;
    
    
    function get_province_count(city){
        var count=0;
        data.map(function(one,index,arr){
            if(city===one.province){
                count+=1;
            }
        });
        return count;         
    }
    
    data.map(function(one,index,arr){
        var ua=one.ua;
        if(ua.indexOf('iPhone')!=-1){
            ios_pv+=1;
            iphone_pv+=1;
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
        //os
        if(ua.indexOf('Android')!=-1){
            android_pv+=1;
        }
        if(ua.indexOf('Windows')!=-1){
            windows_pv+=1;
        }
        if(ua.indexOf('Mac')!=-1){
            Mac_pv+=1;
        }
        if(ua.indexOf('Mac')!=-1){
            Mac_pv+=1;
        }
        //NetType/WIFI
        if(ua.indexOf('NetType/WIFI')!=-1){
            NetType_WIFI_pv+=1;
        }
        
        
        // pinpai
        if(ua.indexOf('HUAWEI')!=-1){
            HUAWEI_pv+=1;
        }
        if(ua.indexOf('OPPO')!=-1){
            OPPO_pv+=1;
        }
        
        //xinghao
        //
        if(ua.indexOf('SM-N9005')!=-1){
            sanxing_pv+=1;
        }
        if(ua.indexOf('ONE A2003')!=-1){
            one_pv+=1;
        }
        if(ua.indexOf('R831S')!=-1){
            OPPO_pv+=1;
        }
        if(ua.indexOf('SM-G900K')!=-1){
            sanxing_pv+=1;
        }
        if(ua.indexOf('MI NOTE')!=-1){
            mi_pv+=1;
        }
        if(ua.indexOf('MI 4LTE')!=-1){
            mi_pv+=1;
        }
        if(ua.indexOf('m2')!=-1){
            mi_pv+=1;
        }
        if(ua.indexOf('x600')!=-1){
            letv_pv+=1;
        }
        if(ua.indexOf('Mi-4c')!=-1){
            mi_pv+=1;
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
                'echarts/chart/pie', // 使用柱状图就加载bar模块，按需加载
                'echarts/chart/map'
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart_os = ec.init(document.getElementById('Chart_os')); 
                var myChart_pc_mobile = ec.init(document.getElementById('Chart_pc_mobile')); 
                var myChart_app = ec.init(document.getElementById('Chart_app')); 
                var myChart_name = ec.init(document.getElementById('Chart_name')); 
                var myChart_NetType = ec.init(document.getElementById('Chart_NetType')); 
                var myChart_map = ec.init(document.getElementById('Chart_map')); 
                
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
                    data:['ios:'+ios_pv,'安卓:'+android_pv,'Mac:'+Mac_pv,'Windows:'+windows_pv,'未知:'+unknow_pv]
                },
                series : [
                    {
                        name:'操作系统',
                        type:'pie',
                        radius : [min_radius, max_radius],

                        // for funnel
                        x: '60%',
                        width: '35%',
                        funnelAlign: 'left',
                        max: 0,

                        data:[
                            {value:ios_pv, name:'ios:'+ios_pv},
                            {value:android_pv, name:'安卓:'+android_pv},
                            {value:windows_pv, name:'windows:'+windows_pv},
                            {value:Mac_pv, name:'Mac:'+Mac_pv},
                            {value:unknow_pv, name:'未知:'+unknow_pv}
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
                            {value:Mobile_pv, name:'移动端:'+Mobile_pv},
                            {value:PC_pv, name:'PC端:'+PC_pv}
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
                    data:['微信:'+wx_pv,'QQ浏览器:'+qq_pv,'钉钉:'+dd_pv,'其他app:'+(all_pv-wx_pv-qq_pv-dd_pv)]
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
                            {value:wx_pv, name:'微信:'+wx_pv},
                            {value:qq_pv, name:'QQ浏览器:'+qq_pv},
                            {value:dd_pv, name:'钉钉:'+dd_pv},
                            {value:all_pv-wx_pv-qq_pv-dd_pv, name:'其他app:'+(all_pv-wx_pv-qq_pv-dd_pv)}
                        ]
                    }
                ]
            };  
            //
            myChart_app.setOption(option_app); 
            option_name = {
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
                    data:['华为:'+HUAWEI_pv,'OPPO:'+OPPO_pv,'苹果:'+iphone_pv,'三星:'+sanxing_pv,'乐视:'+letv_pv,'小米:'+mi_pv,'一加:'+one_pv,'vivo:'+vivo_pv]
                },
                series : [
                    {
                        name:'品牌',
                        type:'pie',
                        radius : [min_radius, max_radius],

                        // for funnel
                        x: '60%',
                        width: '35%',
                        funnelAlign: 'left',
                        max: 0,

                        data:[
                            {value:HUAWEI_pv, name:'华为:'+HUAWEI_pv},
                            {value:OPPO_pv, name:'OPPO:'+OPPO_pv},
                            {value:iphone_pv, name:'苹果:'+iphone_pv},
                            {value:sanxing_pv, name:'三星:'+sanxing_pv},
                            {value:letv_pv, name:'乐视:'+letv_pv},
                            {value:mi_pv, name:'小米:'+mi_pv},
                            {value:one_pv, name:'一加:'+one_pv},
                            {value:vivo_pv, name:'vivo:'+vivo_pv}
                            //var HUAWEI_pv/OPPO_pv/Nexus_pv/vivo_pv/one_pv/mi_pv/letv_pv/sanxing_pv
                        ]
                    }
                ]
            };  
            myChart_name.setOption(option_name); 
            option_NetType = {
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
                    data:['wifi:'+NetType_WIFI_pv,'未知:'+(all_pv-NetType_WIFI_pv)]
                },
                series : [
                    {
                        name:'连接方式',
                        type:'pie',
                        radius : [min_radius, max_radius],

                        // for funnel
                        x: '60%',
                        width: '35%',
                        funnelAlign: 'left',
                        max: 0,

                        data:[
                            {value:NetType_WIFI_pv, name:'wifi:'+NetType_WIFI_pv},
                            {value:all_pv-NetType_WIFI_pv, name:'未知:'+(all_pv-NetType_WIFI_pv)}
                        ]
                    }
                ]
            };    
            myChart_NetType.setOption(option_NetType); 
            //
            option_map = {
                title : {
                    text: '',
                    subtext: '',
                    x:'center'
                },
                dataRange: {
                    min: 0,
                    max: 2500,
                    x: 'left',
                    y: 'bottom',
                    text:['高','低'],           // 文本，默认为数值文本
                    calculable : true
                },
                series : [
                    {
                        name: 'iphone3',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        itemStyle:{
                            normal:{label:{show:true}},
                            emphasis:{label:{show:true}}
                        },
                        data:[
                            {name: '北京',value: get_province_count('北京')},
                            {name: '天津',value: get_province_count('天津')},
                            {name: '上海',value: get_province_count('上海')},
                            {name: '重庆',value: get_province_count('重庆')},
                            {name: '河北',value: get_province_count('河北')},
                            {name: '河南',value: get_province_count('河南')},
                            {name: '云南',value: get_province_count('云南')},
                            {name: '辽宁',value: get_province_count('辽宁')},
                            {name: '黑龙江',value: get_province_count('黑龙江')},
                            {name: '湖南',value: get_province_count('湖南')},
                            {name: '安徽',value: get_province_count('安徽')},
                            {name: '山东',value: get_province_count('山东')},
                            {name: '新疆',value: get_province_count('新疆')},
                            {name: '江苏',value: get_province_count('江苏')},
                            {name: '浙江',value: get_province_count('浙江')},
                            {name: '江西',value: get_province_count('江西')},
                            {name: '湖北',value: get_province_count('湖北')},
                            {name: '广西',value: get_province_count('广西')},
                            {name: '甘肃',value: get_province_count('甘肃')},
                            {name: '山西',value: get_province_count('山西')},
                            {name: '内蒙古',value: get_province_count('内蒙古')},
                            {name: '陕西',value: get_province_count('陕西')},
                            {name: '吉林',value: get_province_count('吉林')},
                            {name: '福建',value: get_province_count('福建')},
                            {name: '贵州',value: get_province_count('贵州')},
                            {name: '广东',value: get_province_count('广东')},
                            {name: '青海',value: get_province_count('青海')},
                            {name: '西藏',value: get_province_count('西藏')},
                            {name: '四川',value: get_province_count('四川')},
                            {name: '宁夏',value: get_province_count('宁夏')},
                            {name: '海南',value: get_province_count('海南')},
                            {name: '台湾',value: get_province_count('台湾')},
                            {name: '香港',value: get_province_count('香港')},
                            {name: '澳门',value: get_province_count('澳门')}
                        ]
                    }
                ]
            };
                    
            //
                
            myChart_map.setOption(option_map); 
        }
    );
    //
});