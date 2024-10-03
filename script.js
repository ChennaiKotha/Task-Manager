document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return; // Do nothing if input is empty

    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.className = 'flex items-center justify-between bg-white p-2 rounded mb-2 shadow';
    
    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.className = 'flex-grow cursor-pointer';

    // Add click event to mark task as complete
    taskSpan.addEventListener('click', function() {
        taskSpan.classList.toggle('line-through');
    });

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'bg-red-600 text-white p-1 rounded';
    
    // Add click event to delete the task
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    // Append the text and delete button to the list item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    
    // Append the list item to the task list
    document.getElementById('taskList').appendChild(taskItem);
    
    // Clear the input field
    taskInput.value = '';
});
