src = "js/jquery-3.7.1.min.js"
// Header script
$(function () {
    let lastScrollTop = 0;
    const delta = 15;

    $(window).scroll(function (event) {
        const st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $('#header').addClass('nav-up').removeClass('nav-down');
        } else {
            $('#header').removeClass('nav-up').addClass('nav-down');
        };
        lastScrollTop = st;
    });
});
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


// direction script

var typingBool = false; 
var typingIdx = 0; 
var liIndex = 0;
var liLength = $(".typing-text>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-text>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } 
//    else{ //한문장이끝나면
//      //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
//      if(liIndex>=liLength-1){
//        liIndex=0;
//      }else{
//        liIndex++; 
//      }
     
//      //다음문장을 타이핑하기위한 셋팅
//         typingIdx=0;
//         typingBool = false; 
//         typingTxt = $(".typing-text>li").eq(liIndex).text(); 
       
//      //다음문장 타이핑전 1초 쉰다
//          clearInterval(tyInt);
//          setTimeout(function(){
//             $(".typing").html('');
//            tyInt = setInterval(typing,100);
//          },3000);
//     } 
}  


// scroll script
// $(window).scroll(function () {

//     var h = $(document).scrollTop();
//     offset = $("#section3").offset().top;
//     offset2 = $("#section4").offset().top;


//     if (h > offset && h < offset2) { //특정 div(#section1)가 있는 곳을 지날 때
//         $("#section3").css({
//             'position':'fixed',
//         })
//     } 
//     // else if (h > 50) {  //스크롤이 200 이상에 위치할 때
//     //     $(".expand_text_wrap").addClass("show_text");
//     // } 
//     else {  // 그 외
//         $("#section3").css({'position':'static'
//         });
//     }
// });


// gsap scroll trigger

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