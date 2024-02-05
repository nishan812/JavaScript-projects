const height = document.querySelector("#heightData");
const weight = document.querySelector("#weightData");
const calculateButton = document.querySelector("#calculateButton");
const output = document.querySelector("#result");

calculateButton.addEventListener("click",()=>{
    const result =(calculateBMI(height.value,weight.value))
    output.innerHTML=result

   
})

function calculateBMI(h,w){
   return (((w) / (h **2))*10000).toFixed(2)
}













const heightOutput= document.querySelector("#heightOutput")
const weightOutput = document.querySelector("#weightOutput")
heightOutput.innerHTML=`Height: ${height.value}cm`
weightOutput.innerHTML=`Weight : ${weight.value}kg`


height.oninput=()=>{
    heightOutput.innerHTML=`Height: ${height.value}cm`
}
weight.oninput=()=>{
    weightOutput.innerHTML=`Weight : ${weight.value}kg`
}

