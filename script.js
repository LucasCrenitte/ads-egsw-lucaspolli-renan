document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      taskList.appendChild(li);

      taskInput.value = "";
    }
  });
});
