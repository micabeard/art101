
let totalNumber = 0;

// add a button titled click me

$("#needy-button").click(function () {
    totalNumber = totalNumber + 3;

    let sentence = "I love you ";
    let comment = " times more";
    let totalNumbers= sentence + totalNumber + comment;

        $("#needy-button").html(totalNumbers);
});

// when it is clicked
// add one to the total number 

//  show the total number
//on our button
// show "clicked total number times"


// a top limit