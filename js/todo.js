const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
//Save
let toDos = [];

function saveToDos() {
  //setItem(key, value)
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//delete Todo
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  //변경된 array를 다시 저장해줘야되니까
  saveToDos();
}
//ToDo를 그리는 역할(object(text, id)를 가지고 출발)
function paintToDo(newTodo) {
  const li = document.createElement('li');
  //각 li의 id를 newTodo.id로 만들면 각 list는 각각의 id를 가지게 됨.
  li.id = newTodo.id;
  //todolist span
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  //delete button
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.style.marginRight = '30px';
  li.style.marginBottom = '5px';
  //ul에 li넣기
  toDoList.appendChild(li);
}
//Input을 newTodo에 넣고 newTodo를 가지고 list에 넣기
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  //index를 만들기 위해 newTodo와 id를 Object로 만듦
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

//Road Todos
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos); //이건 그냥 string
if (savedToDos) {
  const parsedTodos = JSON.parse(savedToDos);
  //시작할 때마다 빈 array니까 let으로 바꾸고(array 업데이트할거임), 이전 array들을 빈 array로 넣어줄 거임
  toDos = parsedTodos;
  console.log(parsedTodos); // 이건 array
  parsedTodos.forEach(paintToDo);
}
