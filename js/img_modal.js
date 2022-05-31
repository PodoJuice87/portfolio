$(document).ready(function() {
  $(".slide_item").click(function(){
    var idx = $(this).attr("id");
    $(".con3 .modal#"+idx).addClass("on");
    return false;
  });
  $(".close").click(function(){
    $(".modal").removeClass("on");
  });
});
