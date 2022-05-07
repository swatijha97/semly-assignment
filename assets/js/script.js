gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 992px)": function () {
    let st = ScrollTrigger.create({
      trigger: ".section-overview",
      endTrigger: ".section-faq",
      pin: ".enroll-form-wrapper",
      start: "top 0",
      end: "top top",
    });
  },
});
