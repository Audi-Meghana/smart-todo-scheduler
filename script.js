function addTask() {
  const input = document.getElementById("taskInput");
  const dateInput = document.getElementById("taskDate");
  const timeInput = document.getElementById("taskTime");

  const taskText = input.value.trim();
  const taskDate = dateInput.value;
  const taskTime = timeInput.value;

  if (taskText === "" || taskDate === "") {
    alert("Please enter both task and date.");
    return;
  }

  const groupId = "group-" + taskDate;

  let taskGroup = document.getElementById(groupId);
  if (!taskGroup) {
    // Create new date group
    taskGroup = document.createElement("div");
    taskGroup.id = groupId;

    const heading = document.createElement("div");
    heading.className = "task-date";

    const readableDate = new Date(taskDate).toDateString();
    heading.textContent = `📅 ${readableDate}`;

    taskGroup.appendChild(heading);
    document.getElementById("allTasks").appendChild(taskGroup);
  }

  // Create task item
  const li = document.createElement("div");
  li.className = "task-item";
  li.innerHTML = `
    <span>${taskText} 
      ${taskTime ? `<small style="font-size: 12px; color: #888;">@ ${taskTime}</small>` : ''}
    </span>
    <button class="delete-btn" onclick="this.parentElement.remove()">X</button>
  `;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  taskGroup.appendChild(li);
  input.value = "";
  timeInput.value = "";
}
