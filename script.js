const boutonOlder = document.getElementById("trustButton")
const paragraph = document.getElementById("trustText");
const rickGif = document.getElementById("rickGif");
const rickText = document.getElementById("rickText");
const title = document.getElementById("title");
const icon = document.getElementById("icon");

var audio = new Audio('music.mp3');

boutonOlder.addEventListener("click", startrickrolled);

function startrickrolled() {
    boutonOlder.className = "hidden";
    paragraph.className = "hidden";
    rickGif.className = "";
    rickText.className = "";
    title.innerHTML = "You have been Rick-Rolled";
    icon.setAttribute("href","icon.png")
    audio.play();
}

console.log(title.innerText);