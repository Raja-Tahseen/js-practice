const todoInput = document.getElementById("todoInput");
const todoInputSearch = document.getElementById("todoInputSearch");
const actionBtn = document.getElementById("actionBtn");
const todoList = document.getElementById("todoList");
const taskStatus = document.getElementById("status");
const searchBtn = document.getElementById("searchBtn");
let currentEditingId = null;
let idCounter = 0;
let todos = [];
let searchToDo = [];

todoInputSearch.addEventListener("search", handleSearch); //Event is called when user click 'X' inside search input box

function handleSearch(event) {
  renderTodos(todos);
}

searchBtn.onclick = (event) => {
  searchToDo = todos.filter((t) => t.text.includes(todoInputSearch.value));
  if (taskStatus.value === "Completed") {
    searchToDo = searchToDo.filter((t) => t.checked === true);
  }
  if (taskStatus.value === "Uncompleted") {
    searchToDo = searchToDo.filter((t) => t.checked === false);
  }
  renderTodos(searchToDo);
};

actionBtn.addEventListener("click", handleAction);

function handleAction() {
  const text = todoInput.value.trim();
  if (!text) return;

  if (actionBtn.textContent === "Add") {
    addTodo(text);
  } else {
    updateTodo(text);
  }
  todoInput.value = "";
  renderTodos(todos);
}

const getRandomId = () => {
  return Date.now();
};

function addTodo(text) {
  todos.push({
    id: getRandomId(),
    text: text,
    // taskStatus: "uncompleted",
    checked: false,
  });
}

//map() returns a new array by applying a function to each element of the original array.
//spread operator (...) copies all properties from the todo object into the new object. Then, the text property is updated new value passed.
function updateTodo(text) {
  todos = todos.map((todo) =>
    todo.id === currentEditingId ? { ...todo, text: text } : todo
  );
  actionBtn.textContent = "Add";
  currentEditingId = null;
  console.log(todos);
}

//filter() returns a new array with all elements that satisfy the condition.
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  if (currentEditingId === id) {
    actionBtn.textContent = "Add";
    currentEditingId = null;
  }
  renderTodos(todos);
}

function toggleCheck(id) {
  todos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          checked: !todo.checked,
          // taskStatus: todo.checked ? "uncompleted" : "completed",
        }
      : todo
  );
  renderTodos(todos);
}

function renderTodos(tasks) {
  todoList.innerHTML = "";

  tasks.forEach((todo) => {
    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.checked;
    checkbox.addEventListener("change", () => {
      toggleCheck(todo.id);
    });

    // Todo Text
    const span = document.createElement("span");
    span.className = `todo-text ${todo.checked ? "completed" : ""}`;
    span.textContent = todo.text;

    // Task Status
    const spanStatus = document.createElement("span");
    spanStatus.className = `todo-status ${todo.checked ? "completed" : ""}`;
    spanStatus.textContent = todo.checked ? "Completed" : "Uncompleted";

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";
    editBtn.addEventListener("click", () => {
      todoInput.value = todo.text;
      actionBtn.textContent = "Update";
      currentEditingId = todo.id;
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    // Assemble elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(spanStatus);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}
