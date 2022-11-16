const navBtn = document.querySelector('.nav__btn')
const mobileNav = document.querySelector('.nav__mobile-list')
const allNavItems = document.querySelectorAll('.nav__mobile-link')

const handleNav = () => {
	allNavItems.forEach(item => {
		allNavItems.forEach(navItem => {
			navItem.addEventListener('click', () => {
				mobileNav.classList.remove('show-menu')
			})
		})
	})
	mobileNav.classList.toggle('show-menu')
}

navBtn.addEventListener('click', handleNav)
