
const container = document.getElementById("mainContainer");
const openBtn = document.getElementById("openBtn");

let isOpened = false;

openBtn.addEventListener("click", () => {

    if (isOpened) return;

    isOpened = true;

    // Start envelope opening animation
    container.classList.add("opened");

    // Reveal the full birthday letter
    setTimeout(() => {
        container.classList.add("show-letter");

        // Start floating hearts
        startHearts();

    }, 1000);

});

function startHearts() {

    const heartInterval = setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        const hearts = ["❤️", "💕", "💗", "💖", "♡"];

        heart.textContent = hearts[
            Math.floor(Math.random() * hearts.length)
        ];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 450);

    // Stop creating hearts after 10 seconds
    setTimeout(() => {
        clearInterval(heartInterval);
    }, 10000);

}
