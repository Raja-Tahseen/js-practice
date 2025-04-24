// DOM Elements
const todoInput = document.getElementById("todoInput");
const todoInputSearch = document.getElementById("todoInputSearch");
const actionBtn = document.getElementById("actionBtn");
const todoList = document.getElementById("todoList");
const statusFilter = document.getElementById("statusFilter");
const searchBtn = document.getElementById("searchBtn");
const firstBtn = document.getElementById("first");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const lastBtn = document.getElementById("last");
const pageInfo = document.getElementById("pageInfo");

// Variables
let currentEditingId = null;
let todos = [];
let currentPage = 1;
const tasksPerPage = 10;
let filteredTodos = [];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      todos = data.map((todo) => ({
        id: todo.id,
        text: todo.title,
        checked: todo.completed,
      }));
      filteredTodos = [...todos];
      renderTodos();
    })
    .catch((error) => console.error("Error fetching todos:", error));
});

// Event Listeners
searchBtn.addEventListener("click", handleSearch);
actionBtn.addEventListener("click", handleAction);
firstBtn.addEventListener("click", () => {
  currentPage = 1;
  renderTodos();
});
prevBtn.addEventListener("click", () => {
  currentPage = Math.max(1, currentPage - 1);
  renderTodos();
});
nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredTodos.length / tasksPerPage);
  currentPage = Math.min(totalPages, currentPage + 1);
  renderTodos();
});
lastBtn.addEventListener("click", () => {
  currentPage = Math.ceil(filteredTodos.length / tasksPerPage);
  renderTodos();
});

// Functions
function handleSearch() {
  const searchText = todoInputSearch.value.toUpperCase();
  const filterStatus = statusFilter.value;

  filteredTodos = todos.filter((todo) => {
    const matchesText =
      searchText === "" || todo.text.toUpperCase().includes(searchText);
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.checked) ||
      (filterStatus === "uncompleted" && !todo.checked);
    return matchesText && matchesStatus;
  });

  currentPage = 1;
  renderTodos();
}

function handleAction() {
  const text = todoInput.value.trim();
  if (!text) return;

  if (actionBtn.textContent === "Add") {
    addTodo(text);
  } else {
    updateTodo(text);
  }
  todoInput.value = "";
}

function renderTodos() {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = "<li>Loading tasks...</li>";
    return;
  }

  if (filteredTodos.length === 0) {
    todoList.innerHTML = "<li>No tasks match your search criteria</li>";
    updatePaginationInfo();
    return;
  }

  const start = (currentPage - 1) * tasksPerPage;
  const end = start + tasksPerPage;
  const currentTasks = filteredTodos.slice(start, end);

  currentTasks.forEach((todo) => {
    const li = document.createElement("li");
    const isCompleted = todo.checked;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isCompleted;
    checkbox.addEventListener("change", () => toggleCheck(todo.id));

    const span = document.createElement("span");
    span.className = `todo-text ${isCompleted ? "completed" : ""}`;
    span.textContent = todo.text;

    const spanStatus = document.createElement("span");
    spanStatus.className = `todo-status ${isCompleted ? "completed" : ""}`;
    spanStatus.textContent = isCompleted ? "completed" : "uncompleted";

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      todoInput.value = todo.text;
      actionBtn.textContent = "Update";
      currentEditingId = todo.id;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(spanStatus);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });

  updatePaginationInfo();
}

function updatePaginationInfo() {
  const totalPages = Math.ceil(filteredTodos.length / tasksPerPage);
  pageInfo.textContent = `Page ${currentPage} of ${totalPages} (${filteredTodos.length} tasks)`;

  firstBtn.disabled = currentPage === 1;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;
  lastBtn.disabled = currentPage === totalPages || totalPages === 0;
}
