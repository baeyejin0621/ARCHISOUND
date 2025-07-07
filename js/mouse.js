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
console.log(ul.screenY);
//li
const list = document.querySelectorAll(".sec7 ul li");
//이미지
const liImg = document.querySelector(".sec7 .img_wrapper");
const liImgChildren = Array.from(liImg.children);
//흰 글씨
const white = document.querySelectorAll(".sec7 ul li a .white");

document.addEventListener("DOMContentLoaded", (event) => {
  //이미지 박스 보이기
  ul.addEventListener("mouseenter", () => {
    gsap.to(liImg, {
      opacity: 1,
      duration: 0.2,
    });
  });

  //이미지 박스가 커서를 따라다니게 하기
  ul.addEventListener("mousemove", (e) => {
    liImg.style.top = e.clientY + "px";
    liImg.style.left = e.clientX + "px";

    let imgLeft =
      parseInt(getComputedStyle(liImg).left.slice(0, -2)) -
      parseInt(getComputedStyle(liImg).width.slice(0, -2) / 2);
    let imgWidth = parseInt(getComputedStyle(liImg).width.slice(0, -2));

    white.forEach((element) => {
      element.style.clipPath =
        "polygon(" +
        (imgLeft - ul.offsetLeft) +
        "px 0px, " +
        (imgLeft - ul.offsetLeft + imgWidth) +
        "px 0px, " +
        (imgLeft - ul.offsetLeft + imgWidth) +
        "px 200px, " +
        (imgLeft - ul.offsetLeft) +
        "px 200px)";
    });
  });

  //첫번째 li에 커서 들어갔을 때
  list[0].addEventListener("mouseenter", () => {
    liImgChildren[0].style.transform = "translateY(0)";
    liImgChildren[1].style.transform = "translateY(-100%)";
    liImgChildren[2].style.transform = "translateY(-100%)";
  });

  //두번째 li에 커서 들어갔을 때
  list[1].addEventListener("mouseenter", (evt) => {
    gsap.fromTo(
      liImgChildren[1],
      {
        y: "100%",
        scale: 1.3,
      },
      {
        y: 0,
        scale: 1,
        duration: 0.5,
      }
    );

    //커서가 아래에서 올라왔다면
    if (evt.fromElement.innerText.indexOf("채용") === 0) {
      gsap.fromTo(
        liImgChildren[2],
        {
          y: 0,
        },
        {
          y: "-100%",
          duration: 0.5,
        }
      );
      //커서가 위에서 내려왔다면
    } else {
      gsap.fromTo(
        liImgChildren[0],
        {
          y: 0,
        },
        {
          y: "-100%",
          duration: 0.5,
        }
      );
    }
  });

  //두번째 li에서 커서가 나왔을 때
  list[1].addEventListener("mouseleave", (evt) => {
    gsap.fromTo(
      liImgChildren[1],
      {
        y: 0,
      },
      {
        y: "-100%",
        duration: 0.5,
      }
    );

    //커서가 아래로 내려갔다면
    if (evt.toElement.innerText.indexOf("채용") === 0) {
      gsap.fromTo(
        liImgChildren[2],
        {
          y: "100%",
          scale: 1.3,
        },
        {
          y: 0,
          scale: 1,
          duration: 0.5,
        }
      );
      //커서가 위로 올라갔다면
    } else {
      gsap.fromTo(
        liImgChildren[0],
        {
          y: "100%",
          scale: 1.3,
        },
        {
          y: 0,
          scale: 1,
          duration: 0.5,
        }
      );
    }
  });

  //세번째 li에 커서가 들어갔을 때
  list[2].addEventListener("mouseenter", () => {
    liImgChildren[0].style.transform = "translateY(-100%)";
    liImgChildren[1].style.transform = "translateY(-100%)";
    liImgChildren[2].style.transform = "translateY(0)";
  });

  //커서가 영역을 벗어나면 없애기
  ul.addEventListener("mouseleave", () => {
    gsap.to(liImg, {
      opacity: 0,
      duration: 0.2,
    });
  });
});
