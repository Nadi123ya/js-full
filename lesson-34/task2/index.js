const baseUrl = "https://62f9bd43ffd7197707df7c8f.mockapi.io/userform";

const formElem = document.querySelector(".login-form");
const registerBtn = document.querySelector(".submit-button");

function createUser(userData) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

function onRegisterUser(event) {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));
  const newUser = {
    email: formData.email,
    name: formData.name,
    password: formData.password,
  };
  createUser(newUser)
    .then((response) => response.json())
    .then((data) => alert(JSON.stringify(data)))
    .finally(() => formElem.reset());
}

const onFormsubmit = (event) => {
  event.preventDefault();
  const isValid = formElem.reportValidity();
  isValid ? (registerBtn.disabled = false) : (registerBtn.disabled = true);

  if (!registerBtn.hasAttribute("disabled")) {
    registerBtn.setAttribute("enabled", "");
  }
};

formElem.addEventListener("input", onFormsubmit);
formElem.addEventListener("submit", onRegisterUser);
