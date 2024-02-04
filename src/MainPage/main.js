const normalProjectBody = document.querySelector(".normal");


// Button to redirect to BMI calculator
const bmiRedirect= document.createElement("li");
const bmiAnchor = document.createElement("a");
bmiRedirect.appendChild(bmiAnchor)
bmiAnchor.innerHTML="BMI Calculator"
bmiAnchor.setAttribute("href","#")

// Button to redirect to form validation page
const formValidationRedirect= document.createElement("li");
const formValidationAnchor = document.createElement("a");
formValidationRedirect.appendChild(formValidationAnchor)
formValidationAnchor.innerHTML="Form Validation"
formValidationAnchor.setAttribute("href","#")

// Button to redirect to Countdown Timer
const countdownTimerRedirect= document.createElement("li");
const countdownAnchor = document.createElement("a");
countdownTimerRedirect.appendChild(countdownAnchor)
countdownAnchor.innerHTML="Countdown Timer"
countdownAnchor.setAttribute("href","#")

// Button to redirect to Todo App
const todoRedirect= document.createElement("li");
const todoAnchor = document.createElement("a");
todoRedirect.appendChild(todoAnchor)
todoAnchor.innerHTML="Todo App"
todoAnchor.setAttribute("href","#")

// Button to redirect to  background color picker
const hcpRedirect= document.createElement("li");
const hcpAnchor = document.createElement("a");
hcpRedirect.appendChild(hcpAnchor)
hcpAnchor.innerHTML="Background Color picker"
hcpAnchor.setAttribute("href","#")

// Button to redirect to Digital clock
const digitalClockRedirect= document.createElement("li");
const digitalClockAnchor = document.createElement("a");
digitalClockRedirect.appendChild(digitalClockAnchor)
digitalClockAnchor.innerHTML="Digital Clock"
digitalClockAnchor.setAttribute("href","#")

// Button for Popup Message Generation
const PMG= document.createElement("li");
const PMGAnchor = document.createElement("a");
PMG.appendChild(PMGAnchor)
PMGAnchor.innerHTML="Popup Message Generation"
PMGAnchor.setAttribute("href","#")






const sortingList = [
    
    
    [normalProjectBody.appendChild(bmiRedirect)],
    [normalProjectBody.appendChild(formValidationRedirect)],
    [normalProjectBody.appendChild(countdownTimerRedirect)],
    [normalProjectBody.appendChild(todoRedirect)],
    [normalProjectBody.appendChild(hcpRedirect)],
    [normalProjectBody.appendChild(digitalClockRedirect)],
    [normalProjectBody.appendChild(PMG)]
]

