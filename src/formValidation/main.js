const userCardBody = document.querySelector(".userCardContainer");
userCardBody.style.display="none"

const body = document.querySelector("body");
const contBody =document.querySelector(".containerMain")
const alertBox = document.querySelector(".alertMsgSection");
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
const sameAsPermanentAddressButton = document.querySelector(
  "#sameAsPermanentBtn"
);
const submitButton = document.querySelector("#submit");


//function that capitalizes the first letter

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Here i have done dynamic district will update as the province changes
 */
const districtOptions = {
  koshi: [
    "Bhojpur",
    "Dhankuta",
    "Ilam",
    "Jhapa",
    "Khotang",
    "Morang",
    "Okhaldhunga",
    "Panchthar",
    "Sankhuwasabha",
    "Solukhumbu",
    "Sunsari",
    "Taplejung",
    "Terhathum",
    "Udayapur",
  ],
  madesh_pradesh: [
    "Saptari",
    "Siraha",
    "Dhanusa",
    "Mahottari",
    "Sarlahi",
    "Bara",
    "Parsa",
    "Rautahat",
  ],
  bagmati: [
    "Sindhuli",
    "Ramechhap",
    "Dolakha",
    "Bhaktapur",
    "Dhading",
    "Kathmandu",
    "Kavrepalanchok",
    "Lalitpur",
    "Nuwakot",
    "Rasuwa",
    "Sindhupalchok",
    "Chitwan",
    "Makwanpur",
  ],
  gandaki: [
    "Baglung",
    "Gorkha",
    "Kaski",
    "Lamjung",
    "Manang",
    "Mustang",
    "Myagdi",
    "Nawalpur",
    "Parbat",
    "Syangja",
    "Tanahun",
  ],
  lumbini: [
    "Kapilvastu",
    "Parasi",
    "Rupendehi",
    "Argakhanchi",
    "Gulmi",
    "Palpa",
    "Dang",
    "Pyuthan",
    "Rolpa",
    "Eastern",
    "Banke",
    "Bardiya",
  ],
  karnali: [
    "Western Rukum",
    "Salyan",
    "Dolpa",
    "Humla",
    "Jumla",
    "Kalikot",
    "Mugu",
    "Surkhet",
    "Dailekh",
    "Jajarkot",
  ],
  sudurpashchim: [
    "Kailali",
    "Achham",
    "Doti",
    "Bajhang",
    "Bajura",
    "Kanchanpur",
    "Daldeldhura",
    "Baitadi",
    "Darchula",
  ],
};
//for permanent address
function UpdateDistrictOptionsForPermanent() {
  const selectedProvince = pProvince.value;
  const districts = districtOptions[selectedProvince] || [];

  //clear existing options
  pDistrict.innerHTML = "";

  // adding new options
  districts.forEach((district) => {
    const option = document.createElement("option");
    option.textContent = district;
    pDistrict.appendChild(option);
  });
}
pProvince.addEventListener("change", UpdateDistrictOptionsForPermanent);
UpdateDistrictOptionsForPermanent();

// for currentAddress address
function UpdateDistrictOptionsForPCurrent() {
  const selectedProvince = cProvince.value;
  const districts = districtOptions[selectedProvince] || [];

  //clear existing options
  cDistrict.innerHTML = "";

  // adding new options
  districts.forEach((district) => {
    const option = document.createElement("option");
    option.textContent = district;
    cDistrict.appendChild(option);
  });
}
cProvince.addEventListener("change", UpdateDistrictOptionsForPCurrent);
UpdateDistrictOptionsForPCurrent();
/**
 * End
 */

//evenlistener for same as permanent address button//////////////////////////////////////////////////
sameAsPermanentAddressButton.addEventListener("click", () => {
  // Seting current address fields to match permanent address
  cProvince.value = pProvince.value;
  cMunicipality.value = pMunicipality.value;
  cWard.value = pWard.value;

  // Geting the selected district from the permanent address
  const selectedDistrict = pDistrict.value;

  // Clear existing options in current district select element
  cDistrict.innerHTML = "";

  // Geting the districts for the selected province
  const districts = districtOptions[pProvince.value] || [];

  // Adding new options to current district select element
  districts.forEach((district) => {
    const option = document.createElement("option");
    option.textContent = district;
    option.value = district;
    cDistrict.appendChild(option);
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Finding the option with the selected district and set it as selected
  const selectedOption = cDistrict.querySelector(
    `option[value="${selectedDistrict}"]`
  );
  if (selectedOption) {
    selectedOption.selected = true;
  }
});

// Function to validate Email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+(?:\.[^\s@]+)?$/;
  return emailRegex.test(email);
}
// Function to validate phone number
function isValidPhoneNumber(phoneNumber) {
  // Regular expression for phone number validation
  const phoneRegex = /^\d{6,14}$/;
  return phoneRegex.test(phoneNumber);
}
/**
 * Main part//
 * Event listenerfor submit
 *
 *
 *
 */
submitButton.addEventListener("click", (e) => {
  //Validation
  alertBox.innerHTML = "";

  //an array to store validation  messages
  const validationMessages = [];

  //firstname
  if (firstName.value === "") {
    validationMessages.push("First name is empty.");
  }

  //lastname
  if (lastName.value === "") {
    validationMessages.push("Last name is empty.");
  }
  //age
  if (age.value === "") {
    validationMessages.push("Age is empty.");
  } else if (age.value >= 100 || age.value <= 0) {
    validationMessages.push(`${age.value} is an invalid age.`);
  }

  //phone number
  if (phone.value === "") {
    validationMessages.push("Phone number is empty.");
  } else if (!isValidPhoneNumber(phone.value)) {
    validationMessages.push("Invalid phone number.");
  }

  //email
  if (email.value === "") {
    validationMessages.push("Email is empty.");
  } else if (!isValidEmail(email.value)) {
    validationMessages.push("Invalid Email address.");
  }

  //permanent address municipality
  if (pMunicipality.value === "") {
    validationMessages.push("Permanent Address Municipality is empty. ");
  } else if (
    /\d/.test(pMunicipality.value) ||
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pMunicipality.value)
  ) {
    validationMessages.push(
      "Permanent Address Municipality should be text Only."
    );
  }

  //permanent address municipality
  if (pWard.value === "") {
    validationMessages.push("Permanent Address Ward is empty.");
  }else if(Number(pWard.value)<=0||Number(pWard.value)>=50){
    validationMessages.push("Invalid Permanent Address Ward.")
  }

  //current address municipality
  if (cMunicipality.value === "") {
    validationMessages.push("Current Address Municipality is empty. ");
  } else if (
    /\d/.test(cMunicipality.value) ||
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(cMunicipality.value)
  ) {
    validationMessages.push(
      "Current Address Municipality should be text Only."
    );
  }
  //current address ward
  if (cWard.value === "") {
    validationMessages.push("Current Address Ward is empty.");
  }else if(Number(cWard.value)<=0||Number(cWard.value)>=50){
    validationMessages.push("Invalid Current Address Ward.")
  }

  // display validation messages
  if (validationMessages.length > 0) {
    validationMessages.forEach((message) => {
      const validationMsg = document.createElement("div");
      validationMsg.textContent = message;
      alertBox.appendChild(validationMsg);
    });
  } else {
    //runs after the all condition are meet
    const userdata = {
      user: {
        first_name: capitalize(firstName.value),
        middle_name: middleName.value,
        last_name: capitalize(lastName.value),
        user_gender: gender.value,
        user_age: age.value,
        isAdult:function(age){
            if(age<18) return false
            else return true
        }(age.value)
        
      },
      userContactInfo: {
        user_phoneNumber: phone.value,
        user_email: email.value,
      },
      permanentAddress: {
        province: pProvince.value,
        district: pDistrict.value,
        municipality: pMunicipality.value,
        ward: pWard.value,
      },
      currentAddress: {
        province: cProvince.value,
        district: cDistrict.value,
        municipality: cMunicipality.value,
        ward: cWard.value,
      },
    };

    //creating card and subbmited message after submiting
    const submittedMessage = document.createElement("div");
    submittedMessage.classList.add("submittedMessage");
    submittedMessage.textContent="Form Submitted Sucessfully, Thankyou.";
    body.insertBefore(submittedMessage,userCardBody)

    setTimeout(() => {
        submittedMessage.remove()
    }, 2500);

    //for first name
    const usercard_firstName =document.createElement("span");
    usercard_firstName.innerHTML=`<p>Firstname: ${userdata.user.first_name}</p>`
    userCardBody.appendChild(usercard_firstName)
    
    //for Middlename
    const usercard_middleName =document.createElement("span");
    usercard_middleName.innerHTML=`<p>Middlename: ${userdata.user.middle_name}</p>`
    userCardBody.appendChild(usercard_middleName);

    //for lastname
    const usercard_lastName =document.createElement("span");
    usercard_lastName.innerHTML=`<p>Lastname: ${userdata.user.last_name}</p>`
    userCardBody.appendChild(usercard_lastName);

    //for gender
    const usercard_gender =document.createElement("span");
    usercard_gender.innerHTML=`<p>Gender: ${userdata.user.user_gender}</p>`
    userCardBody.appendChild(usercard_gender);

    //for age
    const usercard_age =document.createElement("span");
    usercard_age.innerHTML=`<p>Age: ${userdata.user.user_age}</p>`
    userCardBody.appendChild(usercard_age);

    //for phonenumber
    const usercard_phone =document.createElement("span");
    usercard_phone.innerHTML=`<p>Phone: ${userdata.userContactInfo.user_phoneNumber}</p>`
    userCardBody.appendChild(usercard_phone);

    // for email
    const usercard_email =document.createElement("span");
    usercard_email.innerHTML=`<p>Email: ${userdata.userContactInfo.user_email}</p>`
    userCardBody.appendChild(usercard_email);

    //for current address heading 
    const usercard_currentAddHeading = document.createElement("span");
    usercard_currentAddHeading.innerHTML="<p>Current Address:</p>";
    usercard_currentAddHeading.style.fontSize="1.1em"
    usercard_currentAddHeading.style.fontWeight="bold"
    usercard_currentAddHeading.style.fontFamily="italic"

    userCardBody.appendChild(usercard_currentAddHeading)

    //current address
    const usercard_cProvince=document.createElement("span");
    usercard_cProvince.innerHTML=`<p>Province: ${userdata.currentAddress.province}</p>`
    userCardBody.appendChild(usercard_cProvince)

    const usercard_cDistrict = document.createElement("span");
    usercard_cDistrict.innerHTML=`<p>District: ${userdata.currentAddress.district}</p>`
    userCardBody.appendChild(usercard_cDistrict)

    const usercard_cMuni = document.createElement("span");
    usercard_cMuni.innerHTML=`<p>Municipality: ${userdata.currentAddress.municipality}</p>`
    userCardBody.appendChild(usercard_cMuni);   

    const usercard_cWard = document.createElement("span");
    usercard_cWard.innerHTML=`<p>Ward: ${userdata.currentAddress.ward}</p>`
    userCardBody.appendChild(usercard_cWard)


    //for current address heading 
    const usercard_permanentAddHeading = document.createElement("span");
    usercard_permanentAddHeading.innerHTML="<p>Permanent Address:</p>";
    usercard_permanentAddHeading.style.fontSize="1.1em"
    usercard_permanentAddHeading.style.fontWeight="bold"
    usercard_permanentAddHeading.style.fontFamily="italic"

    userCardBody.appendChild(usercard_permanentAddHeading)

    //for permanent address in card
    const usercard_pProvince=document.createElement("span");
    usercard_pProvince.innerHTML=`<p>Province: ${userdata.permanentAddress.province}</p>`
    userCardBody.appendChild(usercard_pProvince)

    const usercard_pDistrict = document.createElement("span");
    usercard_pDistrict.innerHTML=`<p>District: ${userdata.permanentAddress.district}</p>`
    userCardBody.appendChild(usercard_pDistrict)

    const usercard_pMuni = document.createElement("span");
    usercard_pMuni.innerHTML=`<p>Municipality: ${userdata.permanentAddress.municipality}</p>`
    userCardBody.appendChild(usercard_pMuni);   

    const usercard_pWard = document.createElement("span");
    usercard_pWard.innerHTML=`<p>Ward: ${userdata.permanentAddress.ward}</p>`
    userCardBody.appendChild(usercard_pWard)

    // Clear all form fields
    firstName.value = "";
    middleName.value = "";
    lastName.value = "";
    gender.value = "";
    age.value = "";
    phone.value = "";
    email.value = "";
    pProvince.value = "koshi";
    pDistrict.value = "Bhojpur";
    pMunicipality.value = "";
    pWard.value = "";
    cProvince.value = "koshi";
    cDistrict.value = "Bhojpur";
    cMunicipality.value = "";
    cWard.value = "";
    userCardBody.style.display="block"
    console.log(userdata);
    alertBox.remove()
    submitButton.remove()
    contBody.remove()
  }



});