  // Hire me button
  document.getElementById("hire").addEventListener("click", function(){
    document.querySelector(".hire").style.display = "block";
    document.querySelector(".hire").style.transform = "translate(0, 0)";
});

// navbar sticky 

window.addEventListener("scroll", function(){
  var header = document.querySelector(".nav_section");
  header.classList.toggle("sticky", window.scrollY > 0)
});



// Typed js
$(document).ready(function(){
    /*home typed js*/
    var typed = new Typed('.htype', {
      strings: ['Web designer', 'Web Developer', 'Freelancer', 'Youtuber',],
      typeSpeed: 70,
      loop: true,
    });

    // Mobial nav
    $(".bars").click(function(){
      $(".mobial").slideDown();
    });

    $(".bar").click(function(){
      $(".mobial").slideUp();
    });

  });

  // animation on scroll 

  AOS.init({
    offset: 290,
    duration: 1000,
  });




  // window.addEventListener("scroll", function(){
  //   var header = document.querySelector("header");
  //   header.classList.toggle("sticky", window.scrollY > 0)
  // });