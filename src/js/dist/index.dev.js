"use strict";

var _bundle = _interopRequireDefault(require("swiper/bundle"));

require("swiper/css/bundle");

require("../scss/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var readmore = document.querySelector('.readmore');
var readmoreText = document.querySelector('.readmore__text');
var tehnikaReadmore = document.querySelector('.tehnika-readmore');
var tehnikaBlock = document.querySelectorAll('.tehnika-block');
var tehnikaReadmoreText = document.querySelector('.tehnika-readmore__text');
var cardsANone = document.querySelectorAll('.cards__a-none');
var burgerMenu = document.querySelector('.burger-menu');
var sidebar = document.querySelector('.sidebar');
var content = document.querySelector('.content');
var menuButtonBurger = document.querySelector('.menu__button__burger');
burgerMenu.addEventListener('click', function () {
  sidebar.style.width = '320px';
  sidebar.style.display = 'block';
  content.style.marginLeft = '320px';
});
menuButtonBurger.addEventListener('click', function () {
  sidebar.style.width = '0px';
  sidebar.style.display = 'none';
  content.style.marginLeft = '0px';
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
var swiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false
  }
};
var swiper1 = new _bundle["default"]('.brends-swiper', _objectSpread({}, swiperOptions, {
  spaceBetween: 16,
  pagination: {
    el: '.brends-swiper .brends-paginat',
    clickable: true
  }
}));
var swiper2 = new _bundle["default"]('.tehnika-swiper', _objectSpread({}, swiperOptions, {
  spaceBetween: 16,
  pagination: {
    el: '.tehnika-swiper .tehnika-paginat',
    clickable: true
  }
}));
var swiper3 = new _bundle["default"]('.cens-swiper', _objectSpread({}, swiperOptions, {
  spaceBetween: 16,
  pagination: {
    el: '.cens-swiper .cens-paginat',
    clickable: true
  }
}));