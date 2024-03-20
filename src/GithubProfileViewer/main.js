const root = document.querySelector(".root"); // getting root body

const alertBar = document.createElement("div"); // creating alertbar
alertBar.classList.add("alertBar");
alertBar.classList.add("alertBar_h");
root.append(alertBar);

const searchBody = document.createElement("div");
searchBody.classList.add("searchBody");
root.appendChild(searchBody);

//function to give alert messages
function alertMessage(mes) {
  alertBar.classList.remove("alertBar_h");
  alertBar.textContent = `Alert: ${mes}`;
  setTimeout(() => {
    alertBar.classList.add("alertBar_h");
  }, 3000);
}

const inputSearchBox = document.createElement("input");
inputSearchBox.classList.add("inputSearchBox");
inputSearchBox.setAttribute("placeholder", "1");
searchBody.appendChild(inputSearchBox);

const searchButton = document.createElement("button");
searchButton.classList.add("searchButton");
searchButton.textContent = "Search";
searchBody.appendChild(searchButton);

searchButton.addEventListener("click", () => {
  const inputByUser = inputSearchBox.value.trim().toLowerCase();
  if (inputByUser == "") {
    alertMessage("username is empty");
  } else {
    fetch(`https://api.github.com/users/${inputByUser}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Not Found") {
          alertMessage("User doesnot exist");
        } else {
          inputSearchBox.value = "";




          
        }
      });
  }
});
