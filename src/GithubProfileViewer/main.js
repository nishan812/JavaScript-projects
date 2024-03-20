const root = document.querySelector(".root"); // getting root body

const alertBar = document.createElement("div"); // creating alertbar
alertBar.classList.add("alertBar");
root.append(alertBar);

const searchBody = document.createElement("div");
searchBody.classList.add("searchBody");
root.appendChild(searchBody);

function alertMessage(mes) {
  alertBar.textContent = `Alert: ${mes}`;
  setTimeout(() => {
    alertBar.remove();
  }, 3000);
}
