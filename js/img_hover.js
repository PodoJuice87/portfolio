$(document).ready(function(){
  var clicked = 0;
  $(".contents_img").click(function(){
    if(clicked == 0){
      $(this).children(".back_img").addClass("on");
      clicked = 1;
    }else{
      $(this).children(".back_img").removeClass("on");
      clicked = 0;
    }
  });
});
