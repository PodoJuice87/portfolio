$(document).ready(function(){
  $(window).scroll(function(){
    var currentScroll = ($(window).scrollTop()/50);
    console.log(currentScroll);
    $("#para1").css("bottom",currentScroll-52+"%");
    $("#para2").css("bottom",currentScroll-76+"%");
    $("#para3").css("bottom",currentScroll-72+"%");
    var lastimg = currentScroll*8-1340;
    if (lastimg > 0) {
      lastimg = 0;
    }
    $("#para4").css("bottom",lastimg+"%");
    if (currentScroll*50 > 500) {
      $(".toTop").addClass("on");
    }else {
      $(".toTop").removeClass("on");
    }
  });
});
