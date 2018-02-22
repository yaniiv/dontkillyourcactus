$(document).ready(function() {
  console.warn('document ready')
  $.scrollify({
      section : ".color-block",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeInExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: true,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll:true,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });

  // Watering Can
  $('.watering-can').css('opacity', 0);
  var waypoint = new Waypoint({
    element: document.getElementsByClassName('section-2'),
    handler: function(direction) {
      $('.watering-can').css('opacity', 100);
      console.warn('MOVING ' + direction + '. I am 200px from the top of the section2')
      if (direction === 'down') {
        $('.watering-can').addClass('slideInRight');
        $('.watering-can').removeClass('slideOutRight');
      } else if (direction === 'up') {
        $('.watering-can').addClass('slideOutRight');
        $('.watering-can').removeClass('slideInRight');
      }
    },
    offset: 300
  })

  $('.sunflower').css('opacity', 0);
  var waypoint = new Waypoint({
    element: document.getElementsByClassName('section-3'),
    handler: function(direction) {
      console.warn('MOVING ' + direction + '. I am 200px from the top of the section2')
      if (direction === 'down') {
        $('.sunflower').addClass('rotateInDownLeft');
        $('.sunflower').removeClass('rotateOutDownRight');
      } else if (direction === 'up') {
        $('.sunflower').addClass('rotateOutDownRight');
        $('.sunflowern').removeClass('rotateInDownLeft');
      }
    },
    offset: 200
  })
})
