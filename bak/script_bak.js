$(document).ready(function() {
    // Get the height of the fixed-top navbar
    // var navbarHeight = $('.navbar').outerHeight();

    // $('.nav-link').on('click', function(){
    //     $('.navbar-collapse').collapse('hide');
    //     $('.sctn').each(function(){
    //         $(this).removeClass("vh-100");
           
    //                             })
    //      var windowHeight = $(window).height();
    //      var sectionHeight = $(this).height();
                    
    //                             // Calculate the new padding-top
    //     var newPaddingTop = windowHeight > sectionHeight ? (windowHeight - sectionHeight) / 2 : 0;                
    //     hrefVal=$(this).attr('href');    
    //     $(hrefVal).addClass("vh-100");
    //     $(hrefVal).css('padding-top', (navbarHeight+newPaddingTop) + 'px');

    // })
   
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


  });
