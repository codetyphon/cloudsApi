$(document).ready(function(){
    console.log(data);
    var all_pv=data.length;
    var ios_pv=0;
    var android_pv=0;
    var wx_pv=0;
    
    data.map(function(one,index,arr){
        var ua=one.ua;
        if(ua.indexOf('iPhone')!=-1){
            ios_pv+=1;
        }
        if(ua.indexOf('Android')!=-1){
            android_pv+=1;
        }
        if(ua.indexOf('MicroMessenger ')!=-1){
            wx_pv+=1;
        }
    });
    
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
            var placeHolderStyle = {
                normal : {
                    color: 'rgba(0,0,0,0)',
                    label: {show:false},
                    labelLine: {show:false}
                },
                emphasis : {
                    color: 'rgba(0,0,0,0)'
                }
            };
            option = {
                title: {
                    text: 'PV 统计',
                    subtext: '',
                    sublink: 'http://www.gongls.com',
                    x: 'center',
                    y: 'center',
                    itemGap: 20,
                    textStyle : {
                        color : 'rgba(30,144,255,0.8)',
                        fontFamily : '微软雅黑',
                        fontSize : 35,
                        fontWeight : 'bolder'
                    }
                },
                tooltip : {
                    show: true,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : document.getElementById('main').offsetWidth / 2,
                    y : 45,
                    itemGap:12,
                    data:['ios_pv','android_pv','wx_pv']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                series : [
                    {
                        name:'1',
                        type:'pie',
                        clockWise:false,
                        radius : [125, 150],
                        itemStyle : dataStyle,
                        data:[
                            {
                                value:ios_pv,
                                name:'ios_pv'
                            },
                            {
                                value:all_pv-ios_pv,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }
                        ]
                    },
                    {
                        name:'2',
                        type:'pie',
                        clockWise:false,
                        radius : [100, 125],
                        itemStyle : dataStyle,
                        data:[
                            {
                                value:android_pv, 
                                name:'android_pv'
                            },
                            {
                                value:all_pv-android_pv,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }
                        ]
                    },
                    {
                        name:'3',
                        type:'pie',
                        clockWise:false,
                        radius : [75, 100],
                        itemStyle : dataStyle,
                        data:[
                            {
                                value:wx_pv, 
                                name:'wx_pv'
                            },
                            {
                                value:all_pv-wx_pv,
                                name:'invisible',
                                itemStyle : placeHolderStyle
                            }
                        ]
                    }
                ]
            };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
    //
});