//a variable for storing names

//when the button is clicked (event) 

$("#add-creature").click(
function () {
    alert("button is clicked");

//reach for this input field and grab the text from it;
let crName = $("#crName").val();
$("#creature-list").append(crName);
});
//the magic move 
//