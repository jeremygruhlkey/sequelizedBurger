// front end jQuery form controls for html.

$(function() {
    $(".eat-it").on("click", function(event){
        let id = $(this).data("id");
        let newEaten = $(this).data("newEaten");
        console.log("id: ", id);
        console.log("newEaten: ", newEaten);
        let newEatenState = {
            eaten: newEaten
        };
        console.log("newEatenState:")
        console.log(newEatenState);
        // Send AJAX PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function(){
                console.log("changed eaten to ", newEaten)
                location.reload();
            }
        )
    })
})