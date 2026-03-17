const form = document.querySelector("#productForm");
const message = document.querySelector("#formMessage");
const fields = form.querySelectorAll("input, select, textarea");

function cancelPopup(event) {
  event.preventDefault();
  event.target.classList.add("error");

  const errorMessage = event.target.nextElementSibling;
  if (errorMessage) {
    errorMessage.classList.add("show");
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let formIsValid = true;

  fields.forEach((field) => {
    field.classList.remove("error");

    const errorMessage = field.nextElementSibling;
    if (errorMessage) {
      errorMessage.classList.remove("show");
    }

    if (!field.checkValidity()) {
      field.classList.add("error");

      if (errorMessage) {
        errorMessage.classList.add("show");
      }

      formIsValid = false;
    }
  });

  if (formIsValid) {
    message.textContent = "Thank you! Your suggestion has been sent.";
    message.style.color = "lightgreen";
    form.reset();
  } else {
    message.textContent = "Please fill in all fields correctly.";
    message.style.color = "#ff5c5c";
  }
}

fields.forEach((field) => {
  field.addEventListener("invalid", cancelPopup);

  field.addEventListener("input", function () {
    if (field.checkValidity()) {
      field.classList.remove("error");

      const errorMessage = field.nextElementSibling;
      if (errorMessage) {
        errorMessage.classList.remove("show");
      }
    }
  });

  field.addEventListener("change", function () {
    if (field.checkValidity()) {
      field.classList.remove("error");

      const errorMessage = field.nextElementSibling;
      if (errorMessage) {
        errorMessage.classList.remove("show");
      }
    }
  });
});

form.addEventListener("submit", handleSubmit);
