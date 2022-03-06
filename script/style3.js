$(document).ready(function(){

  let gnb = $('.gnb > ul > li');

  gnb.mouseenter(function(){
    $(this).find('.sub').stop().slideDown();
  });

  gnb.mouseleave(function(){
    $('.sub').stop().slideUp();
  });

  // 이미지 슬라이드 서식
  let n = 0;

  function fadeInOut(){

    $('#slide li').stop().fadeOut();

    if(n==2){
      n=0;
    }else{
      n++;
    }

    $('#slide li').eq(n).stop().fadeIn();
  }

  let Timer = setInterval(fadeInOut,3000);
});