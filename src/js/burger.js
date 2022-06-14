(function hamburger() {
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
})()