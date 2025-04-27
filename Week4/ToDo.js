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
let idCounter = 0;
let currentPage = 1;
const tasksPerPage = 10;
let filteredTodos = [];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Add some sample tasks
  for (let i = 0; i < 30; i++) {
    todos.push({
      id: ++idCounter,
      text: `Sample Task ${i + 1}`,
      checked: Math.random() < 0.3,
    });
  }

  // Initialize filteredTodos with all todos
  filteredTodos = [...todos];
  renderTodos();
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

  currentPage = 1; // Reset to first page when searching
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
  handleSearch(); // Re-apply search/filter after adding/updating
}

function addTodo(text) {
  const newTodo = {
    id: ++idCounter,
    text: text,
    checked: false,
  };

  todos.push(newTodo);

  // After adding, reapply filters and reset to first page
  handleSearch();
}

function updateTodo(text) {
  todos = todos.map((todo) =>
    todo.id === currentEditingId ? { ...todo, text: text } : todo
  );
  actionBtn.textContent = "Add";
  currentEditingId = null;
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  if (currentEditingId === id) {
    actionBtn.textContent = "Add";
    currentEditingId = null;
  }
}

function toggleCheck(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        checked: !todo.checked,
      };
    }
    return todo;
  });

  // Re-apply current filters and render
  handleSearch();
}

function renderTodos() {
  // Clear the current list
  todoList.innerHTML = "";

  // If no tasks exist at all
  if (todos.length === 0) {
    todoList.innerHTML = "<li>No tasks found. Add your first task!</li>";
    updatePaginationInfo();
    return;
  }

  // If filtered results are empty but todos exist
  if (filteredTodos.length === 0) {
    todoList.innerHTML = "<li>No tasks match your search criteria</li>";
    updatePaginationInfo();
    return;
  }

  // Calculate pagination
  const start = (currentPage - 1) * tasksPerPage;
  const end = start + tasksPerPage;
  const currentTasks = filteredTodos.slice(start, end);

  // Render each task
  currentTasks.forEach((todo) => {
    const li = document.createElement("li");
    const isCompleted = todo.checked;

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isCompleted;
    checkbox.addEventListener("change", () => toggleCheck(todo.id));

    // Todo Text
    const span = document.createElement("span");
    span.className = `todo-text ${isCompleted ? "completed" : ""}`;
    span.textContent = todo.text;

    // Task Status
    const spanStatus = document.createElement("span");
    spanStatus.className = `todo-status ${isCompleted ? "completed" : ""}`;
    spanStatus.textContent = isCompleted ? "completed" : "uncompleted";

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.className = "editBtn";
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
      handleSearch();
    });

    // Assemble elements
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

  // Disable/enable pagination buttons as needed
  firstBtn.disabled = currentPage === 1;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;
  lastBtn.disabled = currentPage === totalPages || totalPages === 0;
}
