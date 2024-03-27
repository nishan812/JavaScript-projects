const root = document.querySelector(".root");

const wordSearchBody=document.createElement("div");
wordSearchBody.classList.add("wordSearchBody");
root.appendChild(wordSearchBody)

const inputBody = document.createElement('input');
inputBody.classList.add("inputBody");
wordSearchBody.appendChild(inputBody);

const searchButton=document.createElement("button");
searchButton.classList.add("searchButton");
searchButton.textContent="Search"
wordSearchBody.appendChild(searchButton)


document.addEventListener("keypress",search)
searchButton.addEventListener('click',search)

function search(event){
    if(event.key=="Enter" || event.target.classList.contains("searchButton")){


        const wordToSearch = inputBody.value
        const request = fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`
          );
          
          request
            .then((res) => res.json())
            .then((data) => {
          
          
          
          
             
              console.log(data[0].word);
          
            })
            .catch(() => {
              console.log("failed");
            });
          

    }
};


