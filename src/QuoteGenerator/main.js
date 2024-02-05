// Getting place for Quotes on the DOM
const quotation = document.querySelector("#quotation");
const author = document.querySelector(".author");
const changeButton = document.querySelector(".change-button");
let clickCount = 0;
const clicker = document.querySelector("#clickCount");

fetch("https://dummyjson.com/quotes")
  .then((res) => res.json())
  .then((data) => {
    const quotes = data.quotes;

    changeButton.addEventListener("click", () => {
      if (clickCount < quotes.length) {
        quotation.textContent = quotes[clickCount].quote;
        author.textContent = quotes[clickCount].author;
        clicker.textContent = `You've viewed ${count()} Quotes!`;
      } else {
        quotation.textContent =
          "Oops! looks like  we ran out of quotes ...More Quotes comming soon!";
        author.textContent = "Made By Nishan <3";
      }
    });
    function count() {
      return (clickCount += 1);
    }
  });
