/**
 * Created by Administrator on 2016/3/27 0027.
 */
function preUnfold(){
    //获得display属性
    var sit = $(".ul-character .li-expression").css("display");
    if(sit=="none"){
        $(".ul-character .li-expression").css('display','block');
        $(".lan").css("margin-top","20px");
        $(".per a").html("收起");
    }else if(sit=="block"){
        $(".ul-character .li-expression").css('display','none');
        $(".per a").html("展开");
    }
    //$("#id")[0].style.display="none";
    //$("#fold")[0].innerHTML="收起";
}

function lanUnfold(){
    //获得display属性
    var sit = $(".ul-framework .li-expression").css("display");
    if(sit=="none"){
        $(".ul-framework .li-expression").css('display','block');
        $
        $(".lan a").html("收起");
    }else if(sit=="block"){
        $(".ul-framework .li-expression").css('display','none');
        $(".lan a").html("展开");
    }
    //$("#id")[0].style.display="none";
    //$("#fold")[0].innerHTML="收起";
}

