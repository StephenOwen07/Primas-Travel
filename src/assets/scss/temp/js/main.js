/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Preloader = __webpack_require__(1);
var ScrollTopBtn = __webpack_require__(2);
var MobileNav = __webpack_require__(3);
var RoomSortDropDown = __webpack_require__(4);
var ShowMoreBtn = __webpack_require__(5);

var preloader = new Preloader();
var scrollTopBtn = new ScrollTopBtn();
var mobileNav = new MobileNav();
var roomSortDropDown = new RoomSortDropDown();
var showMoreBtn = new ShowMoreBtn();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function Preloader() {

  $(window).on('load', function () { // makes sure the whole site is loaded 

    $('#spinner').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
      'overflow': 'visible'
    });

  });

}

module.exports = Preloader;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function ScrollTopBtn() {

  $(document).ready(function () {

    // scroll top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scroll-top-btn").fadeIn(300);
      } else {
        $(".scroll-top-btn").fadeOut(300);
      }
    });


    $(".scroll-top-btn").click(function (e) {
      $("html, body").animate({
        scrollTop: "0px"
      },
        500
      );
    });
  });

}

module.exports = ScrollTopBtn;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function RoomSortDropDown() {

  var dropBtns = document.querySelectorAll('.room-sort-menu__dropdown');

  function closeOpenItems() {
    var openMenus = document.querySelectorAll('.room-sort-menu__drop-menu');
    openMenus.forEach(function (menus) {
      menus.classList.remove('show');
    });
  }

  dropBtns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {
      var
        dropContent = btn.querySelector('.room-sort-menu__drop-menu'),
        shouldOpen = !dropContent.classList.contains('show');
      e.preventDefault();

      // First close all open items.
      closeOpenItems();
      // Check if the clicked item should be opened. It is already closed at this point so no further action is required if it should be closed.
      if (shouldOpen) {
        // Open the clicked item.
        dropContent.classList.add('show');
      }
      // prevent event bubbling
      e.stopPropagation();
    });


  });

  //   close menus when clicking outside of them
  window.addEventListener('click', function (event) {
    if (event.target != dropBtns) {
      // Moved the code here to its own function.
      closeOpenItems();
    }
  });

}

module.exports = RoomSortDropDown;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function ShowMoreBtn() {
  // Show more Button
  var showMoreBtns = document.querySelectorAll('.show-more-btn');

  showMoreBtns.forEach(function (btn) {

    btn.addEventListener('click', function () {
      var showMoreContent = btn.previousElementSibling;
      var shouldOpen = !showMoreContent.classList.contains('show-more-open');

      if (shouldOpen) {
        showMoreContent.classList.add('show-more-open');
        btn.innerHTML = '<span>Show less</span> <i class="fa fa-caret-up" aria-hidden="true"></i>';
      } else {
        showMoreContent.classList.remove('show-more-open');
        btn.innerHTML = '<span>Show more</span> <i class="fa fa-caret-down" aria-hidden="true"></i>';
      }
    });
  });

}

module.exports = ShowMoreBtn;
 

/***/ })
/******/ ]);