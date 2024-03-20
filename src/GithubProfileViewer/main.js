const root = document.querySelector(".root"); // getting root body

const alertBar = document.createElement("div"); // creating alertbar
alertBar.classList.add("alertBar");
alertBar.classList.add("alertBar_h");
root.append(alertBar);

const searchBody = document.createElement("div");
searchBody.classList.add("searchBody");
root.appendChild(searchBody);




/**
 * 
 * Functions and protoypes
 * 
 */

//prototype for string that capitalizes
String.prototype.capitalize =function(){
  return this[0].toUpperCase()+this.slice(1)
}

//function to give alert messages
function alertMessage(mes) {
  alertBar.classList.remove("alertBar_h");
  alertBar.textContent = `Alert: ${mes}`;
  setTimeout(() => {
    alertBar.classList.add("alertBar_h");
  }, 3000);
}







// (text)=>text[0].toUpperCase()+text.slice(1)

const inputSearchBox = document.createElement("input");
inputSearchBox.classList.add("inputSearchBox");
inputSearchBox.setAttribute("placeholder", "nishan812");
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
          searchBody.style.display = "none";
          const card = document.createElement("div");
          card.classList.add("card");
          root.appendChild(card);

          const imageSection = document.createElement("div");
          imageSection.classList.add("imageSection");
          card.appendChild(imageSection);

          const image = document.createElement("div");
          image.classList.add("image");
          image.style.backgroundImage = `url(${data.avatar_url})`;
          imageSection.appendChild(image);

          const infoSectionForCard = document.createElement("div");
          infoSectionForCard.classList.add("infoSectionForCard");
          card.appendChild(infoSectionForCard);

          const dataToDisplayInCard = {
            name: data.name,
            email: data.email,
            company:data.company,
            type: data.type
          };

          for (let key in dataToDisplayInCard) {
            const x = document.createElement("div");
            x.textContent = `${key.capitalize()}: ${
              dataToDisplayInCard[key] == null
                ? (textContent = "Not Available!")
                : dataToDisplayInCard[key]
            }`;
            infoSectionForCard.appendChild(x);
          }

          const buttonBodyOnCard=document.createElement("div");
          buttonBodyOnCard.classList.add("buttonBodyOnCard");
          card.appendChild(buttonBodyOnCard)


          const showFullDetailsButton=document.createElement("button")
          showFullDetailsButton.textContent="Show Full detail"
          showFullDetailsButton.classList.add("showFullDetailsButton")
          buttonBodyOnCard.appendChild(showFullDetailsButton)


          const searchAnotherUserButton=document.createElement("button");
          searchAnotherUserButton.classList.add("searchAnotherUserButton")
          searchAnotherUserButton.textContent="Search Another User"
          buttonBodyOnCard.appendChild(searchAnotherUserButton);







          searchAnotherUserButton.addEventListener("click",()=>{
            location.reload()
          })

        }
      });
  }
});
