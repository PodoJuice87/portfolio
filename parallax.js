$(document).ready(function(){
  $(window).scroll(function(){
    var currentScroll = ($(window).scrollTop());
    // console.log(currentScroll);
    $("#para1").css("bottom",currentScroll/50-52+"%");
    $("#para2").css("bottom",currentScroll/50-76+"%");
    $("#para3").css("bottom",currentScroll/50-72+"%");
    $("#para5").css("bottom",currentScroll/50-150+"%");
    var lastimg = currentScroll/50*8-1580;
    if (lastimg > 0) {
      lastimg = 0;
    }
    $("#para4").css("bottom",lastimg+"%");
    if (currentScroll > 500) {
      $(".toTop").addClass("on");
    }else {
      $(".toTop").removeClass("on");
    }
    return false;
  });
});
