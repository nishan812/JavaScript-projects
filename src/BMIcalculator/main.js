const height = document.querySelector("#heightData");
const weight = document.querySelector("#weightData");
const calculateButton = document.querySelector("#calculateButton");
const output = document.querySelector("#result");

calculateButton.addEventListener("click",()=>{
    const result =(calculateBMI(height.value,weight.value))

    if(result<18.5){
        output.innerHTML=`${result} Underweight`
    }
    else if(result>=18.5 && result<=25.9){
        output.innerHTML=`${result} Normal`
    }
    else if(result>=25.0 && result<=29.9){
        output.innerHTML=`${result} Overweight`
    }
    else if(result>=30 && result<=34){
        output.innerHTML=`${result} Obese`
    }
    else if(result>=35){
        output.innerHTML=`${result} Extremely Obese`
    }

   
})

function calculateBMI(h,w){
   return (((w) / (h **2))*10000).toFixed(2)
}
let outerRes= calculateBMI(height.value,weight.value)
output.innerHTML=`${outerRes} Normal`




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

