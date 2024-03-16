//First way to use evenets using normal function in jquery
// $("#btn2").click(list); // if here do change() it will not wait for to click it will directly make changes
// function list() {
//   $("li:odd").fadeToggle();
// }

// $("#btn2").click(function () {
//   // anonymous  function
//   $("li:odd").fadeToggle();
// });

/*basically ready is used if there are various components in a document and we have applied functionalities 
to button lets say so if button loads first then it will execute its operation before other content loading 
so ready comes in to firsts load the whole document */

$(document).ready(function () {
  // here document refers to documeht as a whole
  /* this is used when we want our page to start working once the whole document is loaded and ready for
  the next request cycle to complete before the next request*/
  $("#btn2").click(function () {
    // anonymous  function
    $("li:odd").fadeToggle();
  });

  $("#btn1").dblclick(function () {
    // anonymous  function
    $("#img1").css("height", "600px");
    $("#img1").css("width", "800px");
  });
});

$("img").mouseenter(function () {
  $("#img1").css("height", "500px");
  $("#img1").css("width", "600px");
});

$("img").mouseleave(function () {
  $("#img1").css("height", "300px");
  $("#img1").css("width", "500px");
});
// but this require two different function as well as two different events

// we can do this by just one event of jquery

$("img").hover(
  function () {
    $("#img1").css("height", "500px");
    $("#img1").css("width", "600px");
  },
  function () {
    $("#img1").css("height", "300px");
    $("#img1").css("width", "500px");
  }
);

/* there are more other events in jquery
mouse events = click,dblclick,mouseenter,mouseleave
keyboardevents =keypress, keydown ,MediaKeyStatusMap
form events =submit, change, focus, blur
document / window events = load,resize,scroll,unload*/
