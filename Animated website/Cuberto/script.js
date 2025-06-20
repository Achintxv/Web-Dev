Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos: ["./Resources/0.mp4", "./Resources/2.mp4", "./Resources/3.mp4"]});

gsap.to(".flelem", {
  scrollTrigger: {
    trigger: "#fimg",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".flelem");
Shery.imageEffect(".images",{
  style: 5,
  config: {onMouse:{value:1}},
  slideStyle:(setScroll)=>{
    sections.forEach(function(section, index){
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function(prog){
          setScroll(prog.progress+index)
        },
      });
    });
  },
});