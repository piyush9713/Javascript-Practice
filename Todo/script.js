const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const addTask = () => {
  const text = taskInput.value.trim();
  if (text === "") return;
  todos.push({ id: Date.now(), text: text, completed: false });
  taskInput.value = "";
  list(todos);
};

const completeTask = (index) => {
  todos[index].completed = !todos[index].completed;
  list(todos);
  console.log(todos);
};

const editTask = (index) => {
  const text = todos[index].text;
  taskInput.value = text;
  deleteTask(index);
  list(todos);
};

const deleteTask = (index) => {
  todos.splice(index, 1);
  list(todos);
};

const list = (todos) => {
  taskList.innerHTML = "";
  todos.map((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="task-item">
        <input onclick="completeTask(${index})" type="checkbox" ${
      todo.completed ? "checked" : ""
    }>
        <span ${
          todo.completed ? "style='text-decoration: line-through'" : ""
        }>${todo.text}</span>
        <button class="edit" onclick="editTask(${index})">Edit</button>
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos);
};

window.onload = () => {
  list(todos);
};

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
