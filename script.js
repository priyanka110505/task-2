const taskList = document.getElementById('tasks-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.innerText = newTask;
    listItem.addEventListener('click', () => {
      listItem.classList.toggle('completed');
    });
    // Add buttons for delete and other features here
    taskList.appendChild(listItem);
    newTaskInput.value = '';
  }
});
