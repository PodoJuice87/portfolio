$(document).ready(function() {
    $(".slide_1 > li").eq(0).children(".captions").addClass("on");

  var slider = $(".slide_nav_list").bxSlider({
    mode:"vertical",
    auto: true,
    speed:700,
    pause:6000,
    touchEnabled:false,
    minSlides:3,
    maxSlides:3,
    moveSlides:1,
    ariaLive:false,
    ariaHidden:false,
    autoControls:false,
    stopAutoOnClick:true,
    autoHover:true,
    pager: false,
    controls:true,
    infiniteLoop:true,
    nextSelector:"#slide_next",
    prevSelector:"#slide_prev",
    onSlideBefore:function(){
      $(".slide_1 > li").removeClass("on");
      $(".slide_nav_list > li").removeClass("on");
      $(".slide_nav_list > li").removeClass("on_before");
      $(".slide_nav_list > li").removeClass("on_after");
      $(".slide_1 > li").children(".captions").removeClass("on");
    },
    onSlideNext:function(oldIndex,newIndex){
      newIndex++;
      if(newIndex > 4){
        newIndex = 0;
      }
      // console.log(newIndex);
      $(".slide_1 > li").eq(newIndex).addClass("on");
      $(".slide_nav_list > li").eq(newIndex+2).addClass("on_before");
      $(".slide_nav_list > li").eq(newIndex+3).addClass("on");
      $(".slide_nav_list > li").eq(newIndex+4).addClass("on_after");
      $(".slide_1 > li").eq(newIndex).children(".captions").addClass("on");
    },
    onSlidePrev:function(oldIndex,newIndex){
      newIndex--;
      if(newIndex < 0){
        newIndex = 4;
      }
      // console.log(newIndex);
      $(".slide_1 > li").eq(newIndex).addClass("on");
      $(".slide_nav_list > li").eq(newIndex+2).addClass("on_before");
      $(".slide_nav_list > li").eq(newIndex+3).addClass("on");
      $(".slide_nav_list > li").eq(newIndex+4).addClass("on_after");
      $(".slide_1 > li").eq(newIndex).children(".captions").addClass("on");
    },

    // onSlideAfter:function(){
    //   $(".slide_nav_list > li.on_before").click(function(){
    //     console.log("이전");
    //     slider.goToPrevSlide();
    //   });
    //   $(".slide_nav_list > li.on_after").click(function(){
    //     slider.goToNextSlide();
    //   });
    // }

  });



});
