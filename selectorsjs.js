function change() {
  // similar to getelemetbytagname
  // $("div").css("background-color", "orange"); // it will change the color of all div elements background to orange.
  // $("#div2").css("background-color", "orange"); // to chnage only particular div
  // it will not work for similar ids jquery needs id to be unique but can be possible with class
  // $("#div3,#div1").css("background-color", "green"); // to change multiple divs with diffrenet id
  $("#div1,li,.para").css("background-color", "purple"); // we can also do this like one is id and other is class or tagname
  // $("div li").fadeToggle(); // to access inside the element also("div >li")
  // $("p:first").fadeToggle(); // it does not support furthur like second or third and it will acess the very first p tag in wole document
  // $("li:odd").fadeToggle(); // can also work with even
}
