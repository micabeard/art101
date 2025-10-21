// add a button titled click me

$(function() {
    // start at 1 so the button initially shows "1 second(s)"
    let count = 1;
    let colors = ["Orchid", "Coral", "HotPink", "Plum"]; // color choices for background

    // set initial button text
    $("#needy-button").text(count + " second(s)");

    $("#needy-button").click(function () {
        // increment first so after click it shows the next number
        count = count + 1;

        // update the button label
        $("#needy-button").text(count + " second(s)");

        // choose a background color based on the current count (safe with modulus)
        let colorIndex = (count - 1) % colors.length; // subtract 1 to map 1-based count to 0-based index
        $("body").css("background-color", colors[colorIndex]);
    });
});

// when it is clicked
// add one to the total number 

//  show the total number
//on our button
// show "clicked total number times"


// a top limit