const boutonOlder = document.getElementById("overbutton")
const paragraph = document.getElementById("paragraph");
const rick = document.getElementById("image");
var audio = new Audio('musique.mp3');

boutonOlder.addEventListener("click", startrickrolled);

function startrickrolled() {
    boutonOlder.className = "hidden";
    paragraph.className = "hidden";
    rick.className = "rickimg";
    audio.play();
}