$(document).ready(function() {

  console.warn('document ready')

  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'cactusbodymovin.json'
  })

  animation.play()

  // $('.sunflower').css('opacity', 0);
  // var waypoint = new Waypoint({
  //   element: document.getElementsByClassName('section-3'),
  //   handler: function(direction) {
  //     console.warn('MOVING ' + direction + '. I am 200px from the top of the section2')
  //     if (direction === 'down') {
  //       $('.sunflower').addClass('rotateInDownLeft');
  //       $('.sunflower').removeClass('rotateOutDownRight');
  //     } else if (direction === 'up') {
  //       $('.sunflower').addClass('rotateOutDownRight');
  //       $('.sunflowern').removeClass('rotateInDownLeft');
  //     }
  //   },
  //   offset: 200
  // })
})
