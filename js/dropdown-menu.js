$('.dropdown').hover( function(e) {
  var open = $(e.currentTarget).children('.dropdown-menu');
  open.toggleClass('is-open');
});