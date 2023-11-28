//A ideia é ter um contador no centro da tela que terá seu valor aumentado em 1 
//cada vez que o usuário apertar o botão "Increase" ou reduzido em 1
//caso o botão "Decrease" for apertado.
//Também haverá um botão "Reset" para redefinir o valor para 0
//
//Sempre que o valor for maior que 1, o contador será verde e caso seja menor que 1, será vermelho. Sendo preto enquanto for 0.
//

//3 botões, que vão tá dentro de um flex, cada um com sua id própria
//1 elemento de texto com classe .number
//1 elemento de texto escrito "Counter"


// Versão sofisticada seria fazer com que verifique se a aba está ativa pra evitar gasto
//desnecessário de recurso

//botões
const increasebtn = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

//display
const display = document.querySelector("#value");
var counter = 0;

display.textContent = parseInt(display.textContent)
console.log(display.textContent);
console.log(typeof display);


//aumentar
increasebtn.addEventListener("click", function () {
    counter = parseInt(display.textContent);
    counter ++;
    display.textContent = counter;
    console.log(display.textContent);
    console.log(typeof display);
    console.log(counter);
    console.log(typeof counter);
    detectordacor()
});

//diminuir
decrease.addEventListener("click", function(){
    counter = parseInt(display.textContent);
    counter --;
    display.textContent = counter;
    detectordacor()
})

//Reset
reset.addEventListener("click", function(){
    display.textContent = 0;
    detectordacor()
    console.log(display.textContent);
    console.log(typeof display.textContent);
    console.log(counter);
    console.log(typeof counter);
});



//Mudando as cores
function detectordacor() {
    let i = 0;
    var corN = ["black", "red", "green"];
    counter = parseInt(display.textContent);
    if (counter>= 1) {
        display.style.color = "green";  
    }
    if (counter<= -1) {
        display.style.color = "red";
    }
    if (counter== 0) {
        display.style.color = "black";
    }
}