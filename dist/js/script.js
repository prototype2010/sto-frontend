
window.addEventListener('DOMContentLoaded', () => {
    const pageup = document.querySelector('.pageup');

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && document.body.clientWidth > 600) {
            pageup.style.display = 'block';
        } else {
            pageup.style.display = 'none';
        }
    }

    slider({
        container: '.feedback__slider',
        slide: '.feedback__slide',
        wrapper: '.feedback__slider-wrapper',
        field: '.feedback__slider-inner'
    })

    function slider({container, slide, wrapper, field}) {
    
        const slides = document.querySelectorAll(slide),
              slider = document.querySelector(container),
              slidesWrepper = document.querySelector(wrapper),
              slidesField = document.querySelector(field),
              width = window.getComputedStyle(slidesWrepper).width;
    
        let slideIndex = 1;
        let offset = 0;
    
        console.log(slides)
        console.log(slider)
    
        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
    
        slidesWrepper.style.overflow ='hidden';
    
        slides.forEach(slide => {
            slide.style.width = width;
        });
    
        slider.style.position = 'relative';
    
        const indicators = document.createElement('ol'),
              dots = [];
        indicators.classList.add('carousel-indicators');
        indicators.style.cssText = `
            position: absolute;
            right: 0;
            bottom: -40px;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: left;
            margin-left: 58px;
            list-style: none;
        `;
        slider.append(indicators);
    
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1);
            dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 10px;
                height: 10px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #7a7a7a;
                background-clip: padding-box;
                border-radius: 100%;
                transition: all .6s ease;
            `;
    
            if (i == 0) {
                dot.style.backgroundColor = "#61ce70";
            }
            indicators.append(dot);
            dots.push(dot);
        }
    
        function deleteNoDigits(item) {
            return +item.replace(/\D/g, '');
        }
    
        function showDots() {
            dots.forEach(dot => dot.style.backgroundColor = '#7a7a7a');
            dots[slideIndex - 1].style.backgroundColor = "#61ce70";
        }
    
        function next() {
            if (offset == deleteNoDigits(width) * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += deleteNoDigits(width);
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;
    
            if (slideIndex == slides.length) {
                slideIndex = 1;   
            } else {
                slideIndex++;
            }
    
            dots.forEach(dot => dot.style.backgroundColor = '#7a7a7a');
            dots[slideIndex - 1].style.backgroundColor = '#61ce70';
        };
    
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
    
                slideIndex = slideTo;
                offset = deleteNoDigits(width) * (slideTo - 1);
    
                slidesField.style.transform = `translateX(-${offset}px)`;
    
                showDots();
            });
        });
    
        const timer = setInterval(next, 10000);
    }


    function hamburger() {
        const menu = document.querySelector('.header__navigation__items'),
        menuItem = document.querySelectorAll('.header__navigation__items-link'),
        hamburger = document.querySelector('.hamburger-menu');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-menu-active');
            menu.classList.toggle('header__navigation__items-active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger-menu-active');
                menu.classList.toggle('header__navigation__items-active');
            })
        })
    }
    hamburger();
})