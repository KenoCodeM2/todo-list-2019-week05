// Add an event listener to the "Create Task" button
document.querySelector('.CreateTask').addEventListener('click', createNewTask);

// Add an event listener to the "Delete Task" button
document.querySelector('.DeleteTask').addEventListener('click', deleteAllTasks);

// Get references to the input box and the unordered list
const inputBox = document.getElementById('input-box');
const todoList = document.querySelector('.order');

function createNewTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something to add a new task!");
    } else {
        // Create a list item (li)
        const Li = document.createElement('li');

        // Set the text of the list item to the value of the input box
        Li.textContent = inputBox.value;

        // Append the list item to the unordered list
        todoList.appendChild(Li);

        // Clear the input box after adding the task
        inputBox.value = '';
    }
}

function deleteAllTasks() {
    // Remove all child elements from the unordered list
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}
