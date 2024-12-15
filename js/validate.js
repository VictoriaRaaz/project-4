//When the page loads the listenForValidation function will be executed
window.onload = listenForValidation;

// Create a function that listens on a submit even of the created form
function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}


// Create a function which validates the data sent by the form when the user clicks on submit button
function validatePersonalDataForm(e) {

  const NAME = e.target.name.value;
  const SURNAME = e.target.surname.value;
  const EMAIL = e.target.email.value;
  const MESSAGE = e.target.message.value;

  let valid = true;

  if (!NAME) {
    document.getElementById("form-name").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-name").style.visibility = "hidden";

  if (!SURNAME) {
    document.getElementById("form-surname").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-surname").style.visibility = "hidden";

  if (!EMAIL) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-email").style.visibility = "hidden";

  if (!MESSAGE) {
    document.getElementById("form-message").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-message").style.visibility = "hidden";

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, SURNAME, EMAIL, MESSAGE);
  }
}

// Create a function to save the form data in LocalStorage
function saveData(name, surname, email, message) {
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
}

// Call the function to listen the submit event
listenForValidation();