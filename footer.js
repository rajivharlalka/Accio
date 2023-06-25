function setFooterPosition() {
  const body = document.body
  const html = document.documentElement
  const footer = document.querySelector('footer')

  const windowHeight = window.innerHeight
  const bodyHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  )

  console.log(bodyHeight, windowHeight)

  if (bodyHeight < windowHeight) {
    footer.style.position = 'fixed'
    footer.style.bottom = '10'
  } else {
    footer.style.position = 'static'
  }
}

// call setFooterPosition() on load and on resize
window.addEventListener('load', setFooterPosition)
window.addEventListener('resize', setFooterPosition)
