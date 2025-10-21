// declaring an array with name myCommutes
$(function() {
    let myCommutes = [
        "metro bus, ",
        "my car",
        "carver skateboard",
        "my feet",
        "some random car",
        "friends",
    ];

// declaring an object with name myFavouriteCommute
let myFavoriteCommute = {
    type: "my car",
    age: 7,
    name: "Stewart",
    guzzlesGas: true,
    drivers: ["me", "myself", "I"],
};
    

    let megaSentence = "<p>My top two ways of commuting are: " + myCommutes[0]  +  myCommutes[5] + "</p>";
    megaSentence +=
        "<p>My all time favourite commute is: " +
        myFavoriteCommute.type +
        ". His name is " +
        myFavoriteCommute.name +
        ", and he is " +
        myFavoriteCommute.age +
        " years old.</p>";

    $("#output").html(megaSentence);
});

