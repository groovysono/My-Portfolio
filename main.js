var typed = new Typed(".typing", {
  strings: ["Developer", "Freelancer", "Video Editor", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

$(document).ready(function(){
  $('nav .navbar li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});
// toggle menu/navbar script
$('.menu-btn').click(function(){
    $(' nav .navbar').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
});
