$(document).ready(function() {
  $("#submit").on("click", function() {
    event.preventDefault();

    var newBurger = {
      name: $("#name")
        .val()
        .trim()
    };

    console.log("newBurger", newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function(result) {
      console.log("New burger Added");
      location.reload();
    });
  });
});
