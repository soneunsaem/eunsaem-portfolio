// 포트폴리오 소개 풀페이지

$(document).ready(function () {
    $('#fullpage').fullpage({
      //options here
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      menu: '#enu',
      navigation: true,
      navigationTooltips: ['PC', 'MOBILE', '반응형'],
      navigationPosition: 'right',
    });
  });

  $(function(){
    $('.toggle-menu-btn').click(function(){
      $('#gnb').toggleClass('on');
    });
  });
  