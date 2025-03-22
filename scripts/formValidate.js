function validarForm() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("mensagem").value.trim();

  if (!nome) {
    alert("Nome não informado!");
    return false;
  }

  if (!email) {
    alert("E-mail não informado!");
    return false;
  }

  if (!msg) {
    alert("Mensagem não preenchida!");
    return false;
  }

  return true;
}
