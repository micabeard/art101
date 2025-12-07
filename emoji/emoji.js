/* ------------------------- IMAGE OPTIONS ------------------------- */

const faces = [
    "https://i.imgur.com/EsVtbZy.png",
    "https://i.imgur.com/69a4i6e.png",
    "https://i.imgur.com/bF24Y7g.png"
];

const eyesList = [
    "https://i.imgur.com/G6s7LyH.png",
    "https://i.imgur.com/cyWVF6k.png",
    "https://i.imgur.com/lLdRj7A.png"
];

const mouths = [
    "https://i.imgur.com/LXvLxPl.png",
    "https://i.imgur.com/3eDuK5A.png",
    "https://i.imgur.com/GIwSxR1.png"
];

const browsList = [
    "https://i.imgur.com/HT8HwQG.png",
    "https://i.imgur.com/T5CescE.png",
    "https://i.imgur.com/0gAqtBe.png"
];

/* ------------------------- CREATE OPTION BUTTONS ------------------------- */

function createOptionImages(containerId, imageList, callback) {
    const container = document.getElementById(containerId);

    imageList.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "option-img";

        img.onclick = () => {
            // highlight selected
            [...container.children].forEach(i => i.classList.remove("option-selected"));
            img.classList.add("option-selected");

            callback(src, index);
        };

        container.appendChild(img);
    });
}

/* ------------------------- INITIALIZE PICKERS ------------------------- */

window.onload = () => {
    createOptionImages("faceOptions", faces, (src) => {
        document.getElementById("face").src = src;
    });

    createOptionImages("eyesOptions", eyesList, (src) => {
        document.getElementById("eyes").src = src;
    });

    createOptionImages("mouthOptions", mouths, (src) => {
        document.getElementById("mouth").src = src;
    });

    createOptionImages("browsOptions", browsList, (src) => {
        document.getElementById("brows").src = src;
    });
};

/* ------------------------- DOWNLOAD ------------------------- */

function downloadEmoji() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    const layers = [
        document.getElementById("face"),
        document.getElementById("eyes"),
        document.getElementById("mouth"),
        document.getElementById("brows")
    ];

    let loaded = 0;
    layers.forEach(img => {
        if (img.src) {
            const temp = new Image();
            temp.crossOrigin = "anonymous";
            temp.src = img.src;
            temp.onload = () => {
                ctx.drawImage(temp, 0, 0, canvas.width, canvas.height);
                loaded++;
                if (loaded === layers.length) finishDownload();
            };
        } else {
            loaded++;
            if (loaded === layers.length) finishDownload();
        }
    });

    function finishDownload() {
        const link = document.createElement("a");
        link.download = "emoji.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }
}