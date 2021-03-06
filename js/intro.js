$(document).ready(function() {
  var i = 0;
  $(".intro_wrap").on("mousewheel DOMMouseScroll", function(e){
    e.preventDefault();
    var evt = e.originalEvent;
    delta = 0;
    if(evt.detail==true){
      //브라우저가 파폭인경우
      delta = evt.detail * -40;
    }else{
      //브라우저가 익스, 크롬, 오페라인 경우
      delta = evt.wheelDelta;
    }
    $(".intro_wrap h1").removeClass("on");

    function wheelact(){
      if(delta > 0){
        i = i - 1;
        if(i < 0){
          i = 0;
        }
          $(".intro_wrap h1").eq(i).addClass("on");
      }else{
        i++;
        if(i > 2){
          i = 2;
        }
        $(".intro_wrap h1").eq(i).addClass("on");
      }
    }
    setTimeout(function(){wheelact()},1000);

  });
});
