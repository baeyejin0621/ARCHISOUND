"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MotionPathPlugin);

  gsap.matchMedia().add("(min-width: 1025px)", () => {
    //이미지 영역
    const hoverImg = document.querySelectorAll(".sec5 .bottom a .img_area");
    //호버하면 나타날 요소
    const hover = document.querySelectorAll(".sec5 .hover-lottie");
    //글자
    const hoverTxt = document.querySelectorAll(
      ".sec5 .hover-lottie svg > g > g:first-child > g"
    );
    //path
    const path1 = document.querySelectorAll(
      ".sec5 .hover-lottie svg > g > g:nth-child(2) path"
    );
    const path2 = document.querySelectorAll(
      ".sec5 .hover-lottie svg > g > g:nth-child(3) path"
    );

    //이미지 영역에 마우스 오버되면
    hoverImg.forEach((element, i) => {
      element.addEventListener("mouseover", () => {
        gsap
          .timeline()
          .add(() => {
            hover[i].style.display = "block";
          })
          .to(hover[i], {
            backdropFilter: "blur(15px)",
            duration: 0.2,
          })
          .fromTo(
            path1[i],
            {
              strokeDashoffset: 1000,
            },
            {
              strokeDashoffset: 0,
              duration: 1.2,
              ease: "ease",
            },
            "<"
          )
          .fromTo(
            path2[i],
            {
              strokeDashoffset: 1000,
            },
            {
              strokeDashoffset: 0,
              duration: 1.2,
              ease: "ease",
            },
            "<"
          )
          .fromTo(
            hoverTxt[i],
            {
              transform: "matrix(1,0,0,1,275.760009765625,510)",
            },
            {
              transform: "matrix(1,0,0,1,275.760009765625,490)",
              duration: 0.3,
            },
            "-=.9"
          );
      });

      //이미지 영역에서 마우스 아웃되면
      element.addEventListener("mouseout", () => {
        gsap
          .timeline()
          .to(hover[i], {
            backdropFilter: "blur(0)",
            duration: 0.2,
          })
          .add(() => {
            hover[i].style.display = "none";
          }, "<");
      });
    });
  });
});
