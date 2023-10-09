function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a img
  const img = document.querySelector("#profile img")

  // substituir a img
  if(html.classList.contains('light')) {
    // se tiver light mode, add a img
     img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não tiver light mode, manter a img
     img.setAttribute("src", "./assets/avatar.png")
  }

}
