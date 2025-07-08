"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MotionPathPlugin);

  //이미지 영역
  const hoverImg = document.querySelector(".sec5 .bottom a .img_area");
  //호버하면 나타날 요소
  const hover = document.querySelector(".sec5 .hover-lottie");
  //path
  const path = document.querySelectorAll(
    ".sec5 .hover-lottie svg > g > g:not(:first-child) path"
  );

  hoverImg.addEventListener("mouseover", () => {
    hover.style.display = "block";
    path.forEach((element) => {
      gsap.fromTo(
        element,
        {
          strokeDashoffset: 1000,
        },
        {
          strokeDashoffset: 0,
          duration: 1.2,
        }
      );
    });
  });

  hoverImg.addEventListener("mouseout", () => {
    hover.style.display = "none";
  });
});
