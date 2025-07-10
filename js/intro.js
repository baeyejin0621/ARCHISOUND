"use strict";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin);
  const introBg = document.querySelector(".intro_bg");
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
  const logoTxt = document.querySelector(".intro_bg .logo .logo_txt");
  const logoTxtInner = document.querySelector(
    ".intro_bg .logo .logo_txt > svg > g > g"
  );
  let logoTxtChildren = Array.from(logoTxtInner.children);
  console.log(logoTxtChildren);
  logoTxtChildren = logoTxtChildren.pop();

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
          "-=.3"
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
          duration: 0.5,
        })
          //로고 글자 나타나기
          .fromTo(
            logoTxt,
            {
              width: 0,
            },
            {
              width: 500,
              transition: 0.8,
            },
            "<"
          );

        logoTxtChildren.forEach((element) => {
          tl.fromTo(
            element,
            {
              transform: "translate(-100px, -50%)",
            },
            {
              transform: "translate(0, -50%)",
              duration: 0.5,
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
