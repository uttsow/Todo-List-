$(document).ready(function() {

    //Check off specific todos by clicking
    $("ul").on("click", "li", function() {
        //check if its black or line through and grey
        $(this).toggleClass("completed");
    });

    //Click on X to delete todo
    $("ul").on("click", "span", function() {
        $(this).parent().fadeOut(500, function() {
            //referes to the parent element
            $(this).remove();
        });
        event.stopPropagation();
    });

    //Adds new todo list items
    $("input[type='text']").keypress(function(e) {
        if (e.which === 13) {
            //grabs the text from the input tag
            var todoText = $(this).val();
            //clears input after enter
            $(this).val("");
            //create new li and add to ul
            $("ul").append("<li><span><i class='far fa-trash-alt'></i> </span> " + todoText + "</li>");
        }
    });

    //Toggles the add new todo input
    $(".fa-pencil-alt").on("click", function() {
        $("input[type='text']").fadeToggle(300);
    });
});
