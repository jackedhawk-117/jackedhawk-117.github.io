const roles = [
    "Cybersecurity Enthusiast",
    "CTF Competitor",
    "Secure Backend Developer",
    "Offensive Security Learner"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
    current = roles[i];
    if (!isDeleting) {
        document.getElementById("typing").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        document.getElementById("typing").textContent = current.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

