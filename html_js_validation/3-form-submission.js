document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("submitForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  // Add an event listener to the form element to handle form submission.
  submitForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Retrieve the values entered in the form fields.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Perform form validation.
    if (validateForm(name, email)) {
      // show a success message.
      displaySuccessMessage();
    } else {
      // Show an error message.
      displayErrorMessage();
    }
  });

  // Used to validate the form fields.
  function validateForm(name, email) {
    if (name === "" || email === "") {
      return false; // If name or email is empty
    }

    // Additional validation logic can be added here if needed.

    return true; // All required fields are filled
  }

  // Used to display a success message.
  function displaySuccessMessage() {
    const successMessage = document.createElement("p");
    successMessage.textContent = "Form submitted successfully!";
    successMessage.style.color = "green";
    submitForm.appendChild(successMessage);
  }

  // Used to display an error message.
  function displayErrorMessage() {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please fill in all required fields.";
    errorMessage.style.color = "red";
    submitForm.appendChild(errorMessage);
  }
});
