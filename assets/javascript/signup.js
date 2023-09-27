const signupHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const gender = document.querySelector("#gender").value;
  const dateOfBirth = document.querySelector("#dob").value;
  const password = document.querySelector("#password").value;

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    gender: gender,
    dob: dateOfBirth,
    password: password,
  };

  const resp = await fetch(
    "https://backend-mu-pied.vercel.app/users/register",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const signupResp = await resp.json();
  debugger;
  if (signupResp.status) {
    window.location.href = "../../index.html";
  } else {
    document.getElementById("error-message").innerText = signupResp.message;
  }
};
//in this case onclick will be inside button on html file
