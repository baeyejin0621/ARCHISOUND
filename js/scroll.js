"use strict";

/*Lenis*/
const lenis = new Lenis({
  duration: 3,
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
  gsap.registerPlugin(ScrollTrigger);

  /*헤더*/
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
    } else if (
      getComputedStyle(innerHeader).backgroundColor &&
      !window.scrollY == 0
    ) {
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

  /*두번째 섹션*/
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec2",
        start: "0% 100%",
        end: "100% -57%",
        scrub: 1,
      },
    })
    .fromTo(
      ".sec2 img",
      {
        y: -400,
      },
      {
        y: 0,
      }
    );

  /*세번째 섹션*/
  //글자들
  const span = document.querySelectorAll(".sec3 span");
  const spanArr = Array.from(
    "우리는 무형의 가치를 창조하는 그룹입니다.더 좋은 소리환경을 위한 통합 플랫폼을 통해 문화예술컨텐츠의수준을 높이고 삶의 가치를 향상시키는 건축물을 만들고 있습니다.음향이라는 특수한 분야의 오랜 경험과 기술력, 최고의 인재를 겸비하고있습니다. 건축공간의 다양성을 존중하면서 각자의 한계를 넘어가능성을 실현할 가치향상을 위한 기술을 제공하겠습니다."
  );

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "0% 95%",
      end: "100% 50%",
      scrub: 1,
    },
  });

  spanArr.forEach((element, i) => {
    tl.to(span[i], {
      color: "var(--main-color)",
      duration: 0.5,
      delay: 0.3,
    });
  });

  /*네번째 섹션*/
  //배경 검정색으로 바꾸기
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "0% 100%",
        end: "3% 100%",
        scrub: 1,
      },
    })
    .to("body", {
      backgroundColor: "#000",
    });

  //배경 영상이랑 중앙 글자 보이기
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "0% 100%",
        end: "20% 100%",
        scrub: 1,
      },
    })
    .to(".sec4 .bg_video", {
      display: "block",
    })
    .to(
      ".sec4 .bg_video",
      {
        opacity: 0.5,
        duration: 1,
      },
      "<"
    )
    .to(
      ".sec4 .center_txt",
      {
        display: "block",
      },
      "-=.8"
    )
    .fromTo(
      ".sec4 .center_txt",
      {
        opacity: 0,
        y: "-38% + 100px",
      },
      {
        opacity: 1,
        y: "-38%",
        duration: 0.1,
      },
      "<"
    );

  //사진 컨텐츠
  const imgContent = Array.from(document.querySelectorAll(".sec4 .content a"));

  //사진 제목
  const imgTitle = Array.from(
    document.querySelectorAll(".sec4 .center_txt .img_title h2")
  );
  const imgTitle1 = imgTitle.slice(0, 6);
  const imgTitle2 = imgTitle.slice(6);

  //글자색 바꾸기
  imgContent.forEach((element, i) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "0% 50%",
          end: "0% 50%",
          scrub: true,
        },
      })
      .to(element.children[0], {
        color: "var(--main-color)",
      });

    //이전 글자 사라지기
    if (i > 0) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "0% 50%",
            end: "0% 50%",
            scrub: true,
          },
        })
        .to(imgTitle1[i - 1], {
          opacity: 0,
        })
        .to(
          imgTitle2[i - 1],
          {
            opacity: 0,
          },
          "<"
        );
    }

    //현재 글자 나타나기
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "0% 50%",
          end: "0% 50%",
          scrub: true,
        },
      })
      .to(imgTitle1[i], {
        opacity: 1,
      })
      .to(
        imgTitle2[i],
        {
          opacity: 1,
        },
        "<"
      );
  });

  //배경하고 중앙 글자 돌려놓기
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "106% 50%",
        end: "106% 50%",
        scrub: 1,
      },
    })
    .to("body", {
      backgroundColor: "transparent",
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec4",
        start: "100% 60%",
        end: "108% 60%",
        scrub: 1,
      },
    })
    .to(".sec4 .center_txt", {
      opacity: 0,
      duration: 0.1,
    })
    .to(
      ".sec4 .center_txt",
      {
        display: "none",
      },
      "<"
    )
    .to(
      ".sec4 .bg_video",
      {
        opacity: 0,
        duration: 1,
      },
      "-=.5"
    )
    .to(
      ".sec4 .bg_video",
      {
        display: "none",
      },
      "<"
    );

  //다섯번째 섹션
  //카드들
  const card = Array.from(document.querySelectorAll(".sec5 .bottom a"));
  //윗줄
  const card1 = card.slice(0, 3);
  //아랫줄
  const card2 = card.slice(3, 6);
  //이미지
  const imgMask = Array.from(
    document.querySelectorAll(".sec5 .bottom a .img_area .white")
  );
  //윗줄
  const imgMask1 = imgMask.slice(0, 3);
  //아랫줄
  const imgMask2 = imgMask.slice(3, 6);

  //섹션 상단 부분
  let imgTl1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec5",
        start: "0% 60%",
        end: "0% 0%",
      },
    })
    .fromTo(
      ".sec5 .top .row > *",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.3,
      }
    )
    .fromTo(
      ".sec5 .top p",
      {
        y: "20px",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }
    );

  //카드 윗줄 나타나기
  card1.forEach((element) => {
    imgTl1.fromTo(
      element,
      {
        y: "20px",
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
      },
      "<"
    );
  });

  //이미지 윗줄 나타나기
  imgMask1.forEach((element) => {
    imgTl1.to(
      element,
      {
        scaleY: 0,
        duration: 0.5,
      },
      "'<"
    );
  });

  //아랫줄
  let imgTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec5 .bottom a:nth-child(4)",
      start: "0% 60%",
      end: "0% 5%",
    },
  });

  //카드 아랫줄 나타나기
  card2.forEach((element) => {
    imgTl2.to(
      element,
      {
        opacity: 1,
        duration: 0.3,
      },
      "<"
    );
  });

  //카드 윗줄 나타나기
  imgMask2.forEach((element) => {
    imgTl2.to(
      element,
      {
        scaleY: 0,
        duration: 0.5,
      },
      "<"
    );
  });

  /*여섯번째 섹션*/
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec6",
        start: "0% 30%",
        end: "100% 100%",
      },
    })
    .fromTo(
      ".sec6 h2 p span",
      {
        y: "100%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    )
    .fromTo(
      ".sec6 .sm_txt",
      {
        y: "50px",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );

  /*일곱번째 섹션*/
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec7",
        start: "0% 40%",
        end: "0% 10%",
      },
    })
    .fromTo(
      ".sec7 .top .row > *",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.4,
      }
    )
    .fromTo(
      ".sec7 .top p",
      {
        y: "20px",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    )
    .fromTo(
      ".sec7 ul",
      {
        y: "20px",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }
    );
});
