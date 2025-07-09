"use strict";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin);
  const introBg = document.querySelector(".intro_bg");
  const music = document.querySelector(".intro_bg .music");
  const musicBtn = document.querySelector(".intro_bg .music button");
  const fade = document.querySelector(".intro_bg .music .fade");
  const musicP = document.querySelector(".intro_bg .music p");
  const logoArea = document.querySelector(".intro_bg .logo");
  const introLottie = document.querySelector(".intro_bg .intro-lottie");
  const logoPath = document.querySelector(
    ".intro_bg .logo .intro-lottie > svg > g > g > g:nth-last-of-type(2)"
  );
  const logoPath1 = document.querySelectorAll(
    ".intro_bg .logo .intro-lottie > svg > g > g > g:nth-last-of-type(2) > :is(g:nth-child(1), g:nth-child(2)) path"
  );
  const logoPath2 = document.querySelectorAll(
    ".intro_bg .logo .intro-lottie > svg > g > g > g:nth-last-of-type(2) > :is(g:nth-child(3), g:nth-child(4)) path"
  );
  const logoTxt = document.querySelectorAll(
    ".intro_bg .logo .intro-lottie > svg > g > g > g:not(:is(:nth-last-of-type(1), :nth-last-of-type(2)))"
  );

  //배경
  gsap
    .timeline()
    .to("body", {
      overflow: "hidden",
    })
    .to(
      introBg,
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
            logoArea.style.display = "block";

            //로고 크기 키우기
            introLottie.style.width = "79%";
            introLottie.style.height = "79%";

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

        //크기 약간 작아지기
        tl.to(
          introLottie,
          {
            width: "77%",
            height: "77%",
            duration: 0.5,
          },
          "-=.5"
          //크기 작아지기
        ).to(
          introLottie,
          {
            width: 500,
            height: 200,
            duration: 0.3,
          },
          ">"
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

        tl.to(logoTxt, {
          display: "block",
        });
      },
    })
    .to(musicBtn, {
      scale: 1,
      duration: 0.1,
    })
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

  gsap.to(musicP, {
    delay: 0.8,
    opacity: 1,
    duration: 0.01,
  });
});
