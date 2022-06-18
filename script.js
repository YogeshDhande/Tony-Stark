$(document).ready(function(){
$('.slider').slick({
  arrows:false,
  dots:true,
  appendDots:'.slider-dots',
  dotsClass:'dots'
});
});

//Sticky Nav
$(document).ready(function() {
  $(window).scroll(function() {
      if (this.scrollY > 20) {
          $('.navbar').addClass("sticky");
      } else {
          $('.navbar').removeClass("sticky");
      }
  });

  $('.menu-btn').click(function() {
    $('.navbar .nav-list').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    }); 
}); 
