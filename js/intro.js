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
  let logoTxt = Array.from(
    document.querySelectorAll(
      ".intro_bg .logo .intro-lottie > svg > g > g > g:not(:is(:nth-last-of-type(1), :nth-last-of-type(2)) path)"
    )
  );
  logoTxt = logoTxt.reverse();

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

        //크기 작아지기
        tl.to(
          introLottie,
          {
            width: 500,
            height: 200,
            duration: 0.5,
            ease: "power4.inOut",
          },
          "-=.6"
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

        tl.to(logoPath, {
          x: -90,
        });

        logoTxt.forEach((element) => {
          tl.to(
            element,
            {
              x: 350,
              duration: 0.3,
              strokeDashoffset: 0,
            },
            "<"
          );
        });
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
