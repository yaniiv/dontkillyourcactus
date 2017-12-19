$(document).ready(function() {
  console.warn('hi')
  //
  // var waypoint = new Waypoint({
  //   element: document.getElementsByClassName('watering-can-span'),
  //   handler: function() {
  //     notify('Basic waypoint triggered')
  //   }
  // })

  $(".watering-can-span").waypoint(function(direction) {

    if (direction === 'down') {
      console.warn('down')
      // user is scrolling down, reveal our content
    } else if (direction === 'up') {
      console.warn('up')
    }

  });
}
)
