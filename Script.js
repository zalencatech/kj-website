/* Hide Loader */
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

/* Smooth Scroll for Menu Links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* Featured Projects Slider */
const slider = document.getElementById("slide");
const sliderImages = [
  "project1.jpg",
  "project2.jpg",
  "project3.jpg",
  "project4.jpg",
  "project5.jpg"
];

if (slider) {
  let current = 0;
  setInterval(() => {
    current = (current + 1) % sliderImages.length;
    slider.src = sliderImages[current];
  }, 3000);
}

/* Gallery Lightbox */
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    if (lightbox && lightboxImg) {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    }
  });
});

if (lightbox) {
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

/* Reveal Animations on Scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".section, .card").forEach(el => {
  observer.observe(el);
});