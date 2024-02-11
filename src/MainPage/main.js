const container = document.querySelector(".container")


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
todoAnchor.innerHTML = "Todo List App";
todoAnchor.setAttribute("href", "#");

// Button to redirect to  background color picker
const hcpRedirect = document.createElement("li");
const hcpAnchor = document.createElement("a");
hcpRedirect.appendChild(hcpAnchor);
hcpAnchor.innerHTML = "Background Color picker";
hcpAnchor.setAttribute("href", "#");

// Button to redirect to Digital clock
const digitalClockRedirect = document.createElement("li");
const digitalClockAnchor = document.createElement("a");
digitalClockRedirect.appendChild(digitalClockAnchor);
digitalClockAnchor.innerHTML = "Digital Clock";
digitalClockAnchor.setAttribute("href", "#");

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
githubProfileViewerAnchor.setAttribute("href", "/src/GithubProfileViewer/index.html");

// Button that redirects to Movie Recommendation System
const mrsRedirect = document.createElement("li");
const mrsAnchor = document.createElement("a");
mrsRedirect.appendChild(mrsAnchor);
mrsAnchor.innerHTML = "Movie Recommendation System";
mrsAnchor.setAttribute("href", "#");




// Button to redirect to Wikipedia Search System
const wssRedirect = document.createElement("li");
const wssAnchor = document.createElement("a");
wssRedirect.appendChild(wssAnchor)
wssAnchor.setAttribute("href","#");
wssAnchor.innerHTML="Wikipedia Search"

// Button to redirect to Dictionary App
const dictAppRedirect = document.createElement("li");
const dictAppAnchor = document.createElement("a");
dictAppRedirect.appendChild(dictAppAnchor)
dictAppAnchor.setAttribute("href","#");
dictAppAnchor.innerHTML="Dictionary App"

// Button to redirect to send Message on whatsapp
const smowRedirect = document.createElement("li");
const smowAnchor = document.createElement("a");
smowRedirect.appendChild(smowAnchor)
smowAnchor.setAttribute("href","#");
smowAnchor.innerHTML="Send a Message to a User on Whatsapp"


const items = [{
  link:bmiRedirect,
  discription:"Calculate your Body mass index"
},
{
link:formValidationRedirect,
discription:"A simple form with validation."
},
{
  link:todoRedirect ,
  discription:" To Do list to manage your tasks. "
},
{
  link:hcpRedirect,
  discription:"Change backgroud according way you like. "
},
{
  link:digitalClockRedirect ,
  discription:"A simple digital clock."
},
{
  link:PMG ,
  discription:"A popup message generator, Generates message after you click."
}
,
{
  link:quoteGeneratorRedirect ,
  discription:"A simple quote generator "
},
{
  link:githubProfileViewerRedirect ,
  discription:"Search any users on github and view their profile easly."
},
{
  link:mrsRedirect,
  discription:"A system that suggests you movie that you like. "
},
{
  link:smowRedirect ,
  discription:"Send message to user you like on whatsapp."
},
{
  link:wssRedirect ,
  discription:"Search on wikipedia made easy."
},
{
  link:dictAppRedirect ,
  discription:"A dictionary app for your english betterment."
}
]



items.forEach((item)=>{
  const cardBody = document.createElement("div");
  cardBody.classList.add("card")
  const description = document.createElement("p");
  description.classList.add("description")
  description.textContent=item.discription
  description.style.display="none"

  cardBody.appendChild(item.link)
  cardBody.appendChild(description)
  container.appendChild(cardBody)

  cardBody.addEventListener("mouseover",()=>{
    description.style.display="block"
  })
  cardBody.addEventListener("mouseout",()=>{
    description.style.display="none"
  })
  

})


