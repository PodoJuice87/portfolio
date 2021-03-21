$(document).ready(function() {
  $(".slide_item").click(function(){
    var idx = $(this).attr("id");
    $(".con3 .caption#"+idx).addClass("on");
    return false;
  });
  $(".close").click(function(){
    $(".caption").removeClass("on");
  });
});
