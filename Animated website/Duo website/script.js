function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

var csr = document.querySelector("#cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove", function(dets){
    csr.style.left = dets.x + 2 + "px"
    csr.style.top = dets.y + 2 + "px"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        start:"top:25%",
        end:"top 0",
        scroller:"#main",
        scrub:2
    }
})

tl.to(".page1 h1",{
    x:-50
},"anim")

tl.to(".page1 h2",{
    x:50,
},"anim")

tl.to(".page1 video",{
    width:"90%"
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h2",
        start:"top: -100%",
        end:"top -120%",
        scroller:"#main",
        scrub:3
    }
})
tl2.to("#main",{
    backgroundColor:"white"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        start:"top: -80%",
        end:"top -150%",
        scroller:"#main",
        scrub:3
    }
})
tl3.to("#main",{
    backgroundColor:"black"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        var att = elem.getAttribute("data-image")
        csr.style.width = "250px"
        csr.style.height = "200px"
        csr.style.borderRadius = "0"
        csr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "transparent"
        csr.style.width = "15px"
        csr.style.height = "15px"
        csr.style.borderRadius = "50%"
        csr.style.backgroundImage = `url(none)`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})

const marqueeText = document.querySelector("#marquee-text");
h4.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const text = item.textContent;
    marqueeText.textContent = (` ${text} `.repeat(20)).toUpperCase();
    purple.style.display = "flex";
    marqueeText.style.animation = "none";
    void marqueeText.offsetWidth;
    marqueeText.style.animation = "marquee 20s linear infinite";

    setTimeout(() => {
      purple.style.opacity = 1;
    }, 10);
  });

  item.addEventListener("mouseleave", () => {
    purple.style.opacity = 0;
    setTimeout(() => {
      purple.style.display = "none";
      marqueeText.textContent = "";
    }, 500);
  });
});
