$(document).ready( function () {
  $(window).scroll(function() {
    let scrollT = $(this).scrollTop();
    if(scrollT > 200) {
      $("#header").addClass("fix");
    } else{
      $("#header").removeClass("fix");
    }
  });

  //mgnb
  $(".depth2, .mgnb_wrap, .mdepth2").hide();
  $(".ham_btn").click( function () {
    $(".mgnb_wrap, .dim").fadeIn();
    $(".mgnb").animate({
      "right": "0%"
    });
  });
  $(".mgnb_close").click( function () {
    $(".mgnb_wrap, .dim").fadeOut();
    $(".mgnb").animate({
      "right": "-100%"
    });
  });
  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2").slideDown();
    $(this).siblings().find(".mdepth2").slideUp();
  });

  //depth2
  $(".gnb > li").mouseenter( function () {
    $(this).find(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().fadeIn();
  });
  $(".gnb > li").mouseleave( function () {
    $(this).find(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
  });

  $("#header").toggle  
});