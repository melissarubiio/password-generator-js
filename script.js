// Function to generate a password with different parameters
function generatePassword() {
  // Get the password length from the input element
  const passwordLengthInput = document.getElementById('password-length');
  const passwordLength = parseInt(passwordLengthInput.value);

  // Validate that the password length is a number and is within the specified range
  if (isNaN(passwordLength)) {
    alert('Please enter a valid password length');
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 characters');
    return;
  }

  // Check which character types the user wants to include in the password
  const includeNumbers = document.getElementById('include-numbers').checked;
  const includeSymbols = document.getElementById('include-symbols').checked;
  const includeLowercase = document.getElementById('include-lowercase').checked;
  const includeUppercase = document.getElementById('include-uppercase').checked;

  // Validate that at least one character type is selected
  if (!includeNumbers && !includeSymbols && !includeLowercase && !includeUppercase) {
    alert('Please select at least one character type to include in the password');
    return;
  }

  // Define the different character types as arrays of strings
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '.', '<', '>', '/', '?'];
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Create an array of character types to include in the password
  const characterTypes = [];
  if (includeNumbers) characterTypes.push(numbers);
  if (includeSymbols) characterTypes.push(symbols);
  if (includeLowercase) characterTypes.push(lowercase);
  if (includeUppercase) characterTypes.push(uppercase);

  // Initialize the password as an empty string
  let password = '';


      // Select a random character from each character type array and add it to the password
  for (let i = 0; i < passwordLength; i++) {
    const characterType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
    const character = characterType[Math.floor(Math.random() * characterType.length)];
    password += character;
  }

  // Set the password in the textarea element
  const passwordTextarea = document.getElementById('password');
  passwordTextarea.value = password;
}

// Add an event listener to the generate button to trigger the generatePassword function when the button is clicked
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', generatePassword);
