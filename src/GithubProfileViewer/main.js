const root = document.querySelector(".root"); // getting root body

const alertBar = document.createElement("div"); // creating alertbar
alertBar.classList.add("alertBar");
alertBar.classList.add("alertBar_h");
root.append(alertBar);

const searchBody = document.createElement("div");
searchBody.classList.add("searchBody");
root.appendChild(searchBody);

function alertMessage(mes) {
  alertBar.classList.remove("alertBar_h")
  alertBar.textContent = `Alert: ${mes}`;
  setTimeout(() => {
    alertBar.classList.add("alertBar_h")
  }, 3000);
}

