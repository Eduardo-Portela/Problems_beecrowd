// class Veiculo{
//     constructor(marca, modelo, ano){
//         this.marca = marca
//         this.modelo = modelo
//         this.ano = ano
//     }

// dirigir(mensagem){
//     return mensagem
// }
// }

// let veiculo1 = new Veiculo("Hyundai", "civic", 2019)
// console.log(veiculo1.dirigir("Estou dirigindo um civic"))


// class ContaBancaria {
//     constructor(salario, saldo, nomeDoBanco){
//         this.salario = salario
//         this.saldo = saldo
//         this.nomeDoBanco = nomeDoBanco
//     }

//     depositar(valor){
//         this.saldo += valor
//     }

//     sacar(valor){
//         this.saldo -= valor
//     }
//     verificarSaldo(){
//         return "Seu saldo é: " + this.saldo
//     }
// }
// let conta1 = new ContaBancaria(1500, 10000, "bradesco")
// conta1.sacar(5000)
// conta1.depositar(10000)
// console.log(conta1.verificarSaldo())

// class Contato {
//     constructor(nome, sobrenome, phoneNumber){
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.phoneNumber = phoneNumber
//     }
// }
// class Agenda{
//     constructor() {
//         this.contatos = []
//     }


// adicionarContato(contato){

// this.contatos.push(contato)

// }
// editarContato(nomeAntigo,novoContato){
// const contatoIndex = this.contatos.findIndex(contato => contato.nome === nomeAntigo)
// if(contatoIndex !== -1){
//     this.contatos[contatoIndex] = novoContato
// }
// }

// excluirContato(nome) {
//     const contatoIndex = this.contatos.findIndex(contato => contato.nome === nome)
// if(contatoIndex !== -1){
//     this.contatos.splice(contatoIndex, 1 )
// }
// }
// }
// const agenda = new Agenda()

// const contato1 = new Contato("João", "Silva", "123456789")
// const contato2 = new Contato("Maria", "Pereira", "987654321");
// const contato3 = new Contato("junior", "Pereira", "987654321");

// agenda.adicionarContato(contato1)
// agenda.adicionarContato(contato2)

// agenda.editarContato("Maria",contato3 )
// agenda.excluirContato("junior")
// console.log(agenda.contatos)

class Tarefa {
    constructor(titulo, descricao, dataDeVencimento) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.dataDeVencimento = dataDeVencimento;
    }
  }

class GerenciadorDeTarefas {
    constructor(){
        this.tarefas = []
    }



adicionarTarefa(tarefa){
    this.tarefas.push(tarefa)
}

removerTarefa(titulo){
    const findIndex = this.tarefas.findIndex(tarefa => tarefa.titulo === titulo)
    if(findIndex !== -1){
        this.tarefas.splice(findIndex,1)
    }
}

listarTarefas(){
    return this.tarefas
}
}

const gerenciador = new GerenciadorDeTarefas()
const tarefa1 = new Tarefa("Limpar pc", "Limpar pc", "hoje")
const tarefa2 = new Tarefa("beber agua", "beber agua", "amanhã")
const tarefa3 = new Tarefa("Jogar", "Jogar", "Depois")

gerenciador.adicionarTarefa(tarefa1)
gerenciador.adicionarTarefa(tarefa3)
gerenciador.adicionarTarefa(tarefa2)

gerenciador.removerTarefa("Jogar")

console.log(gerenciador.listarTarefas())