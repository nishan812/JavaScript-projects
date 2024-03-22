
let date, year, hour, am_pm, minute, second;

const root = document.querySelector(".root");
const clockBody = document.createElement("div");
clockBody.classList.add("clockBody");
root.appendChild(clockBody);



const hourBody = document.createElement("div");
hourBody.classList.add("hourBody")
clockBody.appendChild(hourBody);

const am_pmBody = document.createElement("div");
am_pmBody.classList.add("am_pmBody")
clockBody.appendChild(am_pmBody);

const minuteBody = document.createElement("div");
minuteBody.classList.add("minuteBody")
clockBody.appendChild(minuteBody);

const secondBody = document.createElement("div");
secondBody.classList.add("secondBody")
clockBody.appendChild(secondBody);




setInterval(() => {
  date = new Date();

  year = date.getFullYear();
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  am_pm = hour >= 12 ? "PM" : "AM";

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


hourBody.textContent=converted_hour
am_pmBody.textContent=am_pm
minuteBody.textContent=minute>=0&&minute<9?"0"+minute:minute
secondBody.textContent=second>=0&&second<9?"0"+second:second

  console.log( converted_hour, am_pm, minute, second);
}, 1000);
