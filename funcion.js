function addTask() {
  var taskInput = document.getElementById('task');
  var taskText = taskInput.value.trim();

  if (taskText !== '') {
      var taskList = document.getElementById('task-list');
      var li = document.createElement('li');
      li.textContent = taskText;

      // Agregar un botón de completado a la tarea
      var completeButton = document.createElement('button');
      completeButton.textContent = 'Completado';
      completeButton.className = 'complete-button';
      li.appendChild(completeButton);

      // Escuchar eventos de clic en el botón de completado
      completeButton.addEventListener('click', function() {
          completeTask(li);
      });

      taskList.appendChild(li);
      taskInput.value = '';
  } else {
      alert('Por favor ingresa una tarea válida.');
  }
}

function completeTask(task) {
  // Mover la tarea completada desde la lista de tareas pendientes a la lista de tareas completadas
  var completedTasks = document.getElementById('completed-tasks');
  task.removeChild(task.querySelector('.complete-button')); // Remover el botón de completado
  completedTasks.appendChild(task);
} 
