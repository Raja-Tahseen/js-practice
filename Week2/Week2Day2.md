## 1. Create and append a HTML button through JavaScript

## 2. Take user's input and add a content to a list item when button is clicked

## 3. Also add an additional delete button to list item. Clicking on delete should remove the list from DOM

## 4. Question4. Also create a seperate button that deletes all the list items.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // Create input element
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter List Item";

  // Create Add button
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";

  // Create Delete All button
  const deleteAllBtn = document.createElement("button");
  deleteAllBtn.textContent = "Delete All";

  // Create list container
  const list = document.createElement("ol");

  // Add elements to DOM
  document.body.append(input, addBtn, deleteAllBtn, list);

  // Add item functionality
  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text) {
      const li = document.createElement("li");

      // Add text and delete button to list item
      li.innerHTML = `
                        ${text}
                        <button class="delete">Delete</button>
                    `;

      // Add individual delete functionality
      li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
      });

      list.appendChild(li);
      input.value = ""; // Clear input
    }
  });

  // Delete All functionality
  deleteAllBtn.addEventListener("click", () => {
    list.innerHTML = "";
  });
});
```
