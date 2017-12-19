$(document).ready(function() {
  console.warn('document ready')
  $('.watering-can-span').css('opacity', 0);


  $(".watering-can-span").waypoint(function(direction) {

    if (direction === 'down') {
      console.warn('down')
      $('.watering-can-span').addClass('fadeInLeft');
      $('.watering-can-span').removeClass('fadeOutLeft');
      // user is scrolling down, reveal our content
    } else if (direction === 'up') {
      console.warn('up')
      $('.watering-can-span').addClass('fadeOutLeft');
      $('.watering-can-span').removeClass('fadeInLeft');
    }
  }, { offset: '50%' })
})
