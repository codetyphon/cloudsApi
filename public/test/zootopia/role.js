var count=0;
var role='';
var description='';
if(count==8){
    //答对8个
    role='狐狸Nick！';
    description='你观察敏锐，思维敏捷，总能第一时间发现问题。无论是生活还是工作中，都被大家所称赞。就像狐狸Nick一样哦~';

}else if(count==7 || count==6){
    //答对6-7个
    role='';
    description='';

}else if(count==5 || count==4){
    //答对4-5个
    role='';
    description='';
}else if(count==3){
    //答对3个
    role='';
    description='';
}else if(count<=2){
    //答对0-2个
    role='';
    description='';
}