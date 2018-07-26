$(function() {
    $(".tasteButton").on("click", function(event) {
      var id = $(this).data("id");

      var tasteState = {
        tasted: true
      };
  
      // Send the PUT request.
      $.ajax("/api/whiskey/" + id, {
        type: "PUT",
        data: tasteState
      }).then(
        function() {
          console.log("changed taste state to", true);
          // Reload the page to get the updated list
          location.reload();
        });
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      if($("#name").val()) {
        var newWhiskey = {
          name: $("#name").val().trim(),
          tasted: false
          };

          // Send the POST request.
          $.ajax("/api/whiskey", {
              type: "POST",
              data: newWhiskey
          }).then(function() {
              // console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
          });
      }
      else {
          $("#name").val("");
      }
  });

//   // delete function if needed
//   $(".delete-whiskey").on("click", function(event) {
//       var id = $(this).data("id");

//       $.ajax("/api/whiskey/" + id, {
//           type: "DELETE"
//       }).then(function() {
//           // Reload the page to get the updated list
//           location.reload();
//       });
//   });  
});