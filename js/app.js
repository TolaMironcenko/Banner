const navbar = document.querySelector('.navbar')

const removeActiveClasses = () => {
	const navlinks = document.querySelector('.navbar').querySelectorAll('.navlink')
	navlinks.forEach((navlink) => {
		navlink.classList.remove('active')
	})
}

navbar.addEventListener('click', (event) => {
	if (event.target.classList.contains('navlink')) {
		removeActiveClasses()
		event.target.classList.add('active')
	}
})