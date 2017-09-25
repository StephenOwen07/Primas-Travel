function MobileNav() {

  var buttonOpen = document.querySelector('.primary-nav__open-btn');
  var buttonClose = document.querySelector('.primary-nav__close-btn');
  var mobileNav = document.querySelector('#primary-nav__mobile');

  buttonOpen.addEventListener('click', function () {
    mobileNav.style.height = '100%';
    buttonOpen.style.display = 'none';
  });

  buttonClose.addEventListener('click', function () {
    mobileNav.style.height = '0%';
    buttonOpen.style.display = 'initial';
  });


}

module.exports = MobileNav;
