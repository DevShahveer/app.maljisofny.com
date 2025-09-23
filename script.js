let navlinks = document.getElementById("navlinks");
let hamburger = document.getElementById("hamburger");
let closeBtn = document.getElementById("close");

hamburger.addEventListener("click", () => {
  navlinks.classList.remove("-translate-x-full");
});

closeBtn.addEventListener("click", () => {
  navlinks.classList.add("-translate-x-full");
});
