const navBtn = document.querySelector('.nav__btn')
const mobileNav = document.querySelector('.nav__mobile-list')
const allNavItems = document.querySelectorAll('.nav__mobile-link')
const dropdownMenuFirst = document.querySelector('.nav__dropdown-list--first')
const dropdownMenuSecond = document.querySelector('.nav__dropdown-list--second')
const dropdownBtnFirst = document.querySelector('.nav__mobile-btn--first')
const dropdownBtnSecond = document.querySelector('.nav__mobile-btn--second')
const sliderBox = document.querySelector('.header__box')
const slidesImg = sliderBox.getElementsByTagName('img')
let i = 0
function nextSlide() {
	slidesImg[i].classList.remove('header__img-active')
	i = (i + 1) % slidesImg.length
	slidesImg[i].classList.add('header__img-active')
}
function previousSlide() {
	slidesImg[i].classList.remove('header__img-active')
	i = (i - 1 + slidesImg.length) % slidesImg.length
	slidesImg[i].classList.add('header__img-active')
}

const handleNav = () => {
	mobileNav.classList.toggle('show-menu')
	if (mobileNav.classList.contains('show-menu')) {
		navBtn.classList.add('btn-active')
	} else {
		navBtn.classList.remove('btn-active')
	}
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			if (mobileNav.classList.contains('show-menu')) {
				mobileNav.classList.remove('show-menu')
				navBtn.classList.remove('btn-active')
			}
		})
	})
}

navBtn.addEventListener('click', handleNav)
dropdownBtnFirst.addEventListener('click', () => {
	dropdownMenuFirst.classList.toggle('show-dropdown')
})
dropdownBtnSecond.addEventListener('click', () => {
	dropdownMenuSecond.classList.toggle('show-dropdown')
})
