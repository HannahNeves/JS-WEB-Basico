var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove()
  },500); // 500 milisegundos

  // var alvoEvento = event.target; // event foi adicionado na função para poder usar o target
  // var paiDoAlvo = alvoEvento.parentNode;
  // paiDoAlvo.remove();
});

// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//     this.remove(); // this está atrelado ao dono do evento, no caso o paciente
//   });
// });