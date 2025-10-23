var count = 0;
let colorCount=0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"]; 


$("#needy-button").click(function () {

    if ( count < 5) { mood = "gresh and happy" ; }
    else if ( (count >=5) && (count <10 )) { mood="keep pushing"; }
    else { mood = "so tired" ; }

    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] + " " + mood); 

    $("body").css("background-color", colors[colorCount]);

    if ( colors[colorCount] == "Orchid" ) {
        $("body").append("<img width=50 src='images/orchid.png'>");
}



    count = count + 1;
    colorCount = colorCount + 1;

    if ( colorCount == 4 ) {  colorCount=0;  }




});





// let count = 0;
// let colorIndex = 0;
// let mood;
// let colors = ["Orchid", "Coral", "HotPink", "Plum"];

// $("#needy-button").click(function () {

//     if (count < 5) { mood = "fresh and happy"; }
//     else if ( count > 3) { mood = "keep pushing"; }
//     else { mood = "so tired!"; }

//     $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorIndex] + " - " + mood);

//     $("body").css("background-color", colors[colorIndex]);

//     count = count + 1;
//     colorIndex = colorIndex + 1;

//     if (colorIndex == 4) { colorIndex = 0; } // new line

// });











// let count = 0;
// let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 

// $("#needy-button").click(function () {

//     $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count]  + " ...fresh and happy" ); 

//     $("body").css("background-color", colors[count]);

//     count = count + 1;

//     if (count==4) { count=0; } // new line

// });
﻿
