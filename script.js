function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText === "") return;

  const li = document.createElement("li");

  // Checkbox to mark task complete
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    label.classList.toggle("completed", checkbox.checked);
  });

  // Label to show task text
  const label = document.createElement("span");
  label.textContent = taskText;
  label.className = "task-label";

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = ""; // Clear input
}
