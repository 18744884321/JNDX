$(function(){
	$(".row1-left .content").hide().eq(0).show();
    $(".div-tab li").click(function(){
        $(".row1-left li").removeClass("active");
        $(this).addClass("active");
        var n = $(this).index();
        $(".row1-left .content").hide().eq(n).show();

    })
    











	
})