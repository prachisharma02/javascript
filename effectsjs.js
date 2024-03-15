$(document).ready(function () {
  $("#btn1").click(function () {
    $("img").fadeOut(3000);
  });
  $("#btn2").click(function () {
    $("img").fadeIn();
  });
  $("#btn3").click(function () {
    $("img").hide(2000);
  });
  $("#btn4").click(function () {
    $("img").show(1000);
  });
  $("#btn5").click(function () {
    $("img").toggle(2500);
  });

  $("#btn6").click(function () {
    $("img").fadeToggle(2500);
  });
});
