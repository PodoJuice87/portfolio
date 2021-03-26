$(document).ready(function() {


  $(".slide_nav_list").bxSlider({
    mode:"vertical",
    auto: true,
    autoControls: false,
    stopAutoOnClick: true,
    pager: false,
    controls:false,
    infiniteLoop:true,
    onSlideBefore:function(oldIndex,newIndex){
      newIndex++;
      if(newIndex > 4){
        newIndex = 0;
      }
      // console.log(newIndex);
      $(".slide_1 > li").removeClass("on");
      $(".slide_nav_list > li").removeClass("on");
      $(".slide_1 > li").children(".captions").removeClass("on");
      $(".slide_1 > li").eq(newIndex).addClass("on");
      $(".slide_nav_list > li").eq(newIndex+1).addClass("on");
      $(".slide_1 > li").eq(newIndex).children(".captions").addClass("on");
    }
  });



});
