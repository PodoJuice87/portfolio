$(document).ready(function() {

  var num = 0;
  $(".btn_next").click(function(){
    $(".slide > li").removeClass("on");
    $(".slide_desc > li").removeClass("on");
    $(".slide_bullet > li > a").removeClass("on");
    num++
    if (num > 2) {
      num = 0;
    }
    $(".slide > li").eq(num).addClass('on');
    $(".slide_desc > li").eq(num).addClass('on');
    $(".slide_bullet > li > a").eq(num).addClass('on');
  });

  $(".btn_prev").click(function(){
    $(".slide > li").removeClass("on");
    $(".slide_desc > li").removeClass("on");
    $(".slide_bullet > li > a").removeClass("on");
    num = num-1
    if (num < 0) {
      num = 2
    }
    $(".slide > li").eq(num).addClass('on');
    $(".slide_desc > li").eq(num).addClass('on');
    $(".slide_bullet > li > a").eq(num).addClass('on');
  });

  $(".slide_bullet > li > a").click(function() {
    $(".slide > li").removeClass("on");
    $(".slide > li > a").removeClass("on");
    $(".slide_bullet > li > a").removeClass("on");
    num = $(".slide_bullet > li > a").index(this);
    $(".slide > li").eq(num).addClass('on');
    $(".slide_desc > li").eq(num).addClass('on');
    $(".slide_bullet > li > a").eq(num).addClass('on');
  });

  var timer = setInterval(function(){
    $(".slide > li").removeClass("on");
    $(".slide_desc > li").removeClass("on");
    $(".slide_bullet > li > a").removeClass("on");
    num++
    if (num > 2) {
      num = 0;
    }
    $(".slide > li").eq(num).addClass('on');
    $(".slide_desc > li").eq(num).addClass('on');
    $(".slide_bullet > li > a").eq(num).addClass('on');
  },3000);

  $(".main_banner").mouseenter(function() {
    clearInterval(timer);
  });
  $(".main_banner").mouseleave(function() {
    timer = setInterval(function(){
      $(".slide > li").removeClass("on");
      $(".slide_desc > li").removeClass("on");
      $(".slide_bullet > li > a").removeClass("on");
      num++
      if (num > 2) {
        num = 0;
      }
      $(".slide > li").eq(num).addClass('on');
      $(".slide_desc > li").eq(num).addClass('on');
      $(".slide_bullet > li > a").eq(num).addClass('on');
    },3000);
  });

});
