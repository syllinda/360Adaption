/**
 * Created by Administrator on 2017/11/9.
 */
//回到页面顶部
$("#goTop").click(function(){
    $('body,html').animate({scrollTop:0},1500); //点击按钮让其回到页面顶部
});

$(window).scroll(function() {
    if($(window).scrollTop()>0 || getScrollTop()>0){
        $("#goTop").show();
    }else {
        $("#goTop").hide();
    }
});

function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset; }
    else if (document.compatMode && document.compatMode != 'BackCompat')
    { scrollPos = document.documentElement.scrollTop; }
    else if (document.body) { scrollPos = document.body.scrollTop; }
    return scrollPos;
}