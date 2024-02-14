// Getting the root element as root.
const root = document.querySelector(".root");

// Creating a input body for user input
const inputBody = document.createElement("div");
inputBody.classList.add("inputBody");
root.appendChild(inputBody)

// inserting add box
const input = document.createElement("input");
input.classList.add("userInput")
input.setAttribute("href","text")
inputBody.appendChild(input)

//Creating Add Task button  
const addTaskButton = document.createElement("button");
addTaskButton.classList.add("addTaskButton");
addTaskButton.textContent="Add Task"
inputBody.appendChild(addTaskButton)

// Creating body for tasks list items 
const listItemsBody = document.createElement("div");
root.appendChild(listItemsBody)


// Creating array for storing tasks list all items
const tasks =[]

// Event after clicking on Add Task Button
addTaskButton.addEventListener("click",()=>{

// Clearing the items listed first.
listItemsBody.innerHTML=""

// getting userinput 
const userInput = document.querySelector(".userInput")
tasks.push(userInput.value)


// Showing tasks added by user
tasks.forEach((task)=>{
    const userTasks = document.createElement("li");
    userTasks.textContent=task
    listItemsBody.appendChild(userTasks)
})

}) 











