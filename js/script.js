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
    } else if (h > 0) {  //스크롤이 200 이상에 위치할 때
        $(".s1_bg_wrap-brand").addClass("expand");
    } else {  // 그 외
        $(".s1_bg_wrap-brand").removeClass("expand");
    }
});
$(window).scroll(function () {

    var h = $(document).scrollTop();
    offset = $("#section1").offset().top;
    offset2 = $("#section2").offset().top;


    if (h > offset && h < offset2) { //특정 div(#section1)가 있는 곳을 지날 때
        $(".expand_text_wrap").addClass("show_text");
    } else if (h > 50) {  //스크롤이 200 이상에 위치할 때
        $(".expand_text_wrap").addClass("show_text");
    } else {  // 그 외
        $(".expand_text_wrap").removeClass("show_text");
    }
});