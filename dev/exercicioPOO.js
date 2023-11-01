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

class Contato {
    constructor(nome, sobrenome, phoneNumber){
        this.nome = nome
        this.sobrenome = sobrenome
        this.phoneNumber = phoneNumber
    }

    agenda = []

adicionar(nome, sobrenome, phoneNumber){
    let obj = {
        nome: nome,
        sobrenome: sobrenome,
        phoneNumber: phoneNumber
    }
this.agenda.push(obj)

}
editar(nome, sobrenome, phoneNumber){
    this.nome = nome
    this.sobrenome = sobrenome
    this.phoneNumber = phoneNumber
}
}

let contato1 = new Contato()