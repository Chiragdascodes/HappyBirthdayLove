// Typewriter effect for the birthday message
let messageText = "To my one and only, may your day be filled with love, laughter, and endless joy. 💖";
let i = 0;

function typeWriter() {
  if (i < messageText.length) {
    document.getElementById("message").innerHTML += messageText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = function() {
  typeWriter();
  createHearts();
};

function createHearts() {
  const floatingHearts = document.querySelector(".floating-hearts");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    floatingHearts.appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
  }, 200);
}

function showSurprise() {
    window.location.href = "main.html"; // Replace with the actual path of your new index.html
  }
  
  
  function createHeartsAnimation() {
    const floatingHearts = document.querySelector(".floating-hearts");
    for (let i = 0; i < 10; i++) { // Adjust number of hearts
      const heart = document.createElement("div");
      heart.classList.add("heart-animation");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
      heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random float duration
      floatingHearts.appendChild(heart);
  
      // Remove heart after animation
      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    }
  }
  