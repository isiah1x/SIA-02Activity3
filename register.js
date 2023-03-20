let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

let confirmemailInput = document.getElementById("confirm email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

let submitButton = document.getElementById("submit-button");

let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");


const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};


const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    
    emptyErrorReference.classList.add("hide");
  }
};


const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};


const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};


emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});

emailconfirmInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});


submitButton.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
}); 