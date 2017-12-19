$(document).ready(function() {
  console.warn('document ready')

  // Watering Can
  $('.watering-can-span').css('opacity', 0);
  $(".watering-can").waypoint(function(direction) {
    if (direction === 'down') {
      console.warn('down')
      $('.watering-can').addClass('slideInRight');
      $('.watering-can').removeClass('slideOutRight');
      // user is scrolling down, reveal our content
    } else if (direction === 'up') {
      console.warn('up')
      $('.watering-can').addClass('slideOutRight');
      $('.watering-can').removeClass('slideInRight');
    }
  })

  // Watering Can
  $('.sunflower').css('opacity', 0);
  $(".sunflower").waypoint(function(direction) {
    if (direction === 'down') {
      console.warn('down')
      $('.sunflower').addClass('rotateInDownLeft');
      $('.sunflower').removeClass('rotateOutDownRight');
      // user is scrolling down, reveal our content
    } else if (direction === 'up') {
      console.warn('up')
      $('.sunflower').addClass('rotateOutDownRight');
      $('.sunflowern').removeClass('rotateInDownLeft');
    }
  })
})
