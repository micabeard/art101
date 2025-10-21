let count = 0;
let colors = ["Red", "Orange", "Yellow", "Green"]; // new line tp add
colors[1]; //returns "Coral".

$("#magic-button").click(function () {

let reminder=count % colors.length;

    $("#magic-button").html("Clicks" + count + "Color:" + colors[count]);
    $("body").css("background-color", colors[reminder]);
    count = count + 1;
});
