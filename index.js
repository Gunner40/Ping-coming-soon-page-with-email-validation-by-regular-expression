const form = document.querySelector(".hero__form");
const email = document.getElementById("email");

// listen for form submit
form.addEventListener("submit", handleSubmit);

// listen for user input in email field and clear previous errors if any
email.addEventListener("keydown", (e) => {
  clearError();

  // prevent form from submitting
  e.preventDefault();
});

// handle the form submit including checking for valid email etc
function handleSubmit(e) {
  // clear any previous errors
  clearError();

  if (!email.value) {
    displayMessage(
      "Whoops! It looks like you forgot to add your email",
      "hsl(354, 100%, 66%)"
    );
  } else {
    // check for valid email using regular expression
    let validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = validEmail.test(email.value);

    if (isValid) {
      displayMessage(`Subscribed successfully. Thank you ☺️`, "green");
    } else {
      displayMessage(
        "Please provide a valid email address",
        "hsl(354, 100%, 66%)"
      );
    }
  }

  // prevent form from submitting
  e.preventDefault();
}

// create p element and display the error message to the user
function displayMessage(msg, color) {
  const message = document.createElement("p");
  message.classList.add("message");
  message.style.color = color;
  message.innerHTML = msg;

  // placement of error message depends on screensize
  if (window.innerWidth < 730) {
    email.after(message);
  } else {
    form.after(message);
  }

  email.style.borderColor = color;
}

function clearError() {
  // if the message already is being displayed it will have the class of 'message', if it exists, remove it
  if (document.querySelector(".message")) {
    document.querySelector(".message").remove();
    email.style.borderColor = "hsl(223, 100%, 88%)";
  }
}
