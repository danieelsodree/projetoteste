let t = document.getElementById("tituloh1");
let d = document.getElementById("textoh3");

function mudar(){
    t.addEventListener("mouseout", newText);
    t.addEventListener("mouseover", oldText);
    d.addEventListener("mouseout", novoTexto);
    d.addEventListener("mouseover", antigoTexto)
}

function newText(){
    this.innerHTML = "PROJETOTESTE";
}

function oldText(){
    this.innerHTML = "CLICAEMMIM!!";
}

function novoTexto(){
    this.innerHTML = "Todos os direitos reservados";
}

function antigoTexto(){
    this.innerHTML = "Daniel Sodré";
}