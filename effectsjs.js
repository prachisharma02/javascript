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

  $("#btn7").click(function () {
    $("img").slideUp(4000);
  });

  $("#btn8").click(function () {
    $("img").slideDown();
  });

  $("#btn9").click(function () {
    $("img").slideToggle();
  });

  $("#btn10").click(function () {
    $("img").stop();
  });

  $("#btn11").click(function () {
    $("img").animate({ right: "350px", height: "500px" }, 1000); // left will only work when image position is absolute
  });
});
