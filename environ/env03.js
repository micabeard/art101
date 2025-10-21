$(function() {
    const inhaleSeconds = [1, 2, 3, 4];
    const exhaleSeconds = [1, 2, 3, 4];

    let inhaleIndex = -1;
    let exhaleIndex = -1;

    const myLittleJellyfish = {
        age: 2,
        name: "Spirulina",
        noBrain: true,
    };

    // explanatory intro and the megaSentence built from the jellyfish object
    const megaSentence = "<p id=\"megaSentence\">Hi! My name is " + myLittleJellyfish.name +
        ". I am " + myLittleJellyfish.age +
        " years old, and some people ask: do I really have no brain? The answer is " +
        (myLittleJellyfish.noBrain ? "yes" : "no") +
        ".</p>";

    // write both intro and megaSentence into #output
    $("#output").html(megaSentence);

    function labelFor(n) {
        return n + (n === 1 ? " second" : " second(s)");
    }

    // handler for inhale button: use inhaleSeconds array
    $("#magic-button").on('click', function() {
        const $btn = $(this);
        const current = $btn.text().trim().toLowerCase();

        if (current === 'inhale for') {
            inhaleIndex = 0;
        } else {
            inhaleIndex = (inhaleIndex + 1) % inhaleSeconds.length;
        }
        const value = inhaleSeconds[inhaleIndex];
        $btn.text(labelFor(value));
    });

    // handler for exhale button: use exhaleSeconds array
    $("#magic-button2").on('click', function() {
        const $btn = $(this);
        const current = $btn.text().trim().toLowerCase();

        if (current === 'exhale for') {
            exhaleIndex = 0;
        } else {
            exhaleIndex = (exhaleIndex + 1) % exhaleSeconds.length;
        }
        const value = exhaleSeconds[exhaleIndex];
        $btn.text(labelFor(value));
    });
});