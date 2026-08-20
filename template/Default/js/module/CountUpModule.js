import { CountUp } from "../../assets/library/countUp/countUp.min.js";
export default function CountUpModule() {
    let a = 0;
    let counterBlock = document.querySelector(".counter-js");
    if (counterBlock) {
      let oTop = counterBlock.offsetTop - window.innerHeight;
      $(window).on("scroll", function () {
        if (a == 0 && $(window).scrollTop() > oTop) {
          console.log($(".countNum").attr("data-count"));
          $(".countNum").each(function () {
            let $this = $(this),
              countTo = parseInt($this.attr("data-count"), 10);
            $({
              countNum: $this.text(),
            }).animate(
              {
                countNum: countTo,
              },
    
              {
                duration: 3000,
                easing: "swing",
                step: function () {
                  let formattedNum = formatNumber(this.countNum);
                  $this.text(formattedNum);
                },
                complete: function () {
                  let formattedNum = formatNumber(this.countNum);
                  $this.text(formattedNum);
                },
              }
            );
          });
          a = 1;
        }
      });
    }
    
    // Hàm format để chuyển đổi số lớn hơn 5 chữ số thành dạng K
    function formatNumber(num) {
      let roundedNum = Math.floor(num);
      return roundedNum >= 10000 ? `${Math.floor(roundedNum / 1000)}k` : roundedNum;
    }
}