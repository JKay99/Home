
//       function scrollToTop()
//       {window.scrollTo(0,0;}
       
//   
//        $(".top").ready(function(){$('html,body').animate({scrollTop: $("btxt").offset().top},-100);});

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}