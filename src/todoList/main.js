// Getting body
const body = document.querySelector("body");

// Getting the root element as root.
const root = document.querySelector(".root");

// Creating a input body for user input
const inputBody = document.createElement("div");
inputBody.classList.add("inputBody");
root.appendChild(inputBody);

// inserting add box
const input = document.createElement("input");
input.classList.add("userInput");
input.setAttribute("href", "text");
inputBody.appendChild(input);

//Creating Add Task button
const addTaskButton = document.createElement("button");
addTaskButton.classList.add("addTaskButton");
addTaskButton.textContent = "Add Task";
inputBody.appendChild(addTaskButton);

// Creating body for tasks list items
const listItemsBody = document.createElement("div");
listItemsBody.classList.add("listItemBody");
root.appendChild(listItemsBody);

// Creating array for storing tasks list all items
const tasks = [];

// A function that style padding for listed item, if called fixes the padding according to the condition.
function stylePadding() {
  // Conditon for styling : if array is empty no padding
  if (!listItemsBody.hasChildNodes()) {
    listItemsBody.style.padding = "0";
  } else {
    listItemsBody.style.padding = "2%";
  }
}

// A function that displays alert message
function alertMessage(message) {
  const msgBody = document.querySelector(".alertBody");
  if (!msgBody) {
    const messageBody = document.createElement("div");
    root.style.marginTop = "5%";
    messageBody.classList.add("alertBody");
    body.insertBefore(messageBody, root);

    setTimeout(() => {
      messageBody.remove();
      root.style.marginTop = "20%";
    }, 3000);
    messageBody.innerHTML = message;
  }
}

// Function that checks whether the added task already exists or not
function checkIfTaskAlreadyAdded(userInput) {
  return tasks.some((task) => task.toLowerCase() === userInput.toLowerCase());
}

// Event after clicking on Add Task Button
addTaskButton.addEventListener("click", () => {
  if (input.value == "") {
    alertMessage("Task is empty, Cannot be added.");
  } else if (checkIfTaskAlreadyAdded(input.value)) {
    input.value=""
    alertMessage("Task already Exists.");
  } else {
    stylePadding();

    // Clearing the items listed first.
    listItemsBody.innerHTML = "";

    // getting userinput
    const userInput = document.querySelector(".userInput");
    tasks.push(userInput.value);

    // Showing tasks added by user
    tasks.forEach((task) => {
      // Creatring a li and adding the user added task value and display it.
      const userTasks = document.createElement("li");
      userTasks.classList.add("taskItem");
      userTasks.innerHTML = `<a>${task}</a>`;
      listItemsBody.appendChild(userTasks);

      // Creating a  delete task button for added Items
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      //adding class for button
      deleteButton.classList.add("deleteButton");
      // Adding delete Button for each items that are added
      userTasks.appendChild(deleteButton);
    });

    // Clearing textbox After adding tasks
    input.value = "";

    stylePadding();
  }
});

//Event for deleting the task items
root.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("deleteButton")) {
    const listItem = target.parentNode; // getting current list item
    const itemText = listItem.firstChild.textContent;
    listItem.remove();

    //test: console.log(`Before :${tasks}`);
    //test: console.log(itemText);

    // Removing item from array
    const itemToRemove = tasks.findIndex((task) => task === itemText);
    if (itemToRemove !== -1) {
      tasks.splice(itemToRemove, 1);
      // test:  console.log(`After: ${tasks}`);
    }
    stylePadding();
  }
});
