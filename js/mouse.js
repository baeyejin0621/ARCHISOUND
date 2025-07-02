"use strict";

/*1차 메뉴에 호버했을 때 2차 메뉴 나오기*/
//헤더
const header = document.querySelector("header");
//1차 메뉴
const oneDepth = document.querySelector("#gnb > ul > li:nth-child(2)");
//2차 메뉴
const twoDepth = document.querySelectorAll("#gnb .submenu li a");
console.log(twoDepth);
//2차 메뉴 배경
const twoDepthBg = document.querySelector(".submenu_bg");
console.log(
  getComputedStyle(header).height + getComputedStyle(twoDepthBg).height
);

oneDepth.addEventListener("mouseover", () => {
  twoDepthBg.style.display = "block";
  //2차 메뉴 배경에 블러 효과 주기
  header.style.backdropFilter = "blur(15px)";
  header.style.height =
    Number(getComputedStyle(header).height.slice(0, -2)) +
    Number(getComputedStyle(twoDepthBg).height.slice(0, -2)) +
    "px";
  //2차 메뉴 호버 효과
  twoDepth.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.color = "var(--main-color)";
    });

    element.addEventListener("mouseout", () => {
      element.style.color = "#fff";
    });
  });
});

oneDepth.addEventListener("mouseout", () => {
  twoDepthBg.style.display = "none";
  header.style.backdropFilter = "";
  header.style.height = "";
});
