document.addEventListener("DOMContentLoaded", () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let profile = document.getElementById("profile");
  let country = document.getElementById("country");

  if (localStorage.getItem("user")) {
    let user = JSON.parse(localStorage.getItem("user"));
    name.value = user.name;
    email.value = user.email;
  }

  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Captura os radios no momento do submit
    let gender = document.querySelector('input[name="gender"]:checked');
    let interests = document.querySelectorAll(
      'input[name="interests"]:checked'
    );

    if (password.value !== confirmPassword.value) {
      showError(password, "As senhas não conferem.");
      return;
    }

    if (gender === null) {
      showError(null, "Informe seu sexo.", gender);
      return;
    }

    if (interests.length === 0) {
      showError(null, "Informe pelo menos 1 interesse.", interests);
      return;
    }
    if (!profile.value) {
      showError(null ,"Você precisa selecionar um arquivo", profile);
      return;
    }
    if(country.value === "") {
      showError(null ,"Você precisa selecionar seu país", null);
      return;
    }


    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name.value,
        email: email.value,
        country: country.value
      })
    );

    name.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    gender.checked = false;
    interests.forEach((interest) => {
      interest.checked = false;
    });

    alert("Cadastro enviado com sucesso!");
  });
});

let errorTimeout;

function showError(input = null, message, checkedInput = null) {
  const p = document.getElementById("errorMsg");
  const containerError = document.getElementById("errorContainer");

  // Cancela timeout anterior, se existir
  if (errorTimeout) {
    clearTimeout(errorTimeout);
  }

  // Mostra a mensagem
  p.innerText = message;
  containerError.style.display = "flex";

  // Aplica estilos de erro ao input, se fornecido
  if (input) {
    input.style.outline = "none";
    input.style.border = "1px solid red";
  }

  // Limpa tudo após 4 segundos
  errorTimeout = setTimeout(() => {
    p.innerText = "";
    containerError.style.display = "none";
    if (input) {
      input.style.outline = "";
      input.style.border = "";
    }
  }, 4000);
}
