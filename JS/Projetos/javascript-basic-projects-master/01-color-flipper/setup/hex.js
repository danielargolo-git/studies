const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//Fazer com que a variável color tenha uma combinação dos elementos do array hex
//O botão btn vai ter a função de chamar essa ativdade 
//Toda vez que um novo valor para color for gerado, a cor do fundo terá esse valor e ele também será mostrado na tela


btn.addEventListener("click", function() {
    let hexColor = "#";
    for (i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

