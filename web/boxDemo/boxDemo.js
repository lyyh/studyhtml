/**
 * Created by Administrator on 2016/3/27 0027.
 */
/**
 * 控制图片展开和收缩
 * @param ltVal li-expression的前几个元素
 * @param eqVal .title a所有元素的索引
 */
function foldAndUnfold(val,eqVal){
    var sit = $(".li-expression:"+val).css("display");
    if(sit=="none"){
        //$(".li-expression:lt(ltVal)").css('display','block');
        $(".li-expression:"+val).css('display','block');
        $(".title a:eq(eqVal)").html("收起");
    }else if(sit=="block"){
        //$(".li-expression:lt(ltVal)").css('display','none');
        $(".li-expression:"+val).css('display','none');
        $(".title a:eq(eqVal)").html("展开");
    }
    //}
    //$("#id")[0].style.display="none";
    //$("#fold")[0].innerHTML="收起";
}