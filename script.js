const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "ihhh enebe pereng tenge👉🏻👈🏻🥺";
  gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  // Move the "No" button randomly on hover
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {
  // Shrink the "No" button on click
  const currentWidth = parseInt(window.getComputedStyle(noBtn).width);
  const currentHeight = parseInt(window.getComputedStyle(noBtn).height);

  if (currentWidth > 50 && currentHeight > 20) {  // Set a minimum size limit
    noBtn.style.width = (currentWidth - 10) + "px";
    noBtn.style.height = (currentHeight - 5) + "px";
  }
});
