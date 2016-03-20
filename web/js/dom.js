/**
 * Created by Administrator on 2016/3/20 0020.
 */
//        window.onload=myTime; //加载页面时自动执行，myTime后面不加括号
var time = setInterval("myTime()",1000);
setInterval("changeImage()",1000);
//简单的时钟
function myTime(){
    document.getElementById("myTime").innerHTML=new Date().toLocaleString();
}
//停止时间
function stopTime(){
    clearInterval(time);
}

//简单的轮播图
var n = 1;
function changeImage(){
    var image = document.getElementById("image")
    image.src="/static/image/"+((n++%3)+1)+".jpg";
}