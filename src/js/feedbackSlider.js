import SlickJQuery from 'jquery'
import 'slick-carousel/slick/slick'

window.SlickJQuery = SlickJQuery

document.addEventListener('DOMContentLoaded', () => {
    SlickJQuery('.feedback__slider')
        .slick({
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoPlay: true,
            autoplaySpeed: 5000,
            slidesToScroll:1,
            lazyLoad: 'ondemand',
            mobileFirst: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            respondTo: 'window',
            arrows: false,
        }).slick('slickPlay')
});


