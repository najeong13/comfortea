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
  