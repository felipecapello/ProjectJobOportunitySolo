vagas = []

function jobOpportunityAvailable (){
    //usar a variavel para concatenar de melhor maneira os valores, e transformar e simplesmente um texto para só ser exibido
    //usar o método REDUCE usando uma function anonima, com o parametros: primeiro sendo o valor acumulado, o segundo sendo a vaga a atual e por ultimo o indice dela
    //Essa função está sendo usada para pegar cada vaga dentro do array de vagas e mostrar cada vaga dentro de um alert só
    jobOpportunityInText = vagas.reduce(function(finalValue, vaga, index){ 
    finalValue += index + " -  " //vaga é um objeto que vai ser criado em outra função
    finalValue += vaga.name  + ", "
    finalValue += " (" + vaga.candidates.length + " Candidatos) \n"

        return finalValue
    },"")
        alert(jobOpportunityInText)
}

function newJobOpportunity (){
    name = prompt("Digite o nome da vaga")
    description = prompt("Digite a descrição da vaga")
    deadline = prompt("Digite a data limite da vaga")
    

    const confirmacao = confirm("Deseja realmente salvar a vaga ?" + "\n" +
                  "Nome: " + name + "\n"+
                  "Description: " + description + "\n" +
                  "Data Limite: " + deadline   
                    )
    if (confirmacao){
       const vagaCadastrada = {name, description, deadline, candidates: []} //vagaCadastrada é um objeto
        vagas.push(vagaCadastrada)
    }                
}

function showOpportunity(){
    indice = prompt("Digite o indice da vaga que deseja")
    const vaga = vagas[indice]

    //está sendo feito isso devido o candidates que é um array, confomrme criamos na função acima 
    candidatesEmTexto = vaga.candidates.reduce(function(valorFinal, candidate){
        return valorFinal + "\n - " + candidate

    }, "")

    alert("Vaga número " + indice + "\n" + 
          "Nome da vaga " + vaga.name + "\n" + 
          "Descrição: " + vaga.description + "\n" +
          "Data Limite: " + vaga.deadline + "\n" +
          "Quantidade de candidatos " + vaga.candidates.length + "\n" + 
          "Candidatos Inscritos: " + candidatesEmTexto)
}

function candidateIn (){

    nomeCandidato = prompt("Digite o nome do candidato que deseja inscrever")
    indiceVaga = prompt("Digite o indice da vaga que deseja vincular o candidato")
    vaga = vagas[indiceVaga]

    confirmacaoVaga = confirm(
        "Deseja salvar o canditato " + nomeCandidato + 
        "a vaga de indice " + indiceVaga
    )

    if(confirmacaoVaga){
        vaga.candidates.push(nomeCandidato)
    }
}

function deleteJob(){
    indice = prompt("Digite o indice da vaga que deseja deletar")
    vaga = vagas[indice]

    confirmacao = confirm( "Deseja deletar a vaga de indice " + indice + " ?\n" +
                           "Nome da vaga " + vaga.name + "\n" + 
                           "Descrição: " + vaga.description + "\n" +
                           "Data Limite: " + vaga.deadline + "\n" 
                           )
    
   if(confirm){
    vagas.splice(indice,1) //vai retirar uma vaga a partir do indice e apenas uma vaga a partir dela
   }                        
}


do {

    choice = prompt("Digite a Opção que deseja: \n 1 - Listar vagas dispóniveis \n 2 - Criar uma nova vaga \n 3 - Visualizar uma vaga \n 4 - Inscrever um candidato em uma vaga \n 5 - Excluir uma vaga \n 6 - Sair do Programa ")

    switch(choice){

        case "1":
        jobOpportunityAvailable()
        break
        case "2":
        newJobOpportunity()
        break   
        case "3":
        showOpportunity()
        break    
        case "4":
        candidateIn()
        break    
        case "5":
        deleteJob()
        break    
        case "6":
        alert("Saindo do programa")   
        break
        default:
        alert("Digite uma opção válida")
        break
    }
    
} while (choice !== "6");