const header = document.querySelector("header")
const contBody = document.querySelector(".mainContainer")
const loader = document.querySelector(".qwerty");
const body=document.querySelector("body")

header.style.display="none"
contBody.style.display="none"
body.style.backgroundColor="#000000"

setTimeout(() => {
    header.style.display="initial"
    contBody.style.display="initial"
    loader.remove()
    body.style.backgroundColor="#F9EFDB"

}, 3100);