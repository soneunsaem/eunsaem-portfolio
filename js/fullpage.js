// 포트폴리오 소개 풀페이지

$(document).ready(function () {
    $('#fullpage').fullpage({
      //options here
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      menu: '#enu',
      navigation: true,
      navigationTooltips: ['1', '2', '3'],
      navigationPosition: 'right',
    });
  });


  