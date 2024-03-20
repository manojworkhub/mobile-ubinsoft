const form = document.getElementById("form")
const email = document.getElementById('email')
const passwords = document.getElementById('password')

form.addEventListener('submit', function () {
  validation()
})

function validation() {
  const msg = document.querySelector('.error');
  const msgtwo = document.querySelector('.errortwo');
  const emailVal = email.value;
  const passwordVal = passwords.value;

  // let uppercaseRegex = /[A-Z]/g;
  // let lowercaseRegex = /[a-z]/g;
  // let numbersRegex = /[0-9]/g;


  if (emailVal === "") {

    msg.innerText = "*Enter correct mail id";
    msg.style.color = "red";
    document.getElementById("c").style.borderColor = "red";
  }
  
  // else if (!validateEmail()) {  
  //   msg.innerText = "Enter correct mail id";
  //   msg.style.color = "blue";
  //   document.getElementById("c").style.borderColor = "red";
  // }

  else {
    
    msg.innerHTML = "grate";
    msg.style.color = "green";
    document.getElementById("c").style.borderColor = "green";
  }




  if (passwordVal === '') {
    msgtwo.innerText = "*Incorrect password"
    msgtwo.style.color = "red"
    document.getElementById("d").style.borderColor = "red";
  }
  else if (passwordVal.length<=8 && passwordVal.length<=8 ){
    msgtwo.innerText = "*password must be 9 letters "
    msgtwo.style.color = "red"
    document.getElementById("d").style.borderColor = "red";
  }
  // else if (passwordVal.value.match(uppercaseRegex)){
  //   msgtwo.innerText = "password must be one or two uppercase "
  //   msgtwo.style.color = "red"
  //   document.getElementById("d").style.borderColor = "red";
  // }
  // else if (passwordVal.value.match(lowercaseRegex)){
  //   msgtwo.innerText = "password must be one or two lowercase "
  //   msgtwo.style.color = "red"
  //   document.getElementById("d").style.borderColor = "red";
  // }
  // else if (passwordVal.value.match(numbersRegex)){
  //   msgtwo.innerText = "password must be 1 or 2 numbers "
  //   msgtwo.style.color = "red"
  //   document.getElementById("d").style.borderColor = "red";
  // }
  else {
    msgtwo.innerText = "strong password "
    msgtwo.style.color = "green"
    document.getElementById("d").style.borderColor = "green";
  }
 
}








/*******email validathion code**** */

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};