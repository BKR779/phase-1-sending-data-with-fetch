const inputForm = document.querySelector("form");
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = document.querySelector("#userName").value;
  const userEmail = document.querySelector("#userMail").value;
  submitData(userName, userEmail);
});

function submitData(userName, userEmail) {
  const formData = {
    name: userName,
    email: userEmail,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  const destinationURL = "http://localhost:3000/users";

  return fetch(destinationURL, configurationObject)
    .then((res) => res.json())
    .then((json) => {
      let p = document.createElement("p");
      p.textContent = json[`id`];
      inputForm.appendChild(p);
    })
    .catch(function (error) {
      let message = document.createElement("p");
      message.textContent = error["message"];
      inputForm.appendChild(message);
      return error.message;
    });
}