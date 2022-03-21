const navbar = document.querySelector('.navbar')
const screens = document.querySelector('.screens')
const downbtn = document.querySelector('.downbtn')
const slidesCount = screens.querySelectorAll('.screen').length
const container = document.querySelector('.container')
const lineProrgress = document.querySelector('.line-progress')
const progressNow = document.querySelector('.line-progress-now')
console.log(lineProrgress.height)

let activeSlideIndex = 0

screens.style.top = `${(activeSlideIndex) * 100}vh`

navbar.addEventListener('click', (event) => {
	if (event.target.classList.contains('navlink')) {
		const activeLink = document.querySelector('.active')
		if (activeLink) {
			activeLink.classList.remove('active')
		}
		event.target.classList.add('active')
	}
})

downbtn.addEventListener('click', () => {
	changeSlide('down')
})

window.addEventListener('scroll', (event) => {
	event.preventDefault()
	let k = scrollY
	// progressNow.style.transform = `translateY(${scrollY}px)`
	console.log(k)
	changeSlide()
})

const changeSlide = (where, pixels) => {
	if (where === 'down') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	}
	if (where === 'up') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}

	progressNow.style.transform = `translateY(+${activeSlideIndex * 18}px)`
	screens.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
}

