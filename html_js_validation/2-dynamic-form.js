const dynamicForm = document.getElementById("dynamicForm");
const selectNumber = document.getElementById("selectNumber");
const inputContainer = document.getElementById("inputContainer");
const errorElement = document.getElementById("error");

// Function to generate input fields based on selected value
function generateInputFields(selectedValue) {
  inputContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "field" + i;
    inputContainer.appendChild(inputField);
  }
}

// Event listener to detect changes in the dropdown menu
selectNumber.addEventListener("change", function () {
  const selectedValue = parseInt(selectNumber.value);
  generateInputFields(selectedValue);
});

// Function to validate the form before submission
function validateForm() {
  const inputFields = inputContainer.querySelectorAll("input");

  for (const inputField of inputFields) {
    if (inputField.value.trim() === "") {
      errorElement.textContent = "Please fill in all fields.";
      return false; 
    }
  }

  errorElement.textContent = "";
  return true; // Allow form submission
}

// Event listener to handle form submission
dynamicForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  if (validateForm()) {
	  dynamicForm.submit();
  }
});
