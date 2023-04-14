document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let task = document.querySelector('#new-task-description').value
      buildToDo(task);
      form.reset();
    })
});

function buildToDo(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  let edt = document.createElement('button');
  edt.addEventListener('click', handleEdit);
  btn.addEventListener('click', handleDelete);
  edt.style.fontSize = '7px'
  edt.textContent = 'Edit'
  btn.style.fontSize = '10px'
  btn.style.fontWeight = 'bold'
  btn.textContent = 'x '
  li.textContent = `${todo} `
  li.appendChild(btn)
  li.appendChild(edt)
  document.querySelector('#tasks').appendChild(li);
};

function handleDelete(e) {
  e.target.parentNode.remove();
}

function handleEdit(e) {
  const listItem = e.target.parentNode;
  const oldText = listItem.firstChild.textContent;
  const newText = prompt("Enter new todo text:", oldText);

  if (newText !== null) {
    listItem.firstChild.textContent = newText;
  }};