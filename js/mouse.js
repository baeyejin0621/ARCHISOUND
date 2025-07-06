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
searchInput.addEventListener("keydown", () => {
  if (searchInput.value) {
    cancelBtn.style.display = "block";
  }
});

//없애기 버튼 클릭하면 인풋 비우기
cancelBtn.addEventListener("click", () => {
  searchInput.value = "";
  cancelBtn.style.display = "none";
});

/*일곱번째 섹션*/
//ul
const ul = document.querySelector(".sec7 ul");
//li
const list = document.querySelectorAll(".sec7 ul li");
//이미지
const liImg = document.querySelector(".sec7 .img_wrapper");

document.addEventListener("mousemove", (event) => {
  liImg.style.top = event.clientY + "px";
  liImg.style.left = event.clientX + "px";

  if (
    ul.offsetTop <= event.pageY &&
    event.pageY <= ul.offsetTop + ul.offsetHeight &&
    ul.offsetLeft <= event.pageX &&
    event.pageX <= ul.offsetLeft + ul.offsetWidth
  ) {
    gsap.to(liImg, {
      opacity: 1,
      duration: 0.3,
    });

    if (
      list[0].offsetTop <= event.pageY &&
      event.pageY <= list[0].offsetTop + list[0].offsetHeight
    ) {
      console.log("정상 작동 중1");
      liImg.children[0].style.transform = "translateY(0)";
      liImg.children[0].style.zIndex = 1;
      liImg.children[1].style.transform = "translateY(100%)";
      liImg.children[2].style.transform = "translateY(100%)";
    } else if (
      list[1].offsetTop <= event.pageY &&
      event.pageY <= list[1].offsetTop + list[1].offsetHeight
    ) {
      console.log("정상 작동 중2");
      liImg.children[0].style.transform = "translateY(100%)";
      liImg.children[1].style.transform = "translateY(0)";
      liImg.children[1].style.zIndex = 1;
      liImg.children[2].style.transform = "translateY(100%)";
    } else if (
      list[2].offsetTop <= event.pageY &&
      event.pageY <= list[2].offsetTop + list[2].offsetHeight
    ) {
      console.log("정상 작동 중3");
      liImg.children[0].style.transform = "translateY(100%)";
      liImg.children[1].style.transform = "translateY(100%)";
      liImg.children[2].style.transform = "translateY(0)";
      liImg.children[2].style.zIndex = 1;
    }
  } else {
    gsap.to(liImg, {
      opacity: 0,
      duration: 0.3,
    });
  }
});
