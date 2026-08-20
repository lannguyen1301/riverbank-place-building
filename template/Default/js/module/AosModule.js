export default function AosModule() {
  AOS.init({
    startEvent: "DOMContentLoaded",
    offset: 0,
    duration: 1200,
    delay: "200",
    easing: "ease",
    once: true,
    mirror: true,
    disable: function () {
      return $(window).width() <= 768;
    },
  });
  $(".openToc").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    console.log("run");
    $(".menuToc").toggle();
  });
  $(".openPanel").click(function (e) {
    $(".hidePanel").slideToggle("open");
    $(this).toggleClass("active");
  });
  const gridPJBox = document.querySelector(".gridPJBox");
  if (gridPJBox) {
    const note = gridPJBox.querySelector(".noteText");
    const itemSlide = gridPJBox.querySelectorAll(".gridPJ.swiper-slide");

    let totalItem = itemSlide.length;
    itemSlide.forEach((item) => {
      let itemHide = totalItem - 5;
      if (itemSlide.length > 5) {
        note.classList.add("active");
        note.textContent = `+${itemHide}`;
      }
    });
  }
  document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".barJsFixed");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 0) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  });
}
