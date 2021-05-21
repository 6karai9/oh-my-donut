

$(document).ready(function(){
    var $slider = $('.slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });}
    $('.slider').slick({
    centerMode: true,
    centerPadding:'10px',
    slidesToShow: 3,
    slidesToScroll: 1,
        arrows:true,
        
        responsive: [
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
                arrows:false
            }
        }
        ]
    
        
    });
    
    $(".site-menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 200)}); 


      $(window).scroll(function() {
 
        if($(this).scrollTop() != 0) {
         
        $('.toTop').fadeIn();
         
        } else {
         
        $('.toTop').fadeOut();
         
        }
         
        });
         
        $('.toTop').click(function() {
         
        $('body,html').animate({scrollTop:0},200)});
        
});

