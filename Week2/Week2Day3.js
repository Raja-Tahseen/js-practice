const todoInput = document.getElementById("todoInput");
const actionBtn = document.getElementById("actionBtn");
const todoList = document.getElementById("todoList");
let currentEditingItem = null;

actionBtn.addEventListener("click", handleAction);

function handleAction() {
  const text = todoInput.value.trim();
  if (!text) return;

  if (actionBtn.textContent === "Add") {
    addTodoItem(text);
  } else {
    updateTodoItem(text);
  }
  todoInput.value = "";
}

function addTodoItem(text) {
  const li = document.createElement("li");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    span.classList.toggle("completed", this.checked);
  });

  // Create text span
  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  // Create edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    todoInput.value = span.textContent;
    actionBtn.textContent = "Update";
    currentEditingItem = span;
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  // Assemble elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}

function updateTodoItem(text) {
  if (currentEditingItem) {
    currentEditingItem.textContent = text;
    actionBtn.textContent = "Add";
    currentEditingItem = null;
  }
}
