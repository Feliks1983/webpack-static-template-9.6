"use strict";

var _bundle = _interopRequireDefault(require("swiper/bundle"));

require("swiper/css/bundle");

require("../scss/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var readmore = document.querySelector('.readmore');
var readmoreText = document.querySelector('.readmore__text');
var tehnikaReadmore = document.querySelector('.tehnika-readmore');
var tehnikaBlock = document.querySelectorAll('.tehnika-block');
var tehnikaReadmoreText = document.querySelector('.tehnika-readmore__text');
var menuButtonBurger = document.querySelector('.menu__button__burger');
var menuButtonBurgerMenu = document.querySelector('.menu__button__burger-menu');
var menuButton = document.querySelector('.menu__button');
var menuList = document.querySelector('.menu__list');
var mainSidebar = document.querySelector('.main-sidebar');
var menuItem = document.querySelector('.menu__item');
var menuSpans = document.querySelectorAll('.menu__item__span');
var mainSectionButtons = document.querySelector('.main-section__buttons');
var btnActive = document.querySelectorAll('.button-active');
var buttonBurgerBlock = document.querySelectorAll('.button__burger-block');
var buttonBurgerNone = document.querySelectorAll('.button__burger-none');
var content = document.querySelector('.content');
var cardsANone = document.querySelectorAll('.cards__a-none');
menuButtonBurger.addEventListener('click', function () {
  if (menuList.style.display === 'block') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'block';
  }
});
menuItem.addEventListener('click', function (event) {
  if (event.target.classList.contains('menu__item__span')) {
    menuSpans.forEach(function (span) {
      return span.classList.remove('active-span');
    });
    event.target.classList.add('active-span');
  }
});
var child = menuItem.children[1];
var width = window.innerWidth;
child.addEventListener('click', function () {
  if (width <= 1440) {
    var isHidden = window.getComputedStyle(buttonBurgerNone[0]).display === 'none';

    if (!isHidden) {
      buttonBurgerNone.forEach(function (el) {
        return el.style.display = 'none';
      });
      buttonBurgerBlock.forEach(function (el) {
        return el.style.display = 'block';
      });
    } else {
      buttonBurgerNone.forEach(function (el) {
        return el.style.display = 'block';
      });
      buttonBurgerBlock.forEach(function (el) {
        return el.style.display = 'none';
      });
    }
  }
});
child.addEventListener('click', function () {
  if (window.innerWidth >= 1440) {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
});
menuButtonBurgerMenu.addEventListener('click', function () {
  if (mainSidebar.style.display === 'none' || menuList.style.display === 'block') {
    mainSidebar.style.display = 'block';
    menuList.style.display = 'none';
  } else {
    mainSidebar.style.display = 'none';
    menuList.style.display = 'block';
  }
});
mainSectionButtons.addEventListener('click', function (event) {
  var btnlist = event.target.closest('.button-active');

  if (btnlist) {
    btnActive.forEach(function (btn) {
      return btn.classList.remove('active');
    });
    btnlist.classList.add('active');
  }
});
readmore.addEventListener('click', function () {
  var isHidden = cardsANone[0].style.display === 'none';
  cardsANone.forEach(function (a) {
    a.style.display = isHidden ? 'block' : 'none';
  });
  readmoreText.innerHTML = isHidden ? 'Скрыть' : 'Показать все';
});
tehnikaReadmore.addEventListener('click', function () {
  var isHidden = tehnikaBlock[0].style.display === 'none';
  tehnikaBlock.forEach(function (a) {
    a.style.display = isHidden ? 'block' : 'none';
  });
  tehnikaReadmoreText.innerHTML = isHidden ? 'Скрыть' : 'Показать все';
});
var swiper = new _bundle["default"]('.brends-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiper2 = new _bundle["default"]('.tehnika-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiper3 = new _bundle["default"]('.cens-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});