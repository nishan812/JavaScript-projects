// Getting body
const body = document.querySelector("body");

// Getting the root element as root.
const root = document.querySelector(".root");

// Creating a input body for user input
const inputBody = document.createElement("div");
inputBody.classList.add("inputBody");
root.appendChild(inputBody);

// Creating a body for input
const bodyForInput = document.createElement("div");
bodyForInput.classList.add("bodyForInput");
inputBody.appendChild(bodyForInput);

// inserting add box
const input = document.createElement("input");
input.classList.add("userInput");
input.setAttribute("href", "text");
bodyForInput.appendChild(input); ///////

//Creating Add Task button
const addTaskButton = document.createElement("button");
addTaskButton.classList.add("addTaskButton");
addTaskButton.textContent = "Add Task";
bodyForInput.appendChild(addTaskButton); ///

// Creating body for tasks list items
const listItemsBody = document.createElement("div");
listItemsBody.classList.add("listItemBody");
root.appendChild(listItemsBody);

// Creating a priority input box
const priorityOptionBody = document.createElement("div");
priorityOptionBody.classList.add("prioBody");

// label for prio heading
const prioLabel = document.createElement("label");
prioLabel.innerText = "Priority Level";
priorityOptionBody.appendChild(prioLabel);

//high prio
const highPrLabel = document.createElement("label"); // label for high pr
highPrLabel.classList.add("high");
highPrLabel.innerText = "High";
priorityOptionBody.appendChild(highPrLabel);
const highPr = document.createElement("input");
highPr.classList.add("prioRadio");
highPr.setAttribute("type", "radio"); // setting type
highPr.setAttribute("value", "high"); // setting value
highPr.setAttribute("name", "prio");
priorityOptionBody.appendChild(highPr);

// mid prio
const midPrLabel = document.createElement("label"); // label for mid pr
midPrLabel.classList.add("mid");
midPrLabel.innerText = "Mid";
priorityOptionBody.appendChild(midPrLabel);
const midPR = document.createElement("input");
midPR.classList.add("prioRadio");
midPR.setAttribute("type", "radio"); // setting type
midPR.setAttribute("value", "mid"); // setting value
midPR.setAttribute("name", "prio"); // setting name
midPR.setAttribute("checked", "checked");
priorityOptionBody.appendChild(midPR);

// low prio
const lowPrLabel = document.createElement("label"); // label for low pr
lowPrLabel.classList.add("low");
lowPrLabel.innerText = "Low";
priorityOptionBody.appendChild(lowPrLabel);
const lowPr = document.createElement("input");
lowPr.classList.add("prioRadio");
lowPr.setAttribute("type", "radio"); // setting type
lowPr.setAttribute("value", "low"); // setting value
lowPr.setAttribute("name", "prio");
priorityOptionBody.appendChild(lowPr);

inputBody.appendChild(priorityOptionBody);

// Creating  a filter select html for filtering or sorting
const filterBody = document.createElement("div");
filterBody.classList.add("filterBody");
const filterHeading = document.createElement("h3");
filterHeading.textContent = "SortBy";
filterBody.appendChild(filterHeading);
const options = ["As you Entered", "By Alphabet", "By Priority"];
const filter = document.createElement("select");
filter.setAttribute("placeholder", "SortBy");
filter.classList.add("filter");

options.forEach((optionText) => {
  const option = document.createElement("option");
  option.innerText = optionText;
  filter.appendChild(option);
});
filterBody.appendChild(filter);

inputBody.appendChild(filterBody);

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
  return tasks.some(
    (task) => task.data.toLowerCase() === userInput.toLowerCase()
  );
}

// Event after clicking on Add Task Button
addTaskButton.addEventListener("click", () => {
  if (input.value.trim() == "") {
    alertMessage("Task is empty, Cannot be added.");
  } else if (checkIfTaskAlreadyAdded(input.value)) {
    input.value = "";
    alertMessage("Task already Exists.");
  } else {
    stylePadding();

    // Clearing the items listed first.
    listItemsBody.innerHTML = "";

    // getting userinput
    const userInput = document.querySelector(".userInput");

    //getting the priority value
    let priorityValue;
    const priorityRadioButtons = document.querySelectorAll(".prioRadio");
    priorityRadioButtons.forEach((radio) => {
      if (radio.checked) {
        priorityValue = radio.value;
      }
    });

    // appending the user value to the tasks array
    tasks.push({ data: userInput.value, priority: priorityValue });

    // reseting the priority level as the task is added
    priorityRadioButtons.forEach((radio) => {
      if (radio.value == "mid") {
        radio.setAttribute("checked", "checked");
      }
    });

    // Showing tasks added by user
    tasks.forEach((task) => {
      // Creatring a li and adding the user added task value and display it.
      const userTasks = document.createElement("li");
      userTasks.classList.add("taskItem");
      userTasks.innerHTML = `<a>${task.data}</a>`;
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
  const target = e.target; // getting the delete button as target

  //triggering only if the delete button is clicked
  if (target.classList.contains("deleteButton")) {
    const itemToRemove = target.parentNode;
    itemToRemove.remove();

    // Removing the item from the array now
    const itemIndexInArray = tasks.findIndex(
      (task) => task.data === itemToRemove.firstChild.textContent
    );

    if (itemIndexInArray != -1) {
      tasks.splice(itemIndexInArray, 1);
      // console.log(itemToRemove.firstChild.textContent);
      // console.log(itemIndexInArray, 1);
      // console.log(tasks);
    }
  }
  stylePadding();
});

const filterOption = document.querySelector(".filter");
filterOption.addEventListener("change", (e) => {
  const target = e.target;

  //for sorting when as you enter is selected
  if (target.value === "As you Entered") {
    listItemsBody.innerHTML = "";
    tasks.forEach((task) => {
      // Creatring a li and adding the user added task value and display it.
      const userTasks = document.createElement("li");
      userTasks.classList.add("taskItem");
      userTasks.innerHTML = `<a>${task.data}</a>`;
      listItemsBody.appendChild(userTasks);

      // Creating a  delete task button for added Items
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      //adding class for button
      deleteButton.classList.add("deleteButton");
      // Adding delete Button for each items that are added
      userTasks.appendChild(deleteButton);
    });
  }

  //for sorting when By alphabet is selected
  if (target.value === "By Alphabet") {
    console.log("alpha");
    const sortedArray = [...tasks].sort((a, b) => {
      const nameA = a.data.toLowerCase();
      const nameB = b.data.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    listItemsBody.innerHTML = "";
    sortedArray.forEach((task) => {
      // Creatring a li and adding the user added task value and display it.
      const userTasks = document.createElement("li");
      userTasks.classList.add("taskItem");
      userTasks.innerHTML = `<a>${task.data}</a>`;
      listItemsBody.appendChild(userTasks);

      // Creating a  delete task button for added Items
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      //adding class for button
      deleteButton.classList.add("deleteButton");
      // Adding delete Button for each items that are added
      userTasks.appendChild(deleteButton);
    });
  }

  //for sorting when by priority is selected
  if (target.value === "By Priority") {
    console.log("prio");
  }
});
