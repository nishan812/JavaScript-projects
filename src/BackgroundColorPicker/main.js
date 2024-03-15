const body = document.querySelector("body");

const root = document.querySelector(".root");



const colorContainer = document.createElement("div");
colorContainer.classList.add("colorContainer");
root.appendChild(colorContainer)

const colors = {red:"#FF0000",orange:"#FFA500",yellow:"#FFFF00",green:"#008000",cyan:"#00FFFF",blue:"#0000FF",purple:"#800080",deepPink:"#FF1493",orangeRed:"#FF4500",gold:"#FFD700",greenYellow:"#ADFF2F",springGreen:"#00FF7F",dodgerBlue:"#1E90FF",darkViolet:"#9400D3",darkTurquoise:"#00CED1",fireBrick:"#B22222",hotPink:"#FF69B4",lime:"#00FF00",teal:"#008080",slateBlue:"#6A5ACD",tomato:"#FF6347",crimson:"#DC143C",steelBlue:"#4682B4",chartreuse:"#7FFF00"}

for (let key in colors){
    const colo = document.createElement("div");
    colo.classList.add("colo")
    colo.textContent=capitalize(key)
    colo.style.backgroundColor=colors[key]
    colo.setAttribute("value",`${key}`)
    colorContainer.appendChild(colo)

    if(key=="cyan" || key=="yellow" || key=="greenYellow" || key=="gold" || key=="springGreen" || key=="lime" || key=="chartreuse"){
        colo.style.color="red"
    }
}

function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
}