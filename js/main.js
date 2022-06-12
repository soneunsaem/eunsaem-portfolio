  $(function(){
    $('.toggle-menu-btn').click(function(){
      $('#gnb').toggleClass('on');
    });
  });



  const SWIRL_OPTS = {
    left: 0, top: 0,
    fill:           '#FA738B',
    duration:       'rand(600, 1000)',
    radius:         'rand(10, 20)',
    pathScale:      'rand(.5, 1)',
    swirlFrequency: 'rand(2,4)',
    swirlSize: 'rand(6,14)',
  }