const navbar = document.querySelector('.navbar')
const navBtn = document.querySelector('#navbarNavBtn')
const navNav = document.querySelector('#navbarNav')
const navLinks = document.getElementsByClassName('nav-link')
const body=document.querySelector('body')

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    if (this.classList.contains('dropdown-toggle')) {
      return
    }

    let current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')

    this.className += ' active'
    navNav.classList.toggle('open')
  })
}

//navbar show and hide functionality on mobile
navBtn.addEventListener('click', () => {
  navNav.classList.toggle('open')
  body.classList.toggle('open')
})
