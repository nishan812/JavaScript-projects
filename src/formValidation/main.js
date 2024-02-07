const body = document.querySelector("body");
const alertBox = document.querySelector(".alertMsgSection")
const firstName = document.querySelector("#firstname");
const middleName = document.querySelector("#middlename");
const lastName = document.querySelector("#lastname");
const gender = document.querySelector("#gender");
const age = document.querySelector("#age");
const phone = document.querySelector("#phoneNumber");
const email = document.querySelector("#emailAddress");


//Permanent address
const pProvince = document.querySelector("#permanentProvince");
const pDistrict = document.querySelector("#permanentDistrict");
const pMunicipality = document.querySelector("#permanentMunicipality");
const pWard = document.querySelector("#permanentWard");

//Current Address
const cProvince = document.querySelector("#currentProvince");
const cDistrict = document.querySelector("#currentDistrict");
const cMunicipality = document.querySelector("#currentMunicipality");
const cWard = document.querySelector("#currentWard");

//storing Buttons
const sameAsPermanentAddressButton=document.querySelector("#sameAsPermanentBtn");
const submitButton = document.querySelector("#submit")

const districtOptions={
    "koshi":["Bhojpur","Dhankuta","Ilam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],
    "madesh_pradesh":["Saptari","Siraha","Dhanusa","Mahottari","Sarlahi","Bara","Parsa","Rautahat"],
    "bagmati":["Sindhuli","Ramechhap","Dolakha","Bhaktapur","Dhading","Kathmandu","Kavrepalanchok","Lalitpur","Nuwakot","Rasuwa","Sindhupalchok","Chitwan","Makwanpur"],
    "gandaki":["Baglung","Gorkha","Kaski","Lamjung","Manang","Mustang","Myagdi","Nawalpur","Parbat","Syangja","Tanahun"],
    "lumbini":["Kapilvastu","Parasi","Rupendehi","Argakhanchi","Gulmi","Palpa","Dang","Pyuthan","Rolpa","Eastern","Banke","Bardiya"],
    "karnali":["Western Rukum","Salyan","Dolpa","Humla","Jumla","Kalikot","Mugu","Surkhet","Dailekh","Jajarkot"],
    "sudurpashchim":["Kailali","Achham","Doti","Bajhang","Bajura","Kanchanpur","Daldeldhura","Baitadi","Darchula"]
}

function UpdateDistrictOptions(){
    const selectedProvince = pProvince.value;
    const districts= districtOptions[selectedProvince] || [];

//clear existing options
    pDistrict.innerHTML=""

// add new options
districts.forEach(district =>{
    const option = document.createElement("option");
    option.textContent=district;
    pDistrict.appendChild(option);
});

}
pProvince.addEventListener("change",UpdateDistrictOptions);
UpdateDistrictOptions()




//evenlistener for same as permanent address button
sameAsPermanentAddressButton.addEventListener("click",()=>{
    cProvince.value=pProvince.value
    cDistrict.value=pDistrict.value
    cMunicipality.value=pMunicipality.value
    cWard.value=pWard.value
})

// Function to validate Email address
function isValidEmail(email){
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Function to validate phone number
function isValidPhoneNumber(phoneNumber) {
    // Regular expression for phone number validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}
/**
 * Main part//
 * Event listenerfor submit
 * 
 * 
 * 
 */
submitButton.addEventListener("click",()=>{
const userdata = {
    user:{
        first_name:`${firstName.value}`,
        middle_name:`${middleName.value}`,
        last_name:`${lastName.value}`,
        user_gender:`${gender.value}`,
        user_age:`${age.value}`
    },
   userContactInfo:{
    user_phoneNumberr:`${phone.value}`,
    user_email:`${email.value}`,
   },
   permanentAddress:{
    province:`${pProvince.value}`,
    district:`${pDistrict.value}`,
    municipality:`${pMunicipality.value}`,
    ward:`${pWard.value}`
   },
   currentAddress:{
    province:`${cProvince.value}`,
    district:`${cDistrict.value}`,
    municipality:`${cMunicipality.value}`,
    ward:`${cWard.value}`
   }
}
//Validation
alertBox.innerHTML ="";

//an array to store validation  messages
const validationMessages=[];

//firstname
if(firstName.value===""){
    validationMessages.push("First name is empty.")
}

//lastname
if(lastName===""){
    validationMessages.push("Last name is empty.")
}
//age
if(age.value===""){
    validationMessages.push("Age is empty.")
}
else if(age.value>=100 && age.value<=0){
    validationMessages.push(`${age.value} is an invalid age.`)
}

//phone number 
if(phone.value===""){
    validationMessages.push("Phone number is empty.");
}else if(!isValidPhoneNumber(phone.value)){
    validationMessages.push("Invalid phone number.")
}

//email
if(email.value===""){
    validationMessages.push("Email is empty.")
}else if(!isValidEmail(email.value)){
    validationMessages.push("Invalid Email address.")
}







console.log(userdata);
},)