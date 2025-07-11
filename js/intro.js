"use strict";

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin);
  const intro = document.querySelector(".intro");
  const introBg = document.querySelector(".intro_bg");
  const introBg1 = document.querySelector(".intro_bg1");
  const music = document.querySelector(".intro_bg .music");
  const musicBtn = document.querySelector(".intro_bg .music button");
  const fade = document.querySelector(".intro_bg .music .fade");
  const musicP = document.querySelector(".intro_bg .music p");
  const logoArea = document.querySelector(".intro_bg .logo");
  const logoIcon = document.querySelector(".intro_bg .logo .logo_icon");
  const logoPath = document.querySelector(
    ".intro_bg .logo .intro-lottie .logo_icon > svg > g > g > g"
  );
  const logoPath1 = document.querySelectorAll(
    ".intro_bg .logo .intro-lottie .logo_icon > svg > g > g > g > :is(g:nth-of-type(1), g:nth-of-type(2)) path"
  );
  const logoPath2 = document.querySelectorAll(
    ".intro_bg .logo .intro-lottie .logo_icon > svg > g > g > g > :is(g:nth-of-type(3), g:nth-of-type(4)) path"
  );
  const logoTxtBlack = document.querySelector(".logo_txt .black");
  const logoTxtInner = document.querySelector(
    ".intro_bg .logo .logo_txt > svg > g > g"
  );
  let logoTxtChildren = Array.from(
    document.querySelectorAll(
      ".intro_bg .logo .logo_txt > svg > g > g > g path"
    )
  );
  logoTxtChildren.reverse();
  const mainTopTxt = document.querySelector(".main_visual .top_txt");
  const mainTxt = document.querySelectorAll(".main_visual .main_txt p span");
  const mainBottomTxt = document.querySelector(".main_visual .bottom_txt");
  const sec2 = document.querySelector(".sec2");

  //배경
  gsap
    .timeline()
    .to("body", {
      overflow: "hidden",
    })
    .to(
      intro,
      {
        display: "block",
      },
      "<"
    );

  //음악
  gsap
    .timeline({
      repeat: 3,
      onComplete: () => {
        let tl = gsap
          .timeline()
          .to(music, {
            display: "none",
            duration: 0.01,
          })
          //로고
          .add(() => {
            //로고 아이콘 중앙으로 옮기기
            logoPath.style.transform =
              "matrix(1.000001311302185,0,0,1.000001311302185,283.13,-0.06308)";
            logoPath.style.transition = "0.5s";

            //로고 글자 위치 맞추기
            logoTxtInner.style.transform =
              "matrix(0.500002920627594,0,0,0.500002920627594,-0.0014603137969970703,50)";

            //로고 영역 보이기
            logoArea.style.display = "block";

            //노란 로고 숨겨두기
            logoPath2.forEach((element) => {
              element.style.opacity = 0;
            });
          });

        //흰 선 로고 나타나기
        logoPath1.forEach((element) => {
          tl.fromTo(
            element,
            {
              strokeDashoffset: 1000,
            },
            {
              strokeDashoffset: 0,
              duration: 2,
              ease: "power1.inOut",
            },
            "<"
          );
        });

        //크기 작아지기
        tl.to(
          logoIcon,
          {
            width: "76vw",
            height: "76vw",
            duration: 2,
            ease: "power4.inOut",
            delay: 0.1,
          },
          "<"
        ).to(
          logoIcon,
          {
            width: 500,
            height: 200,
            duration: 0.5,
            ease: "power4.inOut",
          },
          "-=.2"
        );

        //노란 로고 나타나기
        logoPath2.forEach((element) => {
          tl.to(
            element,
            {
              opacity: 1,
              duration: 0.3,
              ease: "ease",
            },
            "<"
          );
        });

        //로고 움직이기
        tl.to(logoPath, {
          x: -79.208251953125,
          duration: 0.2,
          delay: 0.2,
        })
          //검정 가림막 div 너비 조절
          .to(
            logoTxtBlack,
            {
              width: 92,
              duration: 0.5,
            },
            "<"
          );

        //로고 글자 하나씩 나타나기
        logoTxtChildren.forEach((element, i) => {
          if (i === 0) {
            tl.fromTo(
              element,
              {
                x: -900,
              },
              {
                x: 0,
                duration: 0.25,
                ease: "power1.inOut",
              },
              "-=.5"
            );
          } else if (i < 5) {
            tl.fromTo(
              element,
              {
                x: -900,
              },
              {
                x: 0,
                duration: 0.25,
                ease: "power1.inOut",
              },
              "<"
            );
          } else if (i === 5) {
            tl.fromTo(
              element,
              {
                x: -900,
              },
              {
                x: 0,
                duration: 0.25,
                ease: "power1.inOut",
              },
              "-=.45"
            );
          } else {
            tl.fromTo(
              element,
              {
                x: -900,
              },
              {
                x: 0,
                duration: 0.25,
                ease: "power1.inOut",
              },
              `-=${0.45 - (i - 5) * 0.035}`
            );
          }
        });

        //로고 사라지기
        tl.to(logoArea, {
          opacity: 0,
          delay: 0.6,
          duration: 0.2,
        })
          //인트로 화면 올라가기
          .to(
            introBg,
            {
              y: "-100%",
              duration: 0.4,
              ease: "power1.inOut",
            },
            "-=.1"
          )
          .to(
            "body",
            {
              overflow: "auto",
            },
            "<"
          )
          .to(
            introBg1,
            {
              y: "-100%",
              duration: 0.4,
            },
            "-=.3"
          )
          .to(intro, {
            display: "none",
          })
          //메인 비주얼 글자들 순서대로 나타나기
          .fromTo(
            mainTopTxt,
            {
              y: 30,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "-=.9"
          );

        mainTxt.forEach((element, i) => {
          if (i == 0) {
            tl.to(
              element,
              {
                y: 0,
                duration: 0.3,
              },
              "-=.6"
            );
          } else {
            tl.to(
              element,
              {
                y: 0,
                duration: 0.3,
              },
              `-=.${6 - i * 0.5}`
            );
          }
        });

        tl.fromTo(
          mainBottomTxt,
          {
            y: 30,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "<"
        )
          //두번째 섹션 나타나기
          .fromTo(
            sec2,
            {
              y: 30,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "-=.4"
          );
      },
    })
    //음악 버튼 크기 약간씩 변하기
    .to(musicBtn, {
      scale: 1,
      duration: 0.1,
    })
    //울리는 것 같은 효과 주기
    .fromTo(
      fade,
      {
        scale: 1,
        x: "-50%",
        opacity: 1,
      },
      {
        scale: 3.6,
        x: "-50%",
        opacity: 0,
        duration: 0.8,
        ease: "power1.in",
      },
      "<"
    )
    .to(
      musicBtn,
      {
        scale: 1.1,
        duration: 0.3,
      },
      "<"
    )
    .to(
      musicBtn,
      {
        scale: 1,
        duration: 0.4,
      },
      ">"
    );

  //밑에 글 나타나기
  gsap.to(musicP, {
    delay: 0.8,
    opacity: 1,
    duration: 0.01,
  });
});
