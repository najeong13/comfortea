
// Brand script
$(window).scroll(function () {

  var h = $(document).scrollTop();
  offset = $("#section1").offset().top;
  offset2 = $("#section2").offset().top;


  if (h > offset && h < offset2) { //특정 div(#section1)가 있는 곳을 지날 때
    $(".s1_bg_wrap-brand").addClass("expand")
  }
  // else if (h > 0) {  //스크롤이 200 이상에 위치할 때
  //     $(".s1_bg_wrap-brand").addClass("expand");
  // } 
  else {  // 그 외
    $(".s1_bg_wrap-brand").removeClass("expand");
  }
});
$(window).scroll(function () {

  var h = $(document).scrollTop();
  offset = $("#section1").offset().top;
  offset2 = $("#section2").offset().top;


  if (h > offset && h < offset2) { //특정 div(#section1)가 있는 곳을 지날 때
    $(".expand_text_wrap").addClass("show_text");
  }
  // else if (h > 50) {  //스크롤이 200 이상에 위치할 때
  //     $(".expand_text_wrap").addClass("show_text");
  // } 
  else {  // 그 외
    $(".expand_text_wrap").removeClass("show_text");
  }
});

// about script

function Parallax() {
  //스크롤된 거리
  var scrolled = $(window).scrollTop() + 1;

  //백그라운드 스크롤 속도 변경 시 0.3 을 수정
  $('.expand_bg_wrap').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
  Parallax();
});


// brand gsap scroll trigger

gsap.registerPlugin(ScrollTrigger);

gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray('.panel:not(.third_picture)');
// 사진
images.forEach((image, i) => {

  var tl = gsap.timeline({

    scrollTrigger: {
      trigger: "#section3",
      start: () => "top -" + (window.innerHeight * (i + 0.5)),
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
      start: () => "top -" + (window.innerHeight * i),
      end: () => "+=" + window.innerHeight,
      scrub: 4,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
    }

  })

  tl
    .to(text, { duration: 1, opacity: 0, y: "0%" })
    .to(text, { duration: 1, opacity: 1, y: "0%" })
    .to(text, { duration: 1, opacity: 0, y: "0%" }, 3)

    ;

});

ScrollTrigger.create({

  trigger: "#section3",
  scrub: 4,
  pin: true,
  start: () => "top top",
  end: () => "+=" + ((images.length + 1.5) * window.innerHeight),
  invalidateOnRefresh: true,

});

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.section4',
    scrub:1,
    start:'top top',
    end: 'bottom -150%',
    pin:true ,
    toggleActions: 'play none none none',
  }
});
tl.to('.section4 ul', {
  xPercent: -50,
  ease: "none",
})


var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.section4 li:nth-child(1)',
    scrub:1,
    start:'top 80%',
    end:'+=1500',
    toggleActions: 'play none none none',
  }
});
tl.to('.section4 li:nth-child(1)', {
  background:'#CDDFA4'
})  
tl.to('.section4 li:nth-child(1)', {
  background:'rgba(205, 223, 164, 0.2)'
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.section4 li:nth-child(2)',
    scrub:1,
    start:'top 20%',
    end:'+=1500',
    toggleActions: 'play none none none',
  }
});
tl.to('.section4 li:nth-child(2)', {
  background:'#CDDFA4'
})  
tl.to('.section4 li:nth-child(2)', {
  background:'rgba(205, 223, 164, 0.2)'
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.section4 li:nth-child(3)',
    scrub:1,
    start:'top -40%',
    end:'+=1000',
    toggleActions: 'play none none none',
  }
});
tl.to('.section4 li:nth-child(3)', {
  background:'#CDDFA4'
})  
tl.to('.section4 li:nth-child(3)', {
  background:'rgba(205, 223, 164, 0.2)'
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.section4 li:nth-child(4)',
    scrub:1,
    start:'top -100%',
    end:'+=1000',
    toggleActions: 'play none none none',
  }
});
tl.to('.section4 li:nth-child(4)', {
  background:'#CDDFA4'
})  
tl.to('.section4 li:nth-child(4)', {
  background:'rgba(205, 223, 164, 0.2)'
})
