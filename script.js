let noButton = document.getElementById("noButton");
let sadGif = document.getElementById("sadGif");
let yesVideo = document.getElementById("yesVideo");

function handleYesClick() {
    alert("ihh enebe pereng tenge");
    yesVideo.style.display = "block";
    yesVideo.play();
}

function handleNoClick() {
    // Shrink the No button
    let currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = (currentSize - 2) + "px";

    // Show the sad GIF
    sadGif.style.display = "block";
}
