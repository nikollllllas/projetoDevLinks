function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector('#profile img')
  
  html.classList.toggle('light')

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Baby Nikollas (3 years) sitted in a chair while show "peace and love" with the hand and fingers. Wearing a gray pajamas')
  } else {
    img.setAttribute('src', './assets/avatar-dark.png')
    img.setAttribute('alt', "Photo in front of a mirror, Nikollas is wearing a white t-shirt and a dark blue shirt over, white background."
    )
  }
}

