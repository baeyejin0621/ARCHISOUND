"use strict";

/*Lenis*/
const lenis = new Lenis({
  duration: 4,
});
lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/*gsap*/
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText);

  //헤더
  const innerHeader = document.querySelector(".inner_header");
  //로고
  const headerLogo = document.querySelector("h1 > a > img");
  //메뉴들
  const menu = document.querySelectorAll("#gnb a");
  //버튼들
  const button = document.querySelectorAll(".icons button > img");
  //progress bar
  const progressBar = document.querySelector(".progress_bar");
  const progress = document.querySelector(".progress");
  //2차 메뉴
  const submenu = document.querySelectorAll("#gnb .submenu a");
  //2차 메뉴 배경
  const submenuBg = document.querySelector(".submenu_bg");

  //스크롤 진행도
  window.addEventListener("scroll", (e) => {
    progress.style.width =
      (window.scrollY /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
        100 +
      "%";

    //스크롤이 맨위에 닿으면 헤더 스타일 되돌림
    if (window.scrollY == 0) {
      //progress bar
      progressBar.style.backdropFilter = "";
      progressBar.style.backgroundColor = "";
      //헤더
      innerHeader.style.backdropFilter = "";
      innerHeader.style.backgroundColor = "";
      //로고
      headerLogo.setAttribute("src", "./img/header/archi_logo.png");
      //메뉴
      menu.forEach((element) => {
        element.style.color = "";
      });
      //버튼들
      button.forEach((element) => {
        element.style.filter = "";
      });
      //2차 메뉴
      submenu.forEach((element) => {
        element.style.color = "";
      });
      //2차 메뉴 배경
      submenuBg.style.backdropFilter = "";
      submenuBg.style.backgroundColor = "";
      submenuBg.style.borderTop = "";
    }
  });

  window.addEventListener("wheel", function (e) {
    //밑으로 스크롤시 헤더 위로 올라감
    if (e.deltaY > 0) {
      gsap.to(innerHeader, {
        y: "-100%",
        duration: 0.2,
      });
      //progress bar
      progressBar.style.backdropFilter = "blur(15px)";
      progressBar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

      //위로 스크롤시 스타일 바뀐 헤더 내려옴
    } else if (getComputedStyle(innerHeader).backgroundColor) {
      //헤더
      innerHeader.style.backdropFilter = "blur(15px)";
      innerHeader.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

      //로고
      headerLogo.setAttribute("src", "./img/header/archi_logo_white.png");
      //메뉴
      menu.forEach((element) => {
        element.style.color = "#fff";
      });
      //버튼들
      button.forEach((element) => {
        element.style.filter = "invert(1)";
      });
      //2차 메뉴
      submenu.forEach((element) => {
        element.style.color = "#fff";
      });
      //2차 메뉴 배경
      submenuBg.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      submenuBg.style.borderTop = "1px solid #666";

      //헤더 나타나기
      gsap.to(innerHeader, {
        y: 0,
        duration: 0.2,
      });
    }
  });
});
