
$(document).ready(function () {
  // $("#sidebar").mCustomScrollbar({
  //     theme: "minimal"
  // });

  $('#dismiss').on('click', function () {
      $('#sidebar').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
});
