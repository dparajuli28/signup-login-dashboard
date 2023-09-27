const email = document.getElementById("email");

const password = document.getElementById("password");

const logInBtn = document.getElementById("login-btn");
// console.log(email);
// console.log(password);
// console.log(logInBtn);

logInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log(email.value);
  //   console.log(password.value);
  let data = {
    email: email.value,
    password: password.value,
  };
  //change object to json using json.stringify method

  const loginForm = async () => {
    const resp = await fetch("https://backend-mu-pied.vercel.app/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const loginResp = await resp.json();
    debugger;

    if (loginResp.status) {
      window.location.href = "../../dashboard.html";
    } else {
      document.getElementById("error-message").innerText = loginResp.message;
    }
  };
  loginForm();
});
