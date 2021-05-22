let viewPortArea = window.visualViewport.width * window.visualViewport.height

console.log(viewPortArea)

let appContainerArea = 0

function creatingDivElement() {
  const divElement = document.createElement('div')
  divElement.classList.add("app-container")
  document.querySelector('.page-container').append(divElement)

  appContainerArea += 10000
}
