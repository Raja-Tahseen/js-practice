//--Problem - - Create Pagination
//1 - - By default display first 10 records.
//2 - - On Clicking "Next" Display 10 records from the current last record
//3 - - On Clicking "Prev" Display 10 previous records from the current first record
//4 - - On clicking "First"  display first ten records
//5 - - On clicking "Last"  display last ten records
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
  alert("ss");
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
    console.log(todo);
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
renderTodos();
