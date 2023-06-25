function assistidos() {
  let valor = document.getElementById("input-assistidos").value
  if (valor != "") {
    let inputAssistidos = document.getElementById("input-assistidos");
    let valorfilme = inputAssistidos.value
    let listaassistidos = document.getElementById("lista-assistidos");
    let novoItem = document.createElement("li");
    novoItem.textContent = valorfilme;
    listaassistidos.appendChild(novoItem);
    inputAssistidos.value = "";
  } else {
    alert('Digite um valor válido')
  }
}

function assistir() {
  let valor = document.getElementById("input-assistir").value
  if (valor != "") {
    let inputAssistir = document.getElementById("input-assistir");
    let valorfilme = inputAssistir.value
    let listaAssistir = document.getElementById("lista-assistir");
    let novoItem = document.createElement("li");
    novoItem.textContent = valorfilme;
    listaAssistir.appendChild(novoItem);
    inputAssistir.value = "";
  } else {
    alert('Digite um valor válido')
  }
}



