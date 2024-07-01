// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


//Um navbar que quando a dimensão da janela chegue a X, será transformado em um ícone que quando clicado abrirá um menu nav abaixo do título
//vou precisar do nav e dos componentes do nav
//Os componentes do nav precisam estar dentro do mesmo nav


//Adicionar condição de moouseover e scroll

//Elementos

const navbutton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


//Function

navbutton.addEventListener("click", function(){
    this.classList.toggle("close");
    links.classList.toggle("overlay");
});