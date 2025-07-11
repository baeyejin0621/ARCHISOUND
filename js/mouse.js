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
const liImgChildren = Array.from(liImg.children);
//흰 글씨
const white = document.querySelectorAll(".sec7 .white li");

document.addEventListener("DOMContentLoaded", (event) => {
  //이미지 박스 보이기
  ul.addEventListener("mouseenter", (e) => {
    gsap.to(liImg, {
      opacity: 1,
      duration: 0.2,
    });

    liImg.style.top = e.y + "px";
    liImg.style.left = e.x + "px";
  });

  //이미지 박스가 커서를 따라다니게 하기
  ul.addEventListener("mousemove", (e) => {
    liImg.style.top = e.y + "px";
    liImg.style.left = e.x + "px";

    let imgWidth = parseInt(getComputedStyle(liImg).width.slice(0, -2));
    let imgLeft =
      parseInt(getComputedStyle(liImg).left.slice(0, -2)) - imgWidth / 2;

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

    white[0].style.opacity = 1;
  });

  list[0].addEventListener("mouseleave", () => {
    white[0].style.opacity = 0;
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
    if (evt.fromElement.innerText.indexOf("채용") != -1) {
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

    white[1].style.opacity = 1;
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
    if (evt.toElement.innerText.indexOf("채용") != -1) {
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

    white[1].style.opacity = 0;
  });

  //세번째 li에 커서가 들어갔을 때
  list[2].addEventListener("mouseenter", () => {
    liImgChildren[0].style.transform = "translateY(-100%)";
    liImgChildren[1].style.transform = "translateY(-100%)";
    liImgChildren[2].style.transform = "translateY(0)";

    white[2].style.opacity = 1;
  });

  list[2].addEventListener("mouseleave", () => {
    white[2].style.opacity = 0;
  });

  //커서가 영역을 벗어나면 없애기
  ul.addEventListener("mouseleave", () => {
    gsap.to(liImg, {
      opacity: 0,
      duration: 0.2,
    });
  });
});

/*플로팅 버튼*/
const floatBtn = document.querySelector(".floating");

floatBtn.addEventListener("click", () => {
  if (
    getComputedStyle(floatBtn).backgroundColor == "rgba(247, 247, 247, 0.85)"
  ) {
    //배경색
    floatBtn.style.backgroundColor = "rgba(248, 182, 45, 0.8509803922)";

    //사진
    floatBtn.children[0].setAttribute(
      "src",
      "./img/sec7/main_sound_play_ico.png"
    );

    floatBtn.children[0].setAttribute("alt", "음악 나옴");

    //글자
    floatBtn.children[1].innerText = "sound on";
  } else if (
    getComputedStyle(floatBtn).backgroundColor == "rgba(248, 182, 45, 0.85)"
  ) {
    //배경색
    floatBtn.style.backgroundColor = "";

    //사진
    floatBtn.children[0].setAttribute(
      "src",
      "./img/sec7/main_sound_stop_ico.png"
    );

    floatBtn.children[0].setAttribute("alt", "음악 멈춤");

    //글자
    floatBtn.children[1].innerText = "sound off";
  }
});

/*커서 따라다니는 요소*/
const cursor = document.querySelector(".cursor");
const cursorIcon = document.querySelector(".cursor_icon");
window.addEventListener("mousemove", (event) => {
  cursor.style.top = event.clientY + "px";
  cursor.style.left = event.clientX + "px";
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = 1;
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = 0;
});

const cursorChange = document.querySelectorAll("a, button");
cursorChange.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.mixBlendMode = "normal";
    cursorIcon.style.transform = "scale(0.3)";
    cursorIcon.style.backgroundColor = "var(--main-color)";
    cursorIcon.style.border = "1px solid var(--main-color)";
  });

  element.addEventListener("mouseleave", () => {
    cursor.style.mixBlendMode = "difference";
    cursorIcon.style.transform = "";
    cursorIcon.style.backgroundColor = "";
    cursorIcon.style.border = "";
  });
});

const goTop = document.querySelector("footer .top button");
goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
