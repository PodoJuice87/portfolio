$(document).ready(function() {
  // setTimeout(function(){
  //   $(".circle_wrap").addClass("onload");
  // },3000)

  const video = document.querySelector('video');
  video.onloadeddata = (event) => {
    $(".circle_wrap").addClass("onload");
  };

  // $("body").imagesLoaded( function(){});

  var i = 0;
  var state = false; // 현재 스크롤 꺼짐 상태
  var timer;
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
      if(delta > 0){
        clearTimeout(timer);
        timer = setTimeout(function(){
          intro(i,delta);
        },200);
      }else{
        clearTimeout(timer);
        timer = setTimeout(function(){
          intro(i,delta);
        },200);
      }
  });

  // setTimeout이라는 함수는 첫번째 재료로 실행할 함수를 입력하고, 두번째 재료로는 몇 초 뒤에 실행할 것인지에 대한 시간을 입력해 줄 수 있어요
  // 대신 setInterval처럼 1초마다 실행하는게 아니고 1초후에 한번만 실행해줍니다


  // 인트로 애니메이션 state 상태값이 false일 때만 작동하게 해줍니다~
  // 여기구문에서는 state값을 넣지않아도 상관없는데 안전장치겸 조건을 달아두었어요 state관련된 구문은 주석처리해도 작동합니다~
  function intro(num,delta){
    if(state == false){
      state = true;
      if(delta < 0){
        // console.log("내림");
        num++;
        if(num > 2){
          num = 2;
        }
        i = num;
      }else{
        // console.log("올림");
        num--;
        if(num < 0){
          num = 0;
        }
        i = num;
      }

      $("html,body").animate({scrollTop:0},800);
      $(".intro_wrap h1").removeClass("on");
      $(".intro_wrap h1").stop().clearQueue().eq(num).addClass("on");
      if (i == 2) {
        $(".scroll_down").addClass("off");
      }else {
        $(".scroll_down").removeClass("off");
      }
    }
    state = false;
  }

  // var timeout;
  //
  //   // 휠이벤트가 발생하면
  //   window.onwheel = function(){
  //       clearTimeout(timeout);  //이전 휠 이벤트 제거
  //       timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후
  //           // to do
  //       }, 1000);
  //   };
  $(".btn_start").click(function(){
    $("html,body").animate({scrollTop:1000},800);
  });
  var top = $(window).scrollTop();
  // console.log(top);
  $(".toTop").click(function(){
    // console.log("클릭");
    $("html,body").animate({scrollTop:0},800);
  });

});
