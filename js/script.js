$(document).ready(function() {
  $('.hamburger-icon').on('click',toggleMenu);
  $('menu-links.li a').on('click',toggleMenu);
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  
  // Resume download button script
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