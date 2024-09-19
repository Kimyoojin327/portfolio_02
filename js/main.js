$(document).ready( function () {
  //header scroll
  $(window).scroll(function() {
    let scrollT = $(this).scrollTop();
    if(scrollT > 200) {
      $("#header").addClass("fix");
      $("#header .util .language img").attr("src","img/common/ico_language_b.svg");
    } else{
      $("#header").removeClass("fix");
      $("#header .util .language img").attr("src","img/common/ico_language_w.svg");
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
  
  //메인비주얼 슬라이드
  const mb=new Swiper(".mb" , {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed : 1000,
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  //depth2
  $(".gnb > li").mouseenter( function () {
    $("#header").addClass("active");
    $("#header .util .language img").attr("src","img/common/ico_language_b.svg")
    $(this).find(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().fadeIn();
  });
  $(".gnb > li").mouseleave( function () {
    $("#header").removeClass("active");
    $("#header .util .language img").attr("src","img/common/ico_language_w.svg")
    $(this).find(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
  });

  $("#header").toggle

  //partnership
  $(".partnership_contents > div").not(":first").hide();
  $(".partnership_name > button").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let idx = $(this).index();
    $(".partnership_contents > div").eq(idx).fadeIn(500).siblings().fadeOut(0);  
  });
  //content01
  const content01_list=new Swiper(".content01_list" , {
    breakpoints: {
      320: { 
        slidesPerView: 1,
        spaceBetween: 16,

      },
      429: { 
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      700: { 
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      1200: { 
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    },
    speed : 1500,
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev",
     },
    
    slidesPerView: 4,
  });
  //content02
  const content02_list=new Swiper(".content02_list" , {
    breakpoints: {
      320: { 
        slidesPerView: 1,
        spaceBetween: 16,

      },
      429: { 
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      700: { 
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      1200: { 
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    },
    speed : 1500,
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev",
     },
    
    slidesPerView: 4,
  });
    //content03
    const content03_list=new Swiper(".content03_list" , {
      breakpoints: {
        320: { 
          slidesPerView: 1,
          spaceBetween: 16,
  
        },
        429: { 
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        700: { 
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
        1200: { 
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 4,
        },
      },
      speed : 1500,
      navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev",
       },
      
      slidesPerView: 4,
    });
    //content04
    const content04_list=new Swiper(".content04_list" , {
      breakpoints: {
        320: { 
          slidesPerView: 1,
          spaceBetween: 16,
  
        },
        429: { 
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        700: { 
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
        1200: { 
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 4,
        },
      },
      speed : 1500,
      navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev",
       },
      
      slidesPerView: 4,
    });
    //content05
    const content05_list=new Swiper(".content05_list" , {
      breakpoints: {
        320: { 
          slidesPerView: 1,
          spaceBetween: 16,
  
        },
        429: { 
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        700: { 
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
        1200: { 
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 4,
        },
      },
      speed : 1500,
      navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev",
       },
      
      slidesPerView: 4,
    });
    //content06
    const content06_list=new Swiper(".content06_list" , {
      breakpoints: {
        320: { 
          slidesPerView: 1,
          spaceBetween: 16,
  
        },
        429: { 
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
        700: { 
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
        1200: { 
          slidesPerView: 4,
          spaceBetween: 20,
          slidesPerGroup: 4,
        },
      },
      speed : 1500,
      navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev",
       },
      
      slidesPerView: 4,
    }); 
    
  //notice 
  $(".notice_content > div").not(":first").hide();
  $(".notice_button > button").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let idx = $(this).index();
    $(".notice_content > div").eq(idx).fadeIn(500).siblings().fadeOut(0);  
  });

  //co_ci_main
  const co_list=new Swiper(".co_list" , {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop : true,
    speed : 1000,
    breakpoints: {
      320: { 
        slidesPerView: 3,
        spaceBetween: 16,

      },
      500: { 
        slidesPerView: 4,
        spaceBetween: 60,
      },
      700: { 
        slidesPerView: 6,
        spaceBetween: 60,
      },
      1200: { 
        slidesPerView: 9,
        spaceBetween: 60,
      },
    },    
    slidesPerView: 9,
  }); 
});