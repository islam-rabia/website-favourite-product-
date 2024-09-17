(function () {
  let email = document.querySelector("form .input-email");
  let form = document.querySelector("form");
  let paragraph = document.querySelector("form p");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (email.value === "") {
      paragraph.classList.add("active");
      paragraph.innerHTML = "Error not email valid";
      paragraph.style.color = "#f44336";

      email.style.border = "1px solid #f44336";
    }

    let emailVal = email.value;
    let regEx = /^[a-z]+(\d+)?@gmail.[a-z]{3}$/gi;

    if (emailVal.match(regEx) && email.value !== "") {
      location.href = "https://nodejs.org/en";
    }
  });

  email.addEventListener("keyup", () => {
    let emailVal = email.value;
    let regEx = /^[a-z]+(\d+)?@gmail.[a-z]{3}$/gi;

    if (emailVal.match(regEx)) {
      paragraph.classList.add("active");
      paragraph.innerHTML = "True the email valid";
      paragraph.style.color = "#10e019";

      email.style.border = "1px solid #10e019";
    } else {
      paragraph.classList.add("active");
      paragraph.innerHTML = "Error not email valid";
      paragraph.style.color = "#f44336";

      email.style.border = "1px solid #f44336";
    }

    if (email.value === "") {
      paragraph.classList.remove("active");
      email.style.border = "none";
    }
  });
})();
