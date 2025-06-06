// const { startTransition } = require("react");

function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})

function canvas(){
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  Photos/frames00007.png
  Photos/frames00010.png
  Photos/frames00016.png
  Photos/frames00022.png
  Photos/frames00025.png
  Photos/frames00028.png
  Photos/frames00031.png
  Photos/frames00013.png
  Photos/frames00034.png
  Photos/frames00019.png
  Photos/frames00037.png
  Photos/frames00040.png
  Photos/frames00043.png
  Photos/frames00046.png
  Photos/frames00049.png
  Photos/frames00052.png
  Photos/frames00055.png
  Photos/frames00058.png
  Photos/frames00061.png
  Photos/frames00064.png
  Photos/frames00067.png
  Photos/frames00070.png
  Photos/frames00073.png
  Photos/frames00076.png
  Photos/frames00079.png
  Photos/frames00082.png
  Photos/frames00085.png
  Photos/frames00088.png
  Photos/frames00091.png
  Photos/frames00094.png
  Photos/frames00097.png
  Photos/frames00100.png
  Photos/frames00103.png
  Photos/frames00106.png
  Photos/frames00109.png
  Photos/frames00112.png
  Photos/frames00115.png
  Photos/frames00118.png
  Photos/frames00121.png
  Photos/frames00124.png
  Photos/frames00127.png
  Photos/frames00130.png
  Photos/frames00133.png
  Photos/frames00136.png
  Photos/frames00139.png
  Photos/frames00142.png
  Photos/frames00145.png
  Photos/frames00148.png
  Photos/frames00151.png
  Photos/frames00154.png
  Photos/frames00157.png
  Photos/frames00160.png
  Photos/frames00163.png
  Photos/frames00166.png
  Photos/frames00169.png
  Photos/frames00172.png
  Photos/frames00175.png
  Photos/frames00178.png
  Photos/frames00181.png
  Photos/frames00184.png
  Photos/frames00187.png
  Photos/frames00190.png
  Photos/frames00193.png
  Photos/frames00196.png
  Photos/frames00199.png
  Photos/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()

var clutter = "";

document.querySelector("#page4>h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
    scrollTrigger:{
        trigger:`#page4>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})


function canvas1(){
    const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  Photos/bridges00004.png
  Photos/bridges00007.png
  Photos/bridges00010.png
  Photos/bridges00013.png
  Photos/bridges00016.png
  Photos/bridges00019.png
  Photos/bridges00022.png
  Photos/bridges00025.png
  Photos/bridges00028.png
  Photos/bridges00031.png
  Photos/bridges00034.png
  Photos/bridges00037.png
  Photos/bridges00040.png
  Photos/bridges00043.png
  Photos/bridges00046.png
  Photos/bridges00049.png
  Photos/bridges00052.png
  Photos/bridges00055.png
  Photos/bridges00058.png
  Photos/bridges00061.png
  Photos/bridges00064.png
  Photos/bridges00067.png
  Photos/bridges00070.png
  Photos/bridges00073.png
  Photos/bridges00076.png
  Photos/bridges00079.png
  Photos/bridges00082.png
  Photos/bridges00085.png
  Photos/bridges00088.png
  Photos/bridges00091.png
  Photos/bridges00094.png
  Photos/bridges00097.png
  Photos/bridges00100.png
  Photos/bridges00103.png
  Photos/bridges00106.png
  Photos/bridges00109.png
  Photos/bridges00112.png
  Photos/bridges00115.png
  Photos/bridges00118.png
  Photos/bridges00121.png
  Photos/bridges00124.png
  Photos/bridges00127.png
  Photos/bridges00130.png
  Photos/bridges00133.png
  Photos/bridges00136.png
  Photos/bridges00139.png
  Photos/bridges00142.png
  Photos/bridges00145.png
  Photos/bridges00148.png
  Photos/bridges00151.png
  Photos/bridges00154.png
  Photos/bridges00157.png
  Photos/bridges00160.png
  Photos/bridges00163.png
  Photos/bridges00166.png
  Photos/bridges00169.png
  Photos/bridges00172.png
  Photos/bridges00175.png
  Photos/bridges00178.png
  Photos/bridges00181.png
  Photos/bridges00184.png
  Photos/bridges00187.png
  Photos/bridges00190.png
  Photos/bridges00193.png
  Photos/bridges00196.png
  Photos/bridges00199.png
  Photos/bridges00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas1()

var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})

gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top bottom`,
    end:`bottom top`,
    scrub:.5,
    scroller:`#main`,
  },
  scale:1.5
})

gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top bottom`,
    end:`bottom top`,
    scrub:.5,
    scroller:`#main`
  },
  backgroundColor:`blue`,
  scale:1.3
})