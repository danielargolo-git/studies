// local reviews data

//A ideia é fazer dois botões funcionais que quando clicados alteram o perfil apresentado
//


const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//Perfil
//author = name
//job = job
//info = text
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const pic = document.getElementById("person-img");

//Botões
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");


//Chamado
let index = 0;
let indexlength = reviews.length -1;

window.addEventListener("load", function(){
  changevalue();
})

//Variavel que diga qual é a última posição
//Fazer com que o valor máximo do next seja a variavel acima
//Quando chegar no valor máximo, se torna 0

next.addEventListener("click", function(){
  increase();
})

  
//Fazer com que o valor máximo do back seja 0
//Quando chegar em 0, se torne o maior index do array
prev.addEventListener("click", function(){
  decrease();
})


function increase () {
  if (index < indexlength) {
    index++;
    console.log("Avançou");
    changevalue();
  }else{
    index = 0;
    console.log("Voltou");
    changevalue();
  }
}

function decrease () {
  if (index == 0) {
    index = indexlength;
    console.log("Último");
    changevalue();
  }else if (index > 0, index <= indexlength){
    index--;
    console.log("Diminuiu 1");
    changevalue();
  }
}

function changevalue () {
  const item = reviews[index];
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  pic.src = item.img;
  console.log(index);
  console.log(indexlength);
/*   console.log(item); */
}
