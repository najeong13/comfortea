gsap.registerPlugin(ScrollTrigger);

gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray('.panel:not(.third_picture)');
// 사진
images.forEach((image, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: "#section3",
      start: () => "top -" + (window.innerHeight*(i+0.5)),
      end: () => "+=" + window.innerHeight,
      scrub: 4,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
    }
    
  })
  
  tl
  .to(image, { duration: 1, opacity: 1, })  
  .to(image, { duration: 2, opacity: 0, }, 3)
});


gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });
// 글
var texts = gsap.utils.toArray('.panel-text');

texts.forEach((text, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: "#section3",
      start: () => "top -" + (window.innerHeight*i),
      end: () => "+=" + window.innerHeight,
      scrub: 4,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
    }
    
  })
  
  tl
  .to(text, { duration: 1, opacity: 0, y:"0%" })
  .to(text, { duration: 1, opacity: 1, y:"0%" })
  .to(text, { duration: 1, opacity: 0, y:"0%" }, 3)
  
  ;
  
});





ScrollTrigger.create({

    trigger: "#section3",
    scrub: 4,
    markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((images.length + 1.5) * window.innerHeight),
    invalidateOnRefresh: true,

});
