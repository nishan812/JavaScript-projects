const container = document.querySelector(".container");

// Button to redirect to BMI calculator
const bmiRedirect = document.createElement("li");
const bmiAnchor = document.createElement("a");
bmiRedirect.appendChild(bmiAnchor);
bmiAnchor.innerHTML = "BMI Calculator";
bmiAnchor.setAttribute("href", "/src/BMIcalculator/index.html");

// Button to redirect to form page
const formValidationRedirect = document.createElement("li");
const formValidationAnchor = document.createElement("a");
formValidationRedirect.appendChild(formValidationAnchor);
formValidationAnchor.innerHTML = "Form";
formValidationAnchor.setAttribute("href", "/src/formValidation/index.html");

// Button to redirect to Todo App
const todoRedirect = document.createElement("li");
const todoAnchor = document.createElement("a");
todoRedirect.appendChild(todoAnchor);
todoAnchor.innerHTML = "ToDo Manager";
todoAnchor.setAttribute("href", "/src/todoList/index.html");

// Button to redirect to  background color picker
const hcpRedirect = document.createElement("li");
const hcpAnchor = document.createElement("a");
hcpRedirect.appendChild(hcpAnchor);
hcpAnchor.innerHTML = "Background Color picker";
hcpAnchor.setAttribute("href", "/src/BackgroundColorPicker/index.html");

// Button to redirect to Digital clock
const digitalClockRedirect = document.createElement("li");
const digitalClockAnchor = document.createElement("a");
digitalClockRedirect.appendChild(digitalClockAnchor);
digitalClockAnchor.innerHTML = "Digital Clock";
digitalClockAnchor.setAttribute("href", "/src/digitalClock/index.html");

// Button for Popup Message Generation
const PMG = document.createElement("li");
const PMGAnchor = document.createElement("a");
PMG.appendChild(PMGAnchor);
PMGAnchor.innerHTML = "Popup Message Generation";
PMGAnchor.setAttribute("href", "#");

//gettinig root for box of list that contains projects that uses api list
const apiProjectsBody = document.querySelector(".apiProjectsList");

// Button that redirects to Quote Generator
const quoteGeneratorRedirect = document.createElement("li");
const quoteGeneratorAnchor = document.createElement("a");
quoteGeneratorRedirect.appendChild(quoteGeneratorAnchor);
quoteGeneratorAnchor.innerHTML = "Quote Generator";
quoteGeneratorAnchor.setAttribute("href", "/src/QuoteGenerator/index.html");

// Button that redirects to github profile Viewer
const githubProfileViewerRedirect = document.createElement("li");
const githubProfileViewerAnchor = document.createElement("a");
githubProfileViewerRedirect.appendChild(githubProfileViewerAnchor);
githubProfileViewerAnchor.innerHTML = "Github profile Viewer";
githubProfileViewerAnchor.setAttribute(
  "href",
  "/src/GithubProfileViewer/index.html"
);


// Button to redirect to Dictionary App
const dictAppRedirect = document.createElement("li");
const dictAppAnchor = document.createElement("a");
dictAppRedirect.appendChild(dictAppAnchor);
dictAppAnchor.setAttribute("href", "/src/Dictionary/index.html");
dictAppAnchor.innerHTML = "Dictionary App";

// Button to redirect bin packing
const binpacking = document.createElement("li");
const binpackingAnchor = document.createElement("a");
binpacking.appendChild(binpackingAnchor);
binpackingAnchor.setAttribute("href", "https://bin-packing.vercel.app/");
binpackingAnchor.innerHTML = "Bin Packing";

const items = [
  {
    link: binpacking,
    discription:
      "An algorithm used to fit items utilizing the all possible spaces",
  },
  {
    link: dictAppRedirect,
    discription: "A dictionary app for your english betterment.",
  },

  {
    link: githubProfileViewerRedirect,
    discription: "Search any users on github and view their all details.",
  },
  {
    link: todoRedirect,
    discription:
      " Advance To-Do list manager for managing your tasks, with advance features. ",
  },
  {
    link: quoteGeneratorRedirect,
    discription: "A simple quote generator ",
  },
  {
    link: formValidationRedirect,
    discription: "A simple form with validation.",
  },
  
 
  {
    link: bmiRedirect,
    discription:
      "Body mass index calculator, calculate your BMI and improve your health.",
  },

  {
    link: hcpRedirect,
    discription: "Change backgroud according way you like. ",
  },
  {
    link: digitalClockRedirect,
    discription: "A simple digital clock.",
  },
  {
    link: PMG,
    discription:
      "A popup message generator, Generates message after you click.",
  }
  
];

items.forEach((item) => {
  const cardBody = document.createElement("div");
  cardBody.classList.add("card");
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = item.discription;
  description.style.display = "none";

  cardBody.appendChild(item.link);
  cardBody.appendChild(description);
  container.appendChild(cardBody);

  cardBody.addEventListener("mouseover", () => {
    description.style.display = "block";
    description.style.fontSize = "15px";
    description.style.transition="all 0.5s"
  });
  cardBody.addEventListener("mouseout", () => {
    description.style.display = "none";
    description.style.fontSize = "10px";
    description.style.transition="all 0.5s"
  });

  cardBody.addEventListener("click", (e) => {
    const target = e.currentTarget;
    const linkHref = target.querySelector("a").getAttribute("href");
    window.location.href = linkHref;
  });
});
