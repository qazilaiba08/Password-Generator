const passwordInput = document.querySelector(".password-box input"),
copyIcon = document.querySelector(".password-box .copy-icon"),
rangeInput = document.querySelector(".range-box input"),
sliderNumber = document.querySelector(".range-box .slider-number "),
generateBtn = document.querySelector(".generate-button ");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345679:^!$#@%*[]}{();.,+/-<>"
 
const generatePassword = () => {
   let newPassword = "";


   for (let i = 0; i < rangeInput.value; i++) {
  let randomNumber= Math.floor(Math.random() * allCharacters.length)

    newPassword += allCharacters[randomNumber];
   }
   passwordInput.value = newPassword;
}

rangeInput.addEventListener("input", () => {
    sliderNumber.innerHTML = rangeInput.value;
})


generateBtn.addEventListener("click", generatePassword)

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value); 
    alert("Password copied to clipboard!"); 
});