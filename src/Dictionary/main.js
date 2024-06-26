String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

const root = document.querySelector(".root");
const body = document.querySelector('body');


function alertMessage(msg){
   
    const msgBody = document.createElement("div")
    msgBody.classList.add("msgBody")
    msgBody.textContent=`Alert: ${msg}`
    root.insertAdjacentElement("beforebegin",msgBody)
    setTimeout(() => {
        msgBody.remove()
        
    }, 3000);

}

const wordSearchBody = document.createElement("div");
wordSearchBody.classList.add("wordSearchBody");
root.appendChild(wordSearchBody);

const inputBody = document.createElement("input");
inputBody.classList.add("inputBody");
wordSearchBody.appendChild(inputBody);

const searchButton = document.createElement("button");
searchButton.classList.add("searchButton");
searchButton.textContent = "Search";
wordSearchBody.appendChild(searchButton);

const homePage = document.createElement('div')
homePage.classList.add("homePage");
const head = document.createElement("div");
head.innerHTML="<h1>Welcome,</h1>"
homePage.appendChild(head)

const bd = document.createElement("div");
bd.innerHTML="<p>This is a simple dictionary web app. You can search words and get thier Phonetic, Meanings & Examples, Feel free to use this easy and simple system. </p>"
homePage.appendChild(bd)
root.appendChild(homePage)

document.addEventListener("keypress", search);
searchButton.addEventListener("click", search);

function search(event) {
  if (event.key == "Enter" || event.target.classList.contains("searchButton")) {

    const wordToSearch = inputBody.value.trim().toLowerCase();

    if (wordToSearch == "") {
        alertMessage("oops empty")
      console.log("is empty");
    } else {

        inputBody.value="";

    
        searchButton.disabled=true;

        if(root.children.length>1){
          for(let i=1;i<root.children.length;i++){
            root.children[i].remove()
          }
        }
      

      const request = fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`
      );

      request
        .then((res) => res.json())
        .then((data) => {
          const word = {
            word: data[0].word,
            phonetic: data[0].phonetic
              ? data[0].phonetic
              : data[0].phonetics[0].text ||
                data[0].phonetics[1].text ||
                data[0].phonetics[2].text ||
                "Not Found",
          };

          let definitions = [];

          //fuck ## extracting all definitions and pussying it
          data[0].meanings.forEach((obj) => {
            obj.definitions.forEach((item) => {
              definitions.push(item.definition);
            });
          });
          // console.log(definitions);

          let examples = [];
          // fetching all examples from each obj arr obj arr ararara and pusyying it into examples arr
          data[0].meanings.forEach((obj) => {
            obj.definitions.forEach((item) => {
              if (item.example) {
                examples.push(item.example);
              }
            });
          });
        //   console.log(examples); passed

          const resultBody = document.createElement("div");
          resultBody.classList.add("resultBody");
          root.appendChild(resultBody);

          const wordAndPhoneticDisplayingBody = document.createElement("div");
          wordAndPhoneticDisplayingBody.classList.add(
            "wordAndPhoneticDisplayingBody"
          );
          resultBody.appendChild(wordAndPhoneticDisplayingBody);

          const displayWord = document.createElement("div");
          displayWord.classList.add("displayWord");
          displayWord.textContent = word.word.capitalize();
          wordAndPhoneticDisplayingBody.appendChild(displayWord);

          const displayPhonetic = document.createElement("div");
          displayPhonetic.classList.add("displayPhonetic");
          displayPhonetic.textContent =word.phonetic;
          wordAndPhoneticDisplayingBody.appendChild(displayPhonetic);

          const definitonsOutput = document.createElement("div");
          definitonsOutput.classList.add("definitonsOutput");
          resultBody.appendChild(definitonsOutput);

          const definitionHeading = document.createElement("div");
          definitionHeading.classList.add("definitonHeading");
          definitionHeading.innerHTML = `<h2>${definitions.length} Definitions Found</h2>`;
          definitonsOutput.appendChild(definitionHeading);

          definitions.forEach((item, i) => {
            const defnsBody = document.createElement("div");
            defnsBody.classList.add("defnsBody");
            defnsBody.textContent = `${i + 1}. ${item}`;
            definitonsOutput.appendChild(defnsBody);
          });

          const examplesBody = document.createElement("div");
          examplesBody.classList.add("examplesBody");
          resultBody.appendChild(examplesBody);

          const examplesHeading = document.createElement("div");
          examplesHeading.classList.add("examplesHeading");
          examplesHeading.innerHTML = `<h2>${examples.length} Examples Found</h2>`;
          examplesBody.appendChild(examplesHeading);

          examples.forEach((item, i) => {
            const examplesItems = document.createElement("div");
            examplesItems.classList.add("examplesItems");
            examplesItems.textContent = `${i + 1}. ${item}`;
            examplesBody.appendChild(examplesItems);
          });

          searchButton.disabled=false;
  
        })
        .catch(() => {

          console.log("failed");
          const errorBody = document.createElement("div");
          errorBody.classList.add("errorBody");
          errorBody.textContent="Sorry, Word not found or search request failed."
          root.appendChild(errorBody)
          searchButton.disabled=false;
        });
    }
  }
}
