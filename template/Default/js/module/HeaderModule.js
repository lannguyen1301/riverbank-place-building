export default function HeaderModule() {
  const header = document.querySelector(".header");
  const mobile = document.querySelector(".mobile");
  const mobileOverlay = document.querySelector(".mobile-overlay");

  let lastScrollTop = 0;
  const delta = 5;
  const navbarHeight = header ? header.offsetHeight : 0;

  function handleScroll() {
    if (header && mobile && mobileOverlay) {
      const currentScroll = window.scrollY;

      // Toggle sticky classes
      if (currentScroll > 0) {
        header.classList.add("sticky");
        mobile.classList.add("sticky");
        mobileOverlay.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
        mobile.classList.remove("sticky");
        mobileOverlay.classList.remove("sticky");
      }

      // Hide and show header based on scroll direction, only if mobile menu is not open
      if (!mobile.classList.contains("open") && Math.abs(lastScrollTop - currentScroll) > delta) {
        if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
          header.classList.add("hide");
        } else if (currentScroll + window.innerHeight < document.body.scrollHeight) {
          header.classList.remove("hide");
        }
        lastScrollTop = currentScroll;
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  document.addEventListener("DOMContentLoaded", handleScroll);
}