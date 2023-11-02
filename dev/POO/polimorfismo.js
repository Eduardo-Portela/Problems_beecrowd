//Exercicio 1

// class Veiculo{
//     constructor(marca, modelo, cilindrada){
//         this.marca = marca
//         this.modelo = modelo
//         this.cilindrada = cilindrada
//     }

// acelerar(){
//     console.log(`Acelerando Veiculo`)
// }
// }

// class carro extends Veiculo{
//     constructor(marca, modelo,cilindrada){
//         super(marca, modelo,cilindrada)
//     }
// acelerar(){
//     console.log("Acelerando o carro")
// }
// }

// const carro1 = new carro("celta", "fiat", "100")
// carro1.acelerar()

// class moto extends Veiculo{
//     constructor(marca, modelo,cilindrada){
//         super(marca, modelo,cilindrada)
//     }

// info(){
//     console.log(this.marca, this.modelo, this.cilindrada)
// }

// acelerar(){
//     console.log("Acelerando o moto")
// }
// }
// const moto1 = new moto("cb", "honda", "600")
// moto1.info()

// class bike extends Veiculo{
//     constructor(marca, modelo,cilindrada){
//         super(marca, modelo,cilindrada)
//     }

// info(){
//     console.log(this.marca, this.modelo, this.cilindrada)
// }

// acelerar(){
//     console.log("Acelerando o bike")
// }
// }

// const bike1 = new bike("caloi", "caloi", "2000")
// bike1.acelerar()

//Exercicio 2
class Livro  {
    constructor(titulo, autor, data, status){
        this.titulo = titulo
        this.autor = autor
        this.data = data
        this.status = status
    }
}

class Biblioteca {
    constructor(){
        this.livros = []
    }


adicionar(livro){
    this.livros.push(livro)
}

emprestar(livro){
    const findIndex = this.livros.findIndex(ele => ele.titulo === livro.titulo)
    if(findIndex !== -1 && livro.status == "disponivel"){
        livro.status = "indisponivel"
        console.log("Você pode alugar esse livro")
    }else{
        console.log("Este livro não está disponivel no momento")
    }
}
devolver(livro){
    const findIndex = this.livros.findIndex(ele => ele.titulo === livro.titulo)
    if(findIndex !== -1 && livro.status == "indisponivel"){
        livro.status = "disponivel"
        console.log("Você devolveu o livro com sucesso!")
    }else{
        console.log("Este livro já está disponivel")
    }
}

listar(){
   return this.livros
}
}

const lib = new Biblioteca()
const livro1 = new Livro("a", "b", "c", "disponivel")
const livro12 = new Livro("d", "e", "f", "indisponivel")
lib.adicionar(livro1)
lib.adicionar(livro12)
lib.emprestar(livro1)
lib.devolver(livro12)
console.log(lib.listar())