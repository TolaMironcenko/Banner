const navbar = document.querySelector('.navbar')

navbar.addEventListener('click', (event) => {
	if (event.target.classList.contains('navlink')) {
		// removeActiveClasses()
		const activeLink = document.querySelector('.active')
		if (activeLink) {
			activeLink.classList.remove('active')
		}
		event.target.classList.add('active')
	}
})