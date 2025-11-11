$(function () {
    const inhaleSeconds = [1, 2, 3, 4];
    const exhaleSeconds = [1, 2, 3, 4];

    let inhaleIndex = -1;
    let exhaleIndex = -1;

    const myLittleJellyfish = {
        age: 2,
        name: "Spirulina",
        noBrain: true,
    };

    const megaSentence = `<p id="megaSentence">
        Hi! My name is ${myLittleJellyfish.name}.
        I am ${myLittleJellyfish.age} years old, and some people ask:
        do I really have no brain? The answer is ${myLittleJellyfish.noBrain ? "yes" : "no"}.
    </p>`;

    $("#output").html(megaSentence);

    function labelFor(n) {
        return n + (n === 1 ? " second" : " second(s)");
    }

    function changeEnvironment(mood, waterTemp) {
        if (mood === "happy") {
            $("body").css("background-image", "url('../images/warmsea.jpg')");
            $("#megaSentence").text(
                myLittleJellyfish.name + " is happy in the warm sea!"
            );
        } else if (mood === "calm") {
            $("body").css("background-image", "url('../images/water.jpg')");
            $("#megaSentence").text(
                myLittleJellyfish.name + " is feeling calm and peaceful."
            );

        }
    }

    $("#magic-button").on('click', function () {
        const $btn = $(this);
        const current = $btn.text().trim().toLowerCase();

        if (current === 'inhale for') {
            inhaleIndex = 0;
        } else {
            inhaleIndex = (inhaleIndex + 1) % inhaleSeconds.length;
        }

        const value = inhaleSeconds[inhaleIndex];
        $btn.text(labelFor(value));

        if (value >= 3) {
            changeEnvironment("calm");
        } else {
            changeEnvironment("happy");
        }
    });

    $("#magic-button2").on('click', function () {
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
    $("#myjellyfish").hover(
        function () {
            $("#myfishies").animate(
                { marginLeft: "1000px", opacity: 0.2 },
                2000);
            $("#megaSentence").text("Spirulina scared the fish away!");
        },
        function () {
            // On hover out — bring fish back
            $("#myfishies").animate(
                { marginLeft: "500px", opacity: 1 },
                2000
            );
            $("#megaSentence").text("The fish came back. All is calm again.");
        });
});
