// Index script
var swiper = new Swiper(".prdSwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".visualSwiper", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: false,
    },
});



$(".jeonpoText").hide();
$(".jeonpo").mouseenter(function () { $(".jeonpoText").stop().fadeIn() });
$(".jeonpoText").hide();
$(".jeonpo").mouseleave(function () { $(".jeonpoText").stop().fadeOut() });
$(".gijangText").hide();
$(".gijang").mouseenter(function () { $(".gijangText").stop().fadeIn() });
$(".gijangText").hide();
$(".gijang").mouseleave(function () { $(".gijangText").stop().fadeOut() });
// S6 script
$(".detail1").hide();
$(".reviewslide1").mouseenter(function () { $(".detail1").stop().slideDown() });
$(".detail1").hide();
$(".reviewslide1").mouseleave(function () { $(".detail1").stop().slideUp() });
$(".detail2").hide();
$(".reviewslide2").mouseenter(function () { $(".detail2").stop().slideDown() });
$(".detail2").hide();
$(".reviewslide2").mouseleave(function () { $(".detail2").stop().slideUp() });
$(".detail3").hide();
$(".reviewslide3").mouseenter(function () { $(".detail3").stop().slideDown() });
$(".detail3").hide();
$(".reviewslide3").mouseleave(function () { $(".detail3").stop().slideUp() });
