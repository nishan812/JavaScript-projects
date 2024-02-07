const body = document.querySelector("body");
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
        first_name: `${firstName.value}`,
        middle_name: `${middleName.value}`,
        last_name: `${lastName.value}`,
        user_gender: `${gender.value}`,
        user_age: `${age.value}`,
        isAdult: (function () {
          return parseInt(this.user_age) >= 18;
        })(),
      },
      userContactInfo: {
        user_phoneNumberr: `${phone.value}`,
        user_email: `${email.value}`,
      },
      permanentAddress: {
        province: `${pProvince.value}`,
        district: `${pDistrict.value}`,
        municipality: `${pMunicipality.value}`,
        ward: `${pWard.value}`,
      },
      currentAddress: {
        province: `${cProvince.value}`,
        district: `${cDistrict.value}`,
        municipality: `${cMunicipality.value}`,
        ward: `${cWard.value}`,
      },
    };

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
    console.log(userdata);
  }
});
