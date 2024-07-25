//Quadro de atividades
const atividades = [
    {
      nome: 'Comer',
      data: new Date ("2024-01-01 01:00"),
      finalizada: false
    },
    {
      nome: 'Trabalhar',
      data: new Date ("2024-01-01 01:00"),
      finalizada: true
    }
  ];
  
  const criarItemAtividade = (atividade) => {
   let checkboxElemento = '<input type="checkbox" ' ;
  
   if(atividade.finalizada){
      checkboxElemento = checkboxElemento + `checked`
   }
  
   checkboxElemento += `>`
   
   let atividadeElemento = document.createElement('li')
   atividadeElemento.innerHTML = `<li style = "list-style: none;">
        ${checkboxElemento}
        <span>${atividade.nome}</span> 
        <span>${atividade.data}</span></li>`
  
   return `
  <div>
    ${checkboxElemento}
    <span>${atividade.nome}</span> 
    <span>${atividade.data}</span>
  </div>
  `
  }
  
  //DOM
  const listaElemento = document.getElementById("atividadeItem")
  
  //Imprimindo
  for (let atividade of atividades){
    listaElemento.innerHTML += criarItemAtividade(atividade);
  }
  