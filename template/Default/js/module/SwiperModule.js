export default function SwiperModule() {
  function functionSlider(element, customizeOption, typePagi) {
    const swiperSlider = document.querySelectorAll(element);
    if (swiperSlider.length > 0) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");

        // Mặc định kiểu pagination là 'bullets' nếu không chỉ định
        if (!typePagi) {
          typePagi = "bullets";
        }

        const swiperOptions = {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true,
          },
          ...customizeOption,
        };

        // Nếu `typePagi` là `scrollbar`, cấu hình lại cho Swiper
        if (typePagi === "scrollbar") {
          swiperOptions.scrollbar = {
            el: pagi,
            draggable: true,
          };
          delete swiperOptions.pagination; // Không dùng `pagination` khi sử dụng `scrollbar`
        }

        var slide = new Swiper(swiper, swiperOptions);

        // Kiểm tra và ẩn nút điều hướng nếu số lượng slide không vượt quá slidesPerView
        function toggleNavigationButtons() {
          const totalSlides = slide.slides.length;
          const slidesPerView =
            slide.params.slidesPerView === "auto"
              ? 1
              : slide.params.slidesPerView;

          if (totalSlides <= slidesPerView) {
            if (next) next.style.display = "none";
            if (prev) prev.style.display = "none";
          } else {
            if (next) next.style.display = "flex";
            if (prev) prev.style.display = "flex";
          }
        }

        // Kiểm tra ngay khi khởi tạo Swiper
        slide.on("init", toggleNavigationButtons);
        slide.on("resize", toggleNavigationButtons);
        slide.init();

        // Tìm và chuyển ngay đến slide có .swiper-btn.active
        const activeButton = item.querySelector(
          ".swiper-slide .swiper-btn.active"
        );
        if (activeButton) {
          const activeSlide = activeButton.closest(".swiper-slide");
          const activeIndex = Array.from(slide.slides).indexOf(activeSlide);
          if (activeIndex !== -1) {
            slide.slideTo(activeIndex, 0); // Chuyển đến slide ngay lập tức mà không có animation
          }
        }

        // Sự kiện click để thêm class active và chuyển slide
        const buttons = item.querySelectorAll(".swiper-btn");
        buttons.forEach((btn) => {
          btn.addEventListener("click", () => {
            buttons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const parentSlide = btn.closest(".swiper-slide");
            const index = Array.from(slide.slides).indexOf(parentSlide);
            if (index !== -1) {
              slide.slideTo(index); // Chuyển slide khi click
            }
          });
        });
      });
    }
  }

  function functionThumbSlider(element, customizeOption) {
    const swiperSlider = document.querySelectorAll(element);
    const swiperInstances = [];

    swiperSlider.forEach((item) => {
      const swiper = item.querySelector(".swiper");

      const slide = new Swiper(swiper, {
        watchSlidesProgress: true,
        ...customizeOption,
      });

      swiperInstances.push(slide);
    });

    return swiperInstances;
  }

  function functionMainSlider(
    element,
    thumbSliderInstances,
    customizeOption,
    typePagi
  ) {
    const swiperSlider = document.querySelectorAll(element);

    if (swiperSlider) {
      swiperSlider.forEach((item, index) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");

        if (!typePagi) {
          typePagi = "bullets";
        }

        new Swiper(swiper, {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true,
          },
          thumbs: {
            swiper: thumbSliderInstances[index], // Sử dụng thumb slider tương ứng
          },
          ...customizeOption,
        });
      });
    }
  }

  function functionSliderGrid(element, customizeOption, typePagi, totalSlides) {
    const swiperSliders = document.querySelectorAll(element);
    if (swiperSliders) {
      swiperSliders.forEach((slider) => {
        const swiper = slider.querySelector(".swiper");
        const pagi = slider.querySelector(".swiper-pagination");
        const next = slider.querySelector(".swiper-next");
        const prev = slider.querySelector(".swiper-prev");
        if (!typePagi) {
          typePagi = "bullets";
        }

        // Tính số hàng dựa trên số lượng slide của slider hiện tại
        const slideCount = slider.querySelectorAll(".swiper-slide").length;
        const rows = slideCount < totalSlides ? 1 : 2;

        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true,
          },
          grid: {
            rows: rows,
            fill: "row",
          },
          ...customizeOption, // Sử dụng toàn bộ customizeOption
        });
      });
    }
  }

  var hbanner = new Swiper(".hbanner-slider .swiper", {
    speed: 1200,
    effect: "fade",
    touchStartPreventDefault: false,
    allowTouchMove: false,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: ".hbanner-slider .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        // Chuyển đổi số thành dạng 01, 02, ...
        var formattedNumber = (index + 1).toString().padStart(2, "0");
        return '<span class="' + className + '">' + formattedNumber + "</span>";
      },
    },
  });

  const splides = document.querySelectorAll(".hpartn-slider .splide");
  if (splides) {
    splides.forEach((splidex, index) => {
      new Splide(splidex, {
        type: "loop",
        drag: "free",
        // focus: 'center',
        pagination: false,
        arrows: false,
        perPage: 6,
        perMove: 2,
        direction: index == 1 ? "rtl" : "ltr",
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          100: {
            perPage: 1.4,
          },
          300: {
            perPage: 2.4,
          },
          720: {
            perPage: 2.5,
          },
          900: {
            perPage: 3,
          },
          1200: {
            perPage: 4,
          },
        },
      }).mount(window.splide.Extensions);
    });
  }

  functionSlider(".hser-bdy", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".pjecth-inner", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".newsrl-slider", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".offh-bdy", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".newsrl-bdy", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".pjecth-bdy", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".teamwork-bdy", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });  
  functionSlider(".awards-slider", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".guest-slider", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".filter-slider", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 4,
  });
  functionSlider(".histo-slider", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".hsocial-bdy", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".teamwork-slider", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  functionSlider(".slideSw", {
    speed: 1200,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
      delay: 8000,
    },
  });
  const isSlideMobile = document.querySelector(".slideMobile");
  if (isSlideMobile && window.innerWidth < 500) {
    functionSlider(".slideMobile", {
      speed: 1200,
      slidesPerView: "auto",
      spaceBetween: 0,
      autoplay: {
        delay: 8000,
      },
    });
  }
  // makeBulletLink clicked
  var makeBulletLink = document.querySelectorAll(".bullet-link");
  if (makeBulletLink) {
    makeBulletLink.forEach((item) => {
      // console.log(item)
      item.addEventListener("click", (e) => {
        // console.log('click');
        window.location.href = item.href;
      });
    });
  }

  var prodThumb = new Swiper(".wdes-slide-thumb .swiper", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });
  var prodMain = new Swiper(".wdes-slide-main .swiper", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
    thumbs: {
      swiper: prodThumb,
    },
  });
  var prodLeft = new Swiper(".wdes-slide-left .swiper", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
    thumbs: {
      swiper: prodThumb,
    },
    navigation: {
      prevEl: ".wdes-slide-left .swiper-prev",
      nextEl: ".wdes-slide-left .swiper-next",
    },
  });

  prodLeft.controller.control = prodMain;
  prodMain.controller.control = prodLeft;

  functionSlider(".abbanner-slider", {
    slidesPerView: "auto",
    loop: false,
    autoplay: {
      delay: 7000,
    },
    speed: 1000,
    effect: "coverflow",
    // effect: "fade",
    parallax: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0.05,
      depth: 0,
      stretch: 0,
      modifier: 1,
      slideShadows: false,
    },
    on: {
      init: function () {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".abbanner-img")
            .attr({
              "data-swiper-parallax": 0.9 * swiper.width,
              "data-swiper-paralalx-opacity": 0.1,
            });
        }
      },
      resize: function () {
        this.update();
      },
    },
  });
}
