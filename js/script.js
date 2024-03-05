$(document).ready(function() {
    $('#downloadLink').on('click', function(e) {
    // Trigger download
      setTimeout(function() {
        simulateDownload();
    }, 1000); // Simulating a delay for the download to complete
    });

    // Show SweetAlert on successful download
    function simulateDownload() {
    Swal.fire({
        icon: 'success',
        title: 'Download Successful!',
        showConfirmButton: false,
        timer: 1500 // Adjust the timer as needed
    });
  }
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
        $('.hero_img').css("width", "80%");
        $('.scrolldown').hide();
      } else {
        // Add the class back if the screen width is equal to or above the breakpoint
        nav.removeClass('rounded-bottom-4');
        nav.addClass('w-75 rounded-4');
        $('.scrolldown').show();
      }
    }
  });