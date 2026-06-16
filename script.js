// typing effect
const text = "Meet Snow 🐶✨";
let i = 0;

function type(){
if(i < text.length){
document.querySelector(".typing").innerHTML += text.charAt(i);
i++;
setTimeout(type,80);
}
}

type();

/* LOVE COUNTER */
let loves = 0;

document.getElementById("loveBtn").addEventListener("click", () => {
loves++;
document.getElementById("loveCount").innerText =
"Snow has " + loves + " loves so far 💖";
});

/* CURSOR HEART FOLLOW */
const cursor = document.querySelector(".cursor-heart");

document.addEventListener("mousemove", (e) => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

/* SCROLL REVEAL */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add("show");
}
});
});
