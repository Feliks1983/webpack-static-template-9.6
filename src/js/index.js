import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import '../scss/style.scss'

const readmore = document.querySelector('.readmore')
const readmoreText = document.querySelector('.readmore__text')

const tehnikaReadmore = document.querySelector('.tehnika-readmore')
const tehnikaBlock = document.querySelectorAll('.tehnika-block')

const tehnikaReadmoreText = document.querySelector('.tehnika-readmore__text')

const menuButtonBurger = document.querySelector('.menu__button__burger')
const menuButtonBurgerMenu = document.querySelector(
  '.menu__button__burger-menu'
)
const menuButton = document.querySelector('.menu__button')

const menuList = document.querySelector('.menu__list')
const mainSidebar = document.querySelector('.main-sidebar')
const menuItem = document.querySelector('.menu__item')
const menuSpans = document.querySelectorAll('.menu__item__span')

const mainSectionButtons = document.querySelector('.main-section__buttons')
const btnActive = document.querySelectorAll('.button-active')

const buttonBurgerBlock = document.querySelectorAll('.button__burger-block')
const buttonBurgerNone = document.querySelectorAll('.button__burger-none')

const content = document.querySelector('.content')
const cardsANone = document.querySelectorAll('.cards__a-none')

menuButtonBurger.addEventListener('click', function () {
  if (menuList.style.display === 'block') {
    menuList.style.display = 'none'
  } else {
    menuList.style.display = 'block'
  }
})

menuItem.addEventListener('click', function (event) {
  if (event.target.classList.contains('menu__item__span')) {
    menuSpans.forEach((span) => span.classList.remove('active-span'))
    event.target.classList.add('active-span')
  }
})

const child = menuItem.children[1]

const width = window.innerWidth

child.addEventListener('click', function () {
  if (width <= 1440) {
    const isHidden =
      window.getComputedStyle(buttonBurgerNone[0]).display === 'none'

    if (!isHidden) {
      buttonBurgerNone.forEach((el) => (el.style.display = 'none'))
      buttonBurgerBlock.forEach((el) => (el.style.display = 'block'))
    } else {
      buttonBurgerNone.forEach((el) => (el.style.display = 'block'))
      buttonBurgerBlock.forEach((el) => (el.style.display = 'none'))
    }
  }
})

child.addEventListener('click', function () {
  if (window.innerWidth >= 1440) {
    if (content.style.display === 'block') {
      content.style.display = 'none'
    } else {
      content.style.display = 'block'
    }
  }
})

menuButtonBurgerMenu.addEventListener('click', function () {
  if (
    mainSidebar.style.display === 'none' ||
    menuList.style.display === 'block'
  ) {
    mainSidebar.style.display = 'block'
    menuList.style.display = 'none'
  } else {
    mainSidebar.style.display = 'none'
    menuList.style.display = 'block'
  }
})

mainSectionButtons.addEventListener('click', function (event) {
  const btnlist = event.target.closest('.button-active')
  if (btnlist) {
    btnActive.forEach((btn) => btn.classList.remove('active'))
    btnlist.classList.add('active')
  }
})

readmore.addEventListener('click', function () {
  const isHidden = cardsANone[0].style.display === 'none'

  cardsANone.forEach((a) => {
    a.style.display = isHidden ? 'block' : 'none'
  })

  readmoreText.innerHTML = isHidden ? 'Скрыть' : 'Показать все'
})

tehnikaReadmore.addEventListener('click', function () {
  const isHidden = tehnikaBlock[0].style.display === 'none'

  tehnikaBlock.forEach((a) => {
    a.style.display = isHidden ? 'block' : 'none'
  })

  tehnikaReadmoreText.innerHTML = isHidden ? 'Скрыть' : 'Показать все'
})

const swiper = new Swiper('.brends-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

const swiper2 = new Swiper('.tehnika-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

const swiper3 = new Swiper('.cens-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
