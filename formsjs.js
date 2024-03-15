$("#btn1").click(function update() {
  let name = $("#name").val();
  let sal = $("#sal").val();
  let age = $("#age").val();
  let image = $("#img").val();

  console.log(name);
  console.log(sal);
  console.log(age);
  console.log(image);

  $("#tb").append(
    "<tr><td>" +
      name +
      "</td><td>" +
      sal +
      "</td><td>" +
      age +
      "</td>" +
      "<td><img style='width:100px; height:100px' src='" +
      image +
      "'></td><td>" +
      "<button id='btn2'>edit</button>" +
      "</td><td>" +
      "<button id='btn3'>delete</button>" +
      "</td><td>" +
      "<button id='btn4'>update</button>" +
      "</td></tr> +"
  );
  $("#btn3").click(function () {
    $(this).closest("tr").remove();
  });
});
