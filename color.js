$(document).ready(function() {
  $(".color").each(function() {
    var color = $(this).text();
    $(this).css("color",color);
    $(this).prepend("<div style='background:"+color+"'></div>");
  });
});
