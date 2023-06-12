
function validarFormulario() {
    const login = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    // Verifica se o campo de login está vazio
    if (login.trim() === "") {
      alert("Por favor, insira seu e-mail.");
      return false;
    }

    // Verifica se o e-mail é válido
    if (!validarEmail(login)) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    }

    // Verifica se o campo de senha está vazio
    if (senha.trim() === "") {
      alert("Por favor, insira sua senha.");
      return false;
    }

    // Se todas as validações passarem, redireciona para o link na mesma janela
    window.location.href = "./login-page.html"; 
    // Retorna false para evitar o envio do formulário
    return false;
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }