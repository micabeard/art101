
// add a button titled click me

let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line tp add
colors[1]; //returns "Coral".

$("#needy-button").click(function () {

let reminder=count % colors.length;

    $("#needy-button").html("Clicks" + count + "Color:" + colors[count]);
    $("body").css("background-color", colors[reminder]);
    count = count + 1;
});

// when it is clicked
// add one to the total number 

//  show the total number
//on our button
// show "clicked total number times"


// a top limit