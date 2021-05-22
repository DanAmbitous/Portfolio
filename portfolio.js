const browser = document.querySelector('#browser')

browser.addEventListener('dragstart', dragStart)

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

const containers = Array.from(document.querySelectorAll('.app-container'))

containers.forEach(container => {
  container.addEventListener('dragenter', dragEnter)
  container.addEventListener('dragover', dragOver);
  container.addEventListener('dragleave', dragLeave);
  container.addEventListener('drop', drop);
})

function dragEnter(event) {
  event.preventDefault()
  event.target.classList.add('drag-over')
}

function dragOver(event) {
  event.preventDefault()
  event.target.classList.add('drag-over')
}

function dragLeave(event) {
  event.target.classList.remove('drag-over')
}

function drop(event) {
  event.target.classList.remove('drag-over');

  const id = event.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  event.target.appendChild(draggable);

  draggable.classList.remove('hide');
}