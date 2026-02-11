document.addEventListener("DOMContentLoaded", () => {
  // Sticky Navbar Logic
  const navbar = document.querySelector("nav");

  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      once: true,
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.remove("bg-white/10", "border-white/20");
      navbar.classList.add("bg-gray-900", "shadow-lg", "border-gray-800");
    } else {
      navbar.classList.add("bg-white/10", "border-white/20");
      navbar.classList.remove("bg-gray-900", "shadow-lg", "border-gray-800");
    }
  });

  // Mobile Menu Logic
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll(".menu-link");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("translate-x-full");
      mobileMenu.classList.toggle("translate-x-0");
    });

    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
        mobileMenu.classList.remove("translate-x-0");
      });
    });
  }

  // Typed.js Initialization
  if (document.querySelector(".typing") && typeof Typed !== 'undefined') {
    new Typed(".typing", {
      strings: ["Frontend Developer", "Web Designer", "Graphic Designer", "Digital Marketer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  // Tab Switching
  const webTab = document.getElementById("webTab");
  const designTab = document.getElementById("designTab");
  const webProjects = document.getElementById("webProjects");
  const designProjects = document.getElementById("designProjects");

  if (webTab && designTab && webProjects && designProjects) {
    webTab.addEventListener("click", () => {
      webProjects.classList.remove("hidden");
      designProjects.classList.add("hidden");
      webTab.classList.add("bg-indigo-600", "text-white");
      webTab.classList.remove("bg-gray-200", "text-gray-700");
      designTab.classList.remove("bg-pink-600", "text-white");
      designTab.classList.add("bg-gray-200", "text-gray-700");
      if (typeof AOS !== 'undefined') AOS.refresh();
    });

    designTab.addEventListener("click", () => {
      designProjects.classList.remove("hidden");
      webProjects.classList.add("hidden");
      designTab.classList.add("bg-pink-600", "text-white");
      designTab.classList.remove("bg-gray-200", "text-gray-700");
      webTab.classList.remove("bg-indigo-600", "text-white");
      webTab.classList.add("bg-gray-200", "text-gray-700");
      if (typeof AOS !== 'undefined') AOS.refresh();
    });
  }

  // Lightbox Logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeLightbox = document.getElementById("closeLightbox");
  const portfolioImgs = document.querySelectorAll(".portfolio-img");

  if (lightbox && lightboxImg && closeLightbox) {
    portfolioImgs.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove("hidden");
      });
    });

    closeLightbox.addEventListener("click", () => {
      lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add("hidden");
      }
    });
  }
});
