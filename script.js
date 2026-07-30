/* ==========================================
   Birthday Website - script.js
   Common JavaScript
========================================== */

/* ------------------------------
   Moving "Not Yet" Button
------------------------------ */

document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");

    if (noBtn) {

        function moveButton() {

            const maxX = window.innerWidth - noBtn.offsetWidth - 20;
            const maxY = window.innerHeight - noBtn.offsetHeight - 20;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            noBtn.style.position = "fixed";
            noBtn.style.left = randomX + "px";
            noBtn.style.top = randomY + "px";

        }

        noBtn.addEventListener("mouseenter", moveButton);
        noBtn.addEventListener("click", moveButton);

    }

});


/* ------------------------------
   Scratch Card Reveal
------------------------------ */

document.addEventListener("DOMContentLoaded", function () {

    const cover = document.getElementById("scratchCover");

    if (!cover) return;

    let scratches = 0;

    function scratch() {

        scratches++;

        cover.style.opacity = 1 - scratches / 45;

        if (scratches > 45) {

            cover.style.display = "none";

        }

    }

    cover.addEventListener("mousemove", scratch);
    cover.addEventListener("touchmove", scratch);

});


/* ------------------------------
   Countdown
------------------------------ */

document.addEventListener("DOMContentLoaded", function () {

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const finalContent = document.getElementById("finalContent");
    const countText = document.getElementById("countText");

    let count = 5;

    countdown.innerHTML = count;

    const timer = setInterval(function () {

        count--;

        if (count >= 0) {

            countdown.innerHTML = count;

        }

        if (count < 0) {

            clearInterval(timer);

            countdown.style.display = "none";

            if (countText)
                countText.style.display = "none";

            if (finalContent)
                finalContent.style.display = "block";

            startCelebration();

        }

    }, 1000);

});


/* ------------------------------
   Celebration
------------------------------ */

function startCelebration() {

    /* Confetti */

    if (typeof confetti === "function") {

        confetti({

            particleCount: 350,

            spread: 360,

            startVelocity: 45,

            origin: {

                x: 0.5,
                y: 0.6

            }

        });

    }

    /* Fireworks */

    if (typeof Fireworks !== "undefined") {

        const container = document.getElementById("fireworks");

        if (container) {

            const fireworks = new Fireworks.default(container, {

                autoresize: true,

                rocketsPoint: {

                    min: 20,
                    max: 80

                },

                hue: {

                    min: 0,
                    max: 360

                },

                delay: {

                    min: 15,
                    max: 30

                },

                speed: 4,

                acceleration: 1.05,

                friction: 0.96,

                gravity: 1.5,

                particles: 120,

                trace: 5,

                explosion: 8

            });

            fireworks.start();

        }

    }

}


/* ------------------------------
   Floating Hearts Generator
------------------------------ */

document.addEventListener("DOMContentLoaded", function () {

    const hearts = document.querySelector(".hearts");

    if (!hearts) return;

    const emojis = ["❤️", "💖", "💕", "💗", "💝", "💞"];

    setInterval(function () {

        const heart = document.createElement("span");

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            Math.random() * 20 + 20 + "px";

        heart.style.animationDuration =
            Math.random() * 4 + 6 + "s";

        hearts.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 9000);

    }, 700);

});


/* ------------------------------
   Smooth Page Fade
------------------------------ */

document.addEventListener("DOMContentLoaded", function () {

    document.body.style.opacity = 0;

    setTimeout(function () {

        document.body.style.transition = "opacity 1s";

        document.body.style.opacity = 1;

    }, 100);

});