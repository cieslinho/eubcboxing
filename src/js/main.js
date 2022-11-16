const navBtn = document.querySelector('.nav__btn')
const mobileNav = document.querySelector('.nav__mobile-list')
const allNavItems = document.querySelectorAll('.nav__mobile-link')

const handleNav = () => {
	mobileNav.classList.toggle('show-menu')
	if (mobileNav.classList.contains('show-menu')) {
		navBtn.classList.add('btn-active')
	} else {
		navBtn.classList.remove('btn-active')
	}
	// navBtn.classList.toggle('btn-active')
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
