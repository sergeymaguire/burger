// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devouredburger").on("click", function(event) {
    event.stopPropagation();
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id =   this.id;


    var newDevouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#addburger").on("click", function(event) {
    event.stopPropagation();
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      devoured:  0  
      };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created a new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
