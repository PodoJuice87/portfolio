$(document).ready(function() {
  var num = 0;
  $(".btn_next").click(function(){
    num++;
    if (num > 7){
      num=0;
    }
    $(".slide_item").css("transform","translateX(-"+num*12.5+"%)");
    $(".slide_nav > span > b").text(num+1);
  })
  $(".btn_prev").click(function(){
    num = num-1;
    if (num < 0){
      num=7;
    }
    $(".slide_item").css("transform","translateX(-"+num*12.5+"%)");
    $(".slide_nav > span > b").text(num+1);
  })
  var timer = setInterval(function(){
    num++;
    if (num > 7){
      num=0;
    }
    $(".slide_item").css("transform","translateX(-"+num*12.5+"%)");
    $(".slide_nav > span > b").text(num+1);
  },5000)
});
