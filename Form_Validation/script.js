// // Initialize an array to store user data
// let usersData = [];

// document
//   .getElementById("signupForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const username = document.getElementById("username");
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");

//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

//     let isValid = true;

//     // Clear error messages
//     document
//       .querySelectorAll(".error-message")
//       .forEach((msg) => (msg.textContent = ""));

//     // Validate username
//     if (usernameValue === "") {
//       showError(username, "Username is required");
//       isValid = false;
//     } else if (usernameValue.length < 3) {
//       showError(username, "Username must be at least 3 characters");
//       isValid = false;
//     }

//     // Validate email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(emailValue)) {
//       showError(email, "Invalid email address");
//       isValid = false;
//     }

//     // Validate password
//     if (passwordValue === "") {
//       showError(password, "Password is required");
//       isValid = false;
//     } else if (passwordValue.length < 6) {
//       showError(password, "Password must be at least 6 characters");
//       isValid = false;
//     }

//     // If the form is valid, store the user data
//     if (isValid) {
//       const userData = {
//         username: usernameValue,
//         email: emailValue,
//         password: passwordValue,
//       };

//       // Add the user data to the usersData array
//       usersData.push(userData);

//       // Log the array of user objects to the console
//       console.log("Users Data Array:", usersData);

//       // Optionally, clear the form after successful submission
//       document.getElementById("signupForm").reset();
//     }
//   });

// // Function to display error messages
// function showError(input, message) {
//   const formGroup = input.parentElement;
//   const errorMessage = formGroup.querySelector(".error-message");
//   errorMessage.textContent = message;
// }

// // Event listener to hide error messages when the input is filled correctly
// document.querySelectorAll("input").forEach((input) => {
//   input.addEventListener("input", function () {
//     if (input.value.trim() !== "") {
//       input.parentElement.querySelector(".error-message").textContent = "";
//     }
//   });
// });

const userData = [];

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");
  validateForm();
});

const validateForm = () => {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  if (username === "") {
    usernameError.innerText = "Please enter the username";
    isValid = false;
  } else {
    usernameError.innerText = "";
  }

  if (email === "") {
    emailError.innerText = "Please enter the email";
    isValid = false;
  } else {
    emailError.innerText = "";
  }

  if (password === "") {
    passwordError.innerText = "Please enter the password";
    isValid = false;
  } else {
    passwordError.innerText = "";
  }

  if (isValid) {
    userData.push({ username, email, password });
    console.log("Registration successful!");
    console.log(userData); // Just to see the stored users in console
    document.getElementById("signupForm").reset();
  }
};
