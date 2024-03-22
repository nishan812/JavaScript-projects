const root = document.querySelector(".root");

const clockBody = document.createElement("div");
clockBody.classList.add("clockBody");
root.appendChild(clockBody);

let date, year, hour, am_pm, minute, second;

const yearBody = document.createElement("div");
clockBody.appendChild(yearBody);

setInterval(() => {
  date = new Date();

  year = date.getFullYear();
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  am_pm = hour >= 12 ? "pm" : "am";

  converted_hour =
    hour == 13
      ? 1
      : hour == 14
      ? 2
      : hour == 15
      ? 3
      : hour == 16
      ? 4
      : hour == 17
      ? 5
      : hour == 18
      ? 16
      : hour == 19
      ? 7
      : hour == 20
      ? 8
      : hour == 21
      ? 9
      : hour == 22
      ? 10
      : hour == 23
      ? 11
      : hour == 24
      ? 12
      : hour;

  console.log(year, converted_hour, am_pm, minute, second);
}, 1000);
