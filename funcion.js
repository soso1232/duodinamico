document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(text) {
      const taskItem = document.createElement('li');
      taskItem.textContent = text;
      taskList.appendChild(taskItem);
    }
  });
  