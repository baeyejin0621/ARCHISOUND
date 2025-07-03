"use strict";

/*1차 메뉴에 호버했을 때 2차 메뉴 나오기*/
//헤더
const header = document.querySelector("header");
const innerHeader = document.querySelector(".inner_header");
//1차 메뉴
const oneDepth = document.querySelectorAll("#gnb > ul > li");
//2차 메뉴
const twoDepth = document.querySelectorAll("#gnb .submenu li a");
//2차 메뉴 배경
const twoDepthBg = document.querySelector(".submenu_bg");

/*gnb*/
//1차 메뉴 중 2번째 메뉴에 호버 효과
oneDepth[1].addEventListener("mouseover", () => {
  twoDepthBg.style.display = "block";

  if (getComputedStyle(innerHeader).backdropFilter != "none") {
    //2차 메뉴 배경에 블러 효과 주기
    header.style.backdropFilter = "blur(15px)";
    header.style.height =
      Number(getComputedStyle(header).height.slice(0, -2)) +
      Number(getComputedStyle(twoDepthBg).height.slice(0, -2)) +
      "px";
  }

  //2차 메뉴 호버 효과
  twoDepth.forEach((element) => {
    element.addEventListener("mouseover", () => {
      if (getComputedStyle(innerHeader).backdropFilter != "none") {
        element.style.color = "var(--main-color)";

        //스크롤이 맨위에 닿으면 스타일 초기화
        window.addEventListener("scroll", () => {
          if (window.scrollY == 0) {
            //헤더
            header.style.backdropFilter = "";
            header.style.height = "";
            //1차 메뉴
            oneDepth.forEach((element) => {
              element.style.color = "";
            });
            //2차 메뉴
            twoDepth.forEach((element) => {
              element.style.color = "";
            });
          }
        });
      }
    });

    element.addEventListener("mouseout", () => {
      if (getComputedStyle(innerHeader).backdropFilter != "none") {
        element.style.color = "#fff";

        //스크롤이 맨위에 닿으면 스타일 초기화
        window.addEventListener("scroll", () => {
          if (window.scrollY == 0) {
            //헤더
            header.style.backdropFilter = "";
            header.style.height = "";
            //1차 메뉴
            oneDepth.forEach((element) => {
              element.style.color = "";
            });
            //2차 메뉴
            twoDepth.forEach((element) => {
              element.style.color = "";
            });
          }
        });
      }
    });
  });
});

oneDepth[1].addEventListener("mouseout", () => {
  twoDepthBg.style.display = "none";

  //헤더
  header.style.backdropFilter = "";
  header.style.height = "";
});

//1차 메뉴 호버 효과
oneDepth.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if (getComputedStyle(innerHeader).backdropFilter != "none") {
      element.children[0].style.color = "var(--main-color)";

      //스크롤이 맨위에 닿으면 스타일 초기화
      window.addEventListener("scroll", () => {
        if (window.scrollY == 0) {
          //헤더
          header.style.backdropFilter = "";
          header.style.height = "";
          //1차 메뉴
          oneDepth.forEach((element) => {
            element.style.color = "";
          });
          //2차 메뉴
          twoDepth.forEach((element) => {
            element.style.color = "";
          });
        }
      });
    }
  });

  element.addEventListener("mouseout", () => {
    if (getComputedStyle(innerHeader).backdropFilter != "none") {
      element.children[0].style.color = "#fff";

      //스크롤이 맨위에 닿으면 스타일 초기화
      window.addEventListener("scroll", () => {
        if (window.scrollY == 0) {
          //헤더
          header.style.backdropFilter = "";
          header.style.height = "";
          //1차 메뉴
          oneDepth.forEach((element) => {
            element.style.color = "";
          });
          //2차 메뉴
          twoDepth.forEach((element) => {
            element.style.color = "";
          });
        }
      });
    }
  });
});

//두번째 메뉴 a 태그 기능 막기
oneDepth[1].addEventListener("click", (event) => {
  event.preventDefault();
});

/*버튼 클릭*/
//검색 버튼
const searchBtn = document.querySelector(".icons button:first-child");
//검색창
const searchArea = document.querySelector(".search_area");
const searchInput = document.querySelector(".search_area input");
//메뉴 버튼
const allMenuBtn = document.querySelector(".icons button:last-child");
//전체 메뉴
const allMenu = document.querySelector(".all_menu");
//X 버튼
const closeBtn = document.querySelectorAll(".close");
//없애기 버튼
const cancelBtn = document.querySelector(".cancel");

//버튼 클릭하면 나오기
searchBtn.addEventListener("click", () => {
  document.documentElement.style.overflow = "hidden";
  searchArea.style.transform = "translateY(0)";
});

allMenuBtn.addEventListener("click", () => {
  document.documentElement.style.overflow = "hidden";
  allMenu.style.transform = "translateY(0)";
});

//X 버튼 클릭하면 없어지기
closeBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.parentNode.style.transform = "translateY(-100%)";
    document.documentElement.style.overflow = "auto";
  });
});

//검색창에서 검색어가 입력된 상태라면 없애기 버튼 보이기
searchInput.addEventListener("focus", () => {});
