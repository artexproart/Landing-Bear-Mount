
$(document).ready(function(){
    $('.customers-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false
    });

    $('.restaurant-slider_top').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: false,
        prevArrow: false,
        centerMode: true,
        centerPadding: '1px',
        asNavFor: $('.restaurant-slider_down')
        
    });
    $('.restaurant-slider_down').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: false,
        prevArrow: false,
        centerMode: true,
        centerPadding: '1px',
        dots: true,
        asNavFor: $('.restaurant-slider_top')
    });
    let dots = document.querySelectorAll('.restaurant-slider .slick-dots li button');
    dots.forEach(function(item){
        item.textContent = '';
        console.log(item);
        return item;
    });

  
    

    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: false,
        prevArrow: false,
        dots: true
    });

    $('.about-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false,
    });

  });

//   responsive: [
//     {
//         breakpoint: 1200,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//         }
//     },
//     {
//         breakpoint: 768,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//     }
// ]