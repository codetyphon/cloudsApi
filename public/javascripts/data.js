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
    });
    
    unknow_pv=all_pv-ios_pv-android_pv;    
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
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                var dataStyle = {
                normal: {
                    label: {show:false},
                    labelLine: {show:false}
                }
            };
            
            //
            option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show : false
                },
                calculable : false,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius : [0, 70],

                        // for funnel
                        x: '20%',
                        width: '40%',
                        funnelAlign: 'right',
                        max: max_pv,

                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'inner'
                                },
                                labelLine : {
                                    show : false
                                }
                            }
                        },
                        data:[
                            {value:ios_pv, name:'IOS'},
                            {value:android_pv, name:'安卓'},
                            {value:unknow_pv, name:'未知'}
                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : [100, 140],

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
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
    //
});