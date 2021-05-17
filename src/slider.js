$(document).ready(function(){
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
});