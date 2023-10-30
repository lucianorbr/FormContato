document.addEventListener("DOMContentLoaded", function() {
  var enviarButton = document.getElementById('enviar');
  enviarButton.addEventListener("click", validarForm);
});

function validarForm() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;
  var assunto = document.getElementById('assunto').value;

  if (assunto === "" || nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return false;
  } else {
    alert("Formulário enviado com sucesso!");
    return true;
  }
}
