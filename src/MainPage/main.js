const normalBody = document.querySelector(".normalList");

//heading for normal projects
const normalListHeading = document.createElement("h2");
normalListHeading.innerHTML = "Normal Projects";
normalBody.appendChild(normalListHeading);

// Button to redirect to BMI calculator
const bmiRedirect = document.createElement("li");
const bmiAnchor = document.createElement("a");
bmiRedirect.appendChild(bmiAnchor);
bmiAnchor.innerHTML = "BMI Calculator";
bmiAnchor.setAttribute("href", "#");

// Button to redirect to form validation page
const formValidationRedirect = document.createElement("li");
const formValidationAnchor = document.createElement("a");
formValidationRedirect.appendChild(formValidationAnchor);
formValidationAnchor.innerHTML = "Form Validation";
formValidationAnchor.setAttribute("href", "#");

// Button to redirect to Countdown Timer
const countdownTimerRedirect = document.createElement("li");
const countdownAnchor = document.createElement("a");
countdownTimerRedirect.appendChild(countdownAnchor);
countdownAnchor.innerHTML = "Countdown Timer";
countdownAnchor.setAttribute("href", "#");

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

/*
 
From here second box is started Projects that uses API
 
 */

//gettinig root for box of list that contains projects that uses api list
const apiProjectsBody = document.querySelector(".apiProjectsList");

// Heading for Projects that use Api
const APIprojectHeading = document.createElement("h2");
APIprojectHeading.innerHTML = "Projects that use API";
apiProjectsBody.appendChild(APIprojectHeading);

// Button that redirects to Quote Generator
const quoteGeneratorRedirect = document.createElement("li");
const quoteGeneratorAnchor = document.createElement("a");
quoteGeneratorRedirect.appendChild(quoteGeneratorAnchor);
quoteGeneratorAnchor.innerHTML = "Quote Generator";
quoteGeneratorAnchor.setAttribute("href", "https://quote-generator-xi-teal.vercel.app/");

// Button that redirects to github profile Viewer
const githubProfileViewerRedirect = document.createElement("li");
const githubProfileViewerAnchor = document.createElement("a");
githubProfileViewerRedirect.appendChild(githubProfileViewerAnchor);
githubProfileViewerAnchor.innerHTML = "Github profile Viewer";
githubProfileViewerAnchor.setAttribute("href", "#");

// Button that redirects to Movie Recommendation System
const mrsRedirect = document.createElement("li");
const mrsAnchor = document.createElement("a");
mrsRedirect.appendChild(mrsAnchor);
mrsAnchor.innerHTML = "Movie Recommendation System";
mrsAnchor.setAttribute("href", "#");

/*
 
From here third box is started Intermediate Level projects
 
*/

//gettinig root for box of list that contains intermediate level projects list
const intermdiateProjectsBody = document.querySelector(".intermediateList");


// Heading for intermediate level projects

const intermediateHeading = document.createElement("h2");
intermediateHeading.innerHTML="Intermediate Projects"
intermdiateProjectsBody.appendChild(intermediateHeading)

// Button for redirect to chat application
const chatAppRedirect = document.createElement("li");
const chatAppAnchor = document.createElement("a");
chatAppRedirect.appendChild(chatAppAnchor)
chatAppAnchor.setAttribute("href","#");
chatAppAnchor.innerHTML="Chat Application"

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





const normalProjectsListSorting = [
  [normalBody.appendChild(bmiRedirect)],
  [normalBody.appendChild(formValidationRedirect)],
  [normalBody.appendChild(countdownTimerRedirect)],
  [normalBody.appendChild(todoRedirect)],
  [normalBody.appendChild(hcpRedirect)],
  [normalBody.appendChild(digitalClockRedirect)],
  [normalBody.appendChild(PMG)],
];

const apiProjectsListSorting = [
  [apiProjectsBody.appendChild(quoteGeneratorRedirect)],
  [apiProjectsBody.appendChild(githubProfileViewerRedirect)],
  [apiProjectsBody.appendChild(mrsRedirect)]
];

const intermediateProjectsListSorting = [
    [intermdiateProjectsBody.appendChild(chatAppRedirect)],
    [intermdiateProjectsBody.appendChild(smowRedirect)],
    [intermdiateProjectsBody.appendChild(wssRedirect)],
    [intermdiateProjectsBody.appendChild(dictAppRedirect)],

]