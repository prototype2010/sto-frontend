const pageup = document.querySelector('.pageup');

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && document.body.clientWidth > 600) {
        pageup.style.display = 'block';
    } else {
        pageup.style.display = 'none';
    }
}

window.onscroll = function() {scrollFunction()}