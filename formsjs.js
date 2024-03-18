$(document).ready(function () {
  var sno = 1;

  $("#btn1").click(function AddOrUpdateRow() {
    let name = $("#name").val();
    let sal = $("#sal").val();
    let age = $("#age").val();
    let image = $("#img").val();
    /* $(".update"): This is a jQuery selector that selects all elements with the class update. It returns a jQuery object containing all such elements.
    .length: This is a property of the jQuery object, which returns the number of elements matched by the selector.*/
    // So, $(".update").length essentially checks if there are any elements in the DOM with the class update
    if ($(".update").length) {
      var rowToUpdate = $(".update").closest("tr");
      rowToUpdate.find("td:eq(1)").text(name);
      rowToUpdate.find("td:eq(2)").text(sal);
      rowToUpdate.find("td:eq(3)").text(age);
      rowToUpdate.find("img").attr("src", image);
      rowToUpdate.removeClass("update");
    } else {
      $("#tb").append(
        "<tr><td>" +
          sno +
          "</td><td>" +
          name +
          "</td><td>" +
          sal +
          "</td><td>" +
          age +
          "</td>" +
          "<td><img style='width:100px; height:100px' src=" +
          image +
          "></td><td>" +
          "<button class='btn3'>delete</button>" +
          "</td><td>" +
          "<button class='btn4'>update</button>" +
          "</td></tr>"
      );
      sno++; // Increment sno only when adding a new row
    }

    $("#name").val("");
    $("#sal").val("");
    $("#age").val("");
    $("#img").val("");
  });
  //delete button
  $(document).on("click", ".btn3", function () {
    $(this).closest("tr").remove();
  });

  //  update button
  $(document).on("click", ".btn4", function (e) {
    e.preventDefault();
    var row = $(this).closest("tr");
    const currentName = row.find("td:eq(1)").text();
    const currentSal = row.find("td:eq(2)").text();
    const currentAge = row.find("td:eq(3)").text();
    const currentImage = row.find("img").attr("src");

    $("#name").val(currentName);
    $("#sal").val(currentSal);
    $("#age").val(currentAge);
    $("#img").val(currentImage);

    row.addClass("update");
  });
});
