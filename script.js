// Slideshow
const slides = document.querySelectorAll("#slideshow img");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

// Background Music
const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleMusic");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔇 Pause Music";
  } else {
    music.pause();
    toggleBtn.textContent = "🔊 Play Music";
  }
});

// Auto start music when site loads (after small delay)
window.addEventListener("load", () => {
  setTimeout(() => {
    music.play().catch(() => {}); // Avoids browser autoplay restrictions
    toggleBtn.textContent = "🔇 Pause Music";
  }, 5000);
});
