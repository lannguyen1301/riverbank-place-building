export default function RangeModule() {
    // const rangeInputs = document.querySelectorAll(".range-input input");
    // const progress = document.querySelector(".range-slider .progress");
    // const priceMin = document.querySelector(".range-item.min .price");
    // const priceMax = document.querySelector(".range-item.max .price");
  
    // let priceGap = 10;
    // if (rangeInputs && progress) {
    //   let minVal = parseInt(rangeInputs[0].value);
    //   let maxVal = parseInt(rangeInputs[1].value);
    //   priceMin.innerHTML = minVal.toLocaleString("it-IT", {
    //     style: "currency",
    //     currency: "USA",
    //   });
    //   priceMax.innerHTML = maxVal.toLocaleString("it-IT", {
    //     style: "currency",
    //     currency: "USA",
    //   });
  
    //   progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
    //   progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
    //   rangeInputs.forEach((item) => {
    //     item.addEventListener("input", (e) => {
    //       let minVal = parseInt(rangeInputs[0].value);
    //       let maxVal = parseInt(rangeInputs[1].value);
    //       if (maxVal - minVal < priceGap) {
    //         if (e.target.className === "range-min") {
    //           rangeInputs[0].value = maxVal - priceGap;
    //         } else {
    //           rangeInputs[1].value = minVal + priceGap;
    //         }
    //       } else {
    //         progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
    //         progress.style.right =
    //           100 - (maxVal / rangeInputs[1].max) * 100 + "%";
    //       }
    //     });
    //   });
    //   rangeInputs[0].addEventListener("input", () => {
    //     let minVal = parseInt(rangeInputs[0].value).toLocaleString("it-IT", {
    //       style: "currency",
    //       currency: "USA",
    //     });
    //     priceMin.innerHTML = minVal;
    //   });
    //   rangeInputs[1].addEventListener("input", () => {
    //     let maxVal = parseInt(rangeInputs[1].value).toLocaleString("it-IT", {
    //       style: "currency",
    //       currency: "USA",
    //     });
    //     priceMax.innerHTML = maxVal;
    //   });
    // }

    // gia tien
const range = document.querySelector(".range");
if (range) {
  const rangeMin = document.querySelector('input[name="price_min"]');
  const rangeMax = document.querySelector('input[name="price_max"]');
  const progress = document.querySelector(".range-slider .progress");
  const minPrice = document.querySelector(".range-item.min .prcie");
  const maxPrice = document.querySelector(".range-item.max .prcie");

  const minValue = parseInt(rangeMin.min);
  const maxValue = parseInt(rangeMax.max);
  const step = 10000;

  function formatCurrency(value) {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

  function updateSlider() {
      let minVal = parseInt(rangeMin.value);
      let maxVal = parseInt(rangeMax.value);

      if (maxVal - minVal < step) {
          if (event.target === rangeMin) {
              rangeMin.value = maxVal - step;
          } else {
              rangeMax.value = minVal + step;
          }
      }

      minVal = parseInt(rangeMin.value);
      maxVal = parseInt(rangeMax.value);

      const percentMin = ((minVal - minValue) / (maxValue - minValue)) * 100;
      const percentMax = ((maxVal - minValue) / (maxValue - minValue)) * 100;

      progress.style.left = percentMin + "%";
      progress.style.width = percentMax - percentMin + "%";

      minPrice.textContent = formatCurrency(minVal);
      maxPrice.textContent = formatCurrency(maxVal);
  }

  rangeMin.addEventListener("input", updateSlider);
  rangeMax.addEventListener("input", updateSlider);

  // Khởi động cập nhật ban đầu
  updateSlider();
}

  }
  