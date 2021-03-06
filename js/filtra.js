var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

  var pacientes = document.querySelectorAll(".paciente")

  if(this.value.length > 0){
    for(var i=0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
  
      var expressao = new RegExp(this.value, "i"); // Está atribuindo à "expressao" o que for digitado no filtro. Sem se importar se a letra é maiuscula ou miniscula, por causa do "i"

      if(!expressao.test(nome)){ // .test é um método da regex, vai verificar caracter por caracter
        paciente.classList.add("invisivel");
      }else{
        paciente.classList.remove("invisivel");
      }
    }
  }else{
    for(var i=0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});