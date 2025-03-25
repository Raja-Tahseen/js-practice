const todoInput = document.getElementById("todoInput");
const todoInputSearch = document.getElementById("todoInputSearch");
const actionBtn = document.getElementById("actionBtn");
const todoList = document.getElementById("todoList");
let currentEditingId = null;
let todos = [];
let idCounter = 0;

todoInputSearch.addEventListener("search", handleSearch); //Event is called when user click 'X' inside search input box
function handleSearch(event) {
  //alert("qwerty");
  let filter, li, span, txtValue;
  filter = todoInputSearch.value.toUpperCase();
  li = todoList.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span")[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

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
  renderTodos();
}

function addTodo(text) {
  todos.push({
    id: ++idCounter,
    text: text,
    checked: false,
  });
  console.log(todos);
}

//map() returns a new array by applying a function to each element of the original array.
//spread operator (...) copies all properties from the todo object into the new object. Then, the text property is updated new value passed.
function updateTodo(text) {
  todos = todos.map(
    (todo) => (todo.id === currentEditingId ? { ...todo, text } : todo)
    //(todo) => todo.id === currentEditingId ? { ...todo, text: text, id: 69, checked: true } : todo
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
}

function toggleCheck(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, checked: !todo.checked } : todo
  );
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.checked;
    checkbox.addEventListener("change", () => {
      toggleCheck(todo.id);
      renderTodos();
    });

    // Todo Text
    const span = document.createElement("span");
    span.className = `todo-text ${todo.checked ? "completed" : ""}`;
    span.textContent = todo.text;

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
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
      renderTodos();
    });

    // Assemble elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}
