export default function ScrollTriggerModule() {
    if(window.innerWidth > 1200) {
        gsap.from(".homes-ab .img img", {
            scrollTrigger: {
                scrub: 1,
                trigger: ".homes-ab",
            },
            scale: 1.2
        });
    }
     // var homeSkyworld = document.querySelector('.home-skyworld');
  // if(homeSkyworld){
  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".home-skyworld-point",
  //       // markers: true,
  //       start: "top center",
  //       end: "top 40%",
  //     },
  //   });
  //   tl.from(".home-skyworld-point", {
  //     opacity: 0,
  //     stagger: 0.2,
  //     duration: 1,
  //     ease: "bounce.out",
  //     y: -100,
  //     // delay: 2,
  //   });
  // }

  
    // gsap.from(".bannerb-imgs .inner", {
    //   duration: 5,
    //   y: 100,
    //   scrollTrigger: {
    //     trigger: ".bannerb-imgs .inner",
    //     start: "top 80%",
    //     end: "top 30%",
    //     scrub: true,
    //   },
    // });
    // gsap.from(".bannerb-imgss .inner", {
    //   duration: 5,
    //   y: -100,
    //   scrollTrigger: {
    //     trigger: ".bannerb-imgs .inner",
    //     start: "top 80%",
    //     end: "top 30%",
    //     scrub: true,
    //   },
    // });
  
    // const tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".appo-wrap",
    //     start: "top center",
    //     end: "center bottom",
    //     ease: "bounce.in",
    //     scrub: 6,
    //     duration: 0.3,
    //   },
    // });
    // // tl2.from(".appo-wrap", {
    // //   scale: 0.6,
    // //   transformOrigin: "center center",
    // // });
    // tl2.from(".appo-gr", {
    //   opacity: 0,
    //   stagger: 0.2,
    //   scale: 0.8,
    // });
  
    // gsap.from(".appi-wrap .appi-decor", {
    //   duration: 5,
    //   scale: 0.1,
    //   transformOrigin: "center center",
    //   scrollTrigger: {
    //     trigger: ".appi-decor",
    //     start: "top bottom",
    //     end: "center top",
    //     scrub: true,
    //   },
    // });
    // gsap.from(".appi-wrap .appi-decor2", {
    //   duration: 5,
    //   y: -200,
    //   scale: 0.6,
    //   transformOrigin: "center center",
    //   scrollTrigger: {
    //     trigger: ".appi-decor2",
    //     start: "200px bottom",
    //     end: "center 60%",
    //     scrub: true,
    //     // markers: true,
    //   },
    // });
    // Splitting({
    //   target: "[data-splitting]",
    //   by: "chars",
    //   key: null,
    // });
    // gsap.from(".gsap-text .char", {
    //   duration: 1.5,
    //   opacity: 1,
    //   delay: 0.3,
    //   scale: 0,
    //   stagger: {
    //     amount: 1.3,
    //   },
    //   ease: "Elastic.easeOut",
    // });
  
    // const title = document.querySelectorAll(".sec-title .text");
    // if (title) {
    //   title.forEach((element) => {
    //     gsap.to(element, {
    //       duration: 0.8,
    //       y: "0%",
    //       scrollTrigger: {
    //         trigger: element,
    //       },
    //       ease: "Bounce.easeOut",
    //     });
    //   });
    // }
    // gsap.to(".hbot-img .inner", {
    //   duration: 1.4,
    //   opacity: 1,
    //   delay: 1,
    //   y: 0,
    //   scrollTrigger: {
    //     trigger: ".hbot-img .inner",
    //   },
    // });
}
