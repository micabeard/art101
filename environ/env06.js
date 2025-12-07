$(function () {
    const inhaleSeconds = [1, 2, 3, 4],
        exhaleSeconds = [1, 2, 3, 4];

    let inhaleIndex = -1,
        exhaleIndex = -1;
    const myLittleJellyfish = {
        age: 2,
        name: "Spirulina",
        noBrain: true,
    };
    const bodyBg = $("body");
    const megaText = $("#megaSentence");
    const megaSentence = `<p id="megaSentence">
        Hi! My name is ${myLittleJellyfish.name}.
        I am ${myLittleJellyfish.age} years old, and some people ask:
        do I really have no brain? The answer is ${myLittleJellyfish.noBrain ? "yes" : "no"}.
    </p>`;

    $("#output").html(megaSentence);

    function labelFor(n) {
        return n + (n === 1 ? " second" : " second(s)");
    }

    function changeEnvironment(mood) {
        if (mood === "happy") {
            bodyBg.css("background-image", "url('../images/warmsea.jpg')");
            megaText.text(
                myLittleJellyfish.name + " is happy in the warm sea!"
            );
        } else if (mood === "calm") {
            $(bodyBg).css("background-image", "url('../images/water.jpg')");
            $(megaText).text(
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

    let followMouse = false;

    $("#toggle-follow").on("click", function () {
        followMouse = !followMouse;
        $(this).text(followMouse ? "Disable Follow Mode" : "Enable Follow Mode");
    });

    $(document).mousemove(function (event) {
        if (!followMouse) return;

        $("#myjellyfish").css({
            left: event.pageX - 100,
            top: event.pageY - 100
        });
    });
});