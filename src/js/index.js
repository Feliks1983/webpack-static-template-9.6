import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import '../scss/style.scss'

const readmore = document.querySelector('.readmore')
const readmoreText = document.querySelector('.readmore-text')
const readmoreImg = document.querySelector('.readmore-img')
const tehnikaReadmoreImg = document.querySelector('.tehnika-readmore__img')
const tehnikaReadmore = document.querySelector('.tehnika-readmore')
const tehnikaBlock = document.querySelectorAll('.tehnika-block')
const tehnikaReadmoreText = document.querySelector('.tehnika-readmore__text')
const cardsANone = document.querySelectorAll('.cards__a-none')
const burgerMenu = document.querySelector('.burger-menu')
const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')
const menuButtonBurger = document.querySelector('.menu__button__burger')

burgerMenu.addEventListener('click', function () {
  if (window.innerWidth >= 768) {
    sidebar.style.width = '320px'
    sidebar.style.display = 'block'
    content.style.marginLeft = '0px'
  }
})

menuButtonBurger.addEventListener('click', function () {
  sidebar.style.display = 'none'
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 1440) {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.removeProperty('display')
  }
})

readmore.addEventListener('click', function () {
  const isHidden = cardsANone[0].style.display === 'none'

  cardsANone.forEach((a) => {
    a.style.display = isHidden ? 'block' : 'none'
  })

  readmoreText.innerHTML = isHidden ? 'Скрыть' : 'Показать все'
  if (readmoreText.innerHTML === 'Скрыть') {
    readmoreImg.style.transform = 'rotate(0deg)'
  } else {
    readmoreText.innerHTML = 'Показать все'
    readmoreImg.style.transform = 'rotate(180deg)'
  }
})

tehnikaReadmore.addEventListener('click', function () {
  const isHidden = tehnikaBlock[0].style.display === 'none'

  tehnikaBlock.forEach((a) => {
    a.style.display = isHidden ? 'block' : 'none'
  })

  tehnikaReadmoreText.innerHTML = isHidden ? 'Скрыть' : 'Показать все'
  if (tehnikaReadmoreText.innerHTML === 'Скрыть') {
    tehnikaReadmoreImg.style.transform = 'rotate(0deg)'
  } else {
    tehnikaReadmoreText.innerHTML = 'Показать все'
    tehnikaReadmoreImg.style.transform = 'rotate(180deg)'
  }
})

const swiper1 = new Swiper('.brends-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.brends-paginat',
    clickable: true
  }
})

const swiper2 = new Swiper('.tehnika-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.tehnika-paginat',
    clickable: true
  }
})

const swiper3 = new Swiper('.cens-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.cens-paginat',
    clickable: true
  }
})
