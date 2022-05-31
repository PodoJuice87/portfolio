$(document).ready(function() {
  function popup(){
    var url = "./assetbox/index1.html";
    var name = "popup";
    var option = "width=600,height=1000,resizable=no,scrollbars=no,left=0,top=0";
    window.open(url,name,option);
  }
  $("#goapp").click(function(){
    popup();
    return false;
  });
});
