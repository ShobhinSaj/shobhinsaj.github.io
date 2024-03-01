$(document).ready(function() {
   
    removeClassOnSmallScreen();
    $(window).resize(removeClassOnSmallScreen);

    function removeClassOnSmallScreen() {
      var nav = $('nav');
      var screenWidth = $(window).width();
      var breakpoint1 = 767;
        // Remove the class if the screen width is below the breakpoint
      if (screenWidth < breakpoint1) {
        nav.removeClass('w-75 rounded-4');
        nav.addClass('rounded-bottom-4');
      } else {
        // Add the class back if the screen width is equal to or above the breakpoint
        nav.removeClass('rounded-bottom-4');
        nav.addClass('w-75 rounded-4');
      }
    }
  });