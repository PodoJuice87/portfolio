$(document).ready(function() {

  $("header").mouseover(function(){
    $(".swap_logo").attr("src","./img/logo_on.svg");
    $(".swap_search").attr("src","./img/search_on.svg");
    $(".swap_user").attr("src","./img/user_on.svg");
  });
  $("header").mouseout(function(){
    $(".swap_logo").attr("src","./img/logo.svg");
    $(".swap_search").attr("src","./img/search.svg");
    $(".swap_user").attr("src","./img/user.svg");
  });
});
