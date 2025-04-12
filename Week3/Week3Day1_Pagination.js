//--Problem - - Create Pagination
//1 - - By default display first 10 records.
// ---> Clear existing content in 'todoList' to start with fresh state.
// ---> Calculate starting index e.g. Page 2 with tasksPerPage = 10 -> (2-1)*10 = 10.   Page 3 with tasksPerPage = 10 -> (3-1)*10 = 20.
// ---> Calculate end index e.g. Page 2 with tasksPerPage = 10 -> 10 + 10 = 20.   Page 3 with tasksPerPage = 10 -> 20 + 10 = 30.
// ---> Next simply extract tasks for the current page using todos.slice(start, end) [Returns items from index start to end-1]
// ---> Then using foeach loop on extracted array objects, render tasks on screen as done in previuos assignment.

//2 - - On Clicking "Next" Display 10 records from the current last record
// ---> Prevent overflow (going beyond last page) by dynamically checking total pages on each click.

//3 - - On Clicking "Prev" Display 10 previous records from the current first record
// ---> Prevent underflow (going below page 1) by dynamically checking -> Math.max(1, currentPage - 1)  [Page number never goes below 1 after decrement]

//4 - - On clicking "First"  display first ten records
// ---> Sets currentPage to 1 unconditionally and calls renderTodos();

//5 - - On clicking "Last"  display last ten records
// ---> Calculate the last page dynamically by -> Math.ceil(todos.length / tasksPerPage)
// ---> Example: For 100 tasks with 10 per page → page 10

//6 - - Make number of records per page 10, 20, 50, 100

// DOM Elements
const firstBtn = document.getElementById("first");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const lastBtn = document.getElementById("last");
const todoList = document.getElementById("todoList");

// Variables
let currentPage = 1;
let tasksPerPage = 10;

let todos = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  text: `Task ${i + 1}`,
  checked: Math.random() < 0.3,
}));
//Array.from()is a static method that creates a new Array instance from
// 1 .  Array-like objects (objects with length and indexed properties)
// 2 .  Iterable objects (like Map, Set, String, etc.)
// -- OR old way to call generateTasks() func.

// Helping Functions

function generateTasks() {
  const tasks = [];
  for (let t = 0; t < 100; t++) {
    todos.push({
      id: i + 1,
      text: `Task ${i + 1}`,
      checked: Math.random() < 0.3,
    });
  }
  return tasks;
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
  renderTodos();
}

// Renders Tasks for the current page according to the page size
function renderTodos() {
  todoList.innerHTML = "";
  const start = (currentPage - 1) * tasksPerPage;
  const end = start + tasksPerPage;
  const currentTasks = todos.slice(start, end);

  currentTasks.forEach((todo) => {
    //console.log(todo);
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

// Event listeners
firstBtn.addEventListener("click", () => {
  currentPage = 1;
  renderTodos();
});

prevBtn.addEventListener("click", () => {
  currentPage = Math.max(1, currentPage - 1); //Page number never goes below 1, safely decerements current page
  renderTodos();
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(todos.length / tasksPerPage); //calculates total pages
  currentPage = Math.min(totalPages, currentPage + 1); //Ensures page number never exceeds maximum & increments safely.
  renderTodos();
});

lastBtn.addEventListener("click", () => {
  currentPage = Math.ceil(todos.length / tasksPerPage);
  renderTodos();
});

renderTodos();
